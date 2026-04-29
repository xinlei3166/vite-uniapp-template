import type { Config, RequestsConfig } from '@packages/types'
import { httpMsg, ContentTypeEnum } from '@packages/types/enums'
import { getToken, writeFile, writeBase64File } from '@packages/utils'
import type { UniServiceHttpMethodLowercase } from './service.ts'
import UniService from './service.ts'
// import { useTokenRefresh } from './useTokenRefresh'
import { parseBlobError } from './utils'

function startLoading(showLoading = false) {
  if (!showLoading) return
  uni.showLoading({
    title: '加载中...'
  })
}
function endLoading(showLoading = false) {
  if (!showLoading) return
  uni.hideLoading()
}

export const useRequests = (requestsConfig: RequestsConfig = {}) => {
  const baseURL = requestsConfig.baseURL || import.meta.env.VITE_API_URL
  const authorizationKey = requestsConfig.authorizationKey || 'Authorization'
  const errorCodes = requestsConfig.errorCodes || [500, 400]
  const codeKey = requestsConfig.codeKey || 'code'
  const messageKey = requestsConfig.messageKey || 'message'
  const successCode = requestsConfig.successCode || 0
  const errorHandler = requestsConfig.errorHandler
  // const noRefreshToken = requestsConfig.noRefreshToken
  // const refreshTokenApi = requestsConfig.refreshTokenApi

  const service = new UniService({
    baseURL,
    // timeout: 60 * 1000 * 5,
    withCredentials: false,
    headers: {
      // 'Content-Type': ContentTypeEnum.FormURLEncoded,
      // Authorization: 'token',
      'Content-Type': ContentTypeEnum.Json
    },
    requestOptions: {
      showLoading: false,
      withRequestId: false,
      responseType: 'json', // 'json' | 'blob' | 'base64' | 'raw'
      fileName: undefined
    }
  })

  // const { handleRefreshed } = useTokenRefresh({
  //   authorizationKey,
  //   successCode,
  //   errorHandler,
  //   refreshTokenApi
  // })

  service.use({
    request: config => {
      console.log('config', config)
      // config.data = qs.stringify(config.data)
      config.headers = config.headers || {}
      const token = getToken()
      if (token) {
        config.headers[authorizationKey] = token
      }
      startLoading(config?.requestOptions?.showLoading)
      return config
    },
    response: async (response, config) => {
      console.log('response', response)
      endLoading(config?.requestOptions?.showLoading)
      const { responseType, useHeaderFileName } = config?.requestOptions || {}
      if (responseType === 'raw') return response
      if (responseType === 'blob') {
        const contentType = response.headers?.['content-type']
        if (contentType.includes('application/json')) {
          const blobError = await parseBlobError(response.data, messageKey)
          uni.showToast({ title: blobError.message || '下载失败' })
          return response.data
        }
        if (useHeaderFileName) {
          return response
        }
        return response.data
      }
      const { [codeKey]: code, [messageKey]: msg } = (response?.data || {}) as Record<string, any>
      if (code && errorCodes.includes(code)) {
        // uni.showToast({ title: msg })
        // uni.navigateTo({ url: '/pages/login/index' })
        errorHandler?.(msg)
        return response.data
      }
      // token过期，需要续期
      // if (code && code === 20011 && !noRefreshToken) {
      //   return handleRefreshed(service, response.config)
      // }
      if (code && code !== successCode) {
        uni.hideToast()
        uni.showToast({ title: msg })
      }
      return response?.data
    },
    error: error => {
      let errorMessage = ''
      if (error && error.status) {
        errorMessage = httpMsg[error.status] || httpMsg.errorMsg
      }
      uni.hideToast()
      uni.showToast({ title: `${errorMessage}`, icon: 'none' })
      return Promise.reject(error)
    }
  })

  const request = (config: Config): Promise<any> =>
    service
      .request(config)
      .then(res => res)
      .catch(e => console.log(e))

  const get = (url: string, ...args: any): Promise<any> =>
    service
      .get(url, ...args)
      .then(res => res)
      .catch(e => console.log(e))

  const post = (url: string, ...args: any): Promise<any> =>
    service
      .post(url, ...args)
      .then(res => res)
      .catch(e => console.log(e))

  const put = (url: string, ...args: any): Promise<any> =>
    service
      .put(url, ...args)
      .then(res => res)
      .catch(e => console.log(e))

  // const patch = (url: string, ...args: any): Promise<any> =>
  //   service
  //     .patch(url, ...args)
  //     .then(res => res)
  //     .catch(e => console.log(e))

  const _delete = (url: string, ...args: any): Promise<any> =>
    service
      .delete(url, ...args)
      .then(res => res)
      .catch(e => console.log(e))

  const download = (url: string, data: any, config: Config = {}): Promise<any> => {
    let api
    const method = (config.method?.toLocaleLowerCase || 'get') as UniServiceHttpMethodLowercase
    if (method === 'get') {
      api = service[method](url, { ...config, params: data })
    } else {
      api = (service as any)[method](url, data, config)
    }
    const { fileName, responseType, stringify, cb, blobOptions, useHeaderFileName } =
      config.requestOptions || {}
    let headerFileName = ''
    return api
      .then(async (res: any) => {
        cb?.(res)
        let data
        if (responseType === 'blob') {
          if (!res) return false
          if (useHeaderFileName) {
            data = res.data
            // 从response的headers中获取filename, "Content-disposition", "attachment; filename=xxxx.docx"
            // 1.获取 Header，注意大小写兼容
            const contentDisposition =
              res.headers['content-disposition'] || res.headers['Content-Disposition']
            if (contentDisposition) {
              // 2.匹配 filename 或 filename*
              const fileNameMatch = contentDisposition.match(
                /filename\*?=['"]?(?:UTF-8'')?([^;'\n]*)['"]?/i
              )
              if (fileNameMatch && fileNameMatch[1]) {
                // 3.解码
                headerFileName = decodeURIComponent(fileNameMatch[1])
              }
            }
            console.log('headerFileName:', headerFileName)
          } else {
            data = res
          }
        } else {
          const { code, data: _data } = res
          if (code && code !== successCode) {
            return
          }
          data = stringify ? JSON.stringify(_data) : _data
        }
        const write = responseType === 'base64' ? writeBase64File : writeFile
        await write(fileName as string, data, blobOptions)
        return true
      })
      .catch((e: any) => console.log(e))
  }

  return { request, get, post, put, delete: _delete, download }
}

export * from './controller'
export * from './service'
