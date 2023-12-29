import axios from 'axios-miniprogram'
import type { Config, InternalConfig, RequestsConfig, Method } from '@packages/types'
import { httpMsg } from '@packages/types/enums'
import { getToken, writeFile, writeBase64File } from '@packages/utils'

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

// const createRequests = (requestsConfig: RequestsConfig = {}) => {
export const useRequests = (requestsConfig: RequestsConfig = {}) => {
  const baseURL = requestsConfig.baseURL || import.meta.env.VITE_API_URL
  const AuthorizationKey = requestsConfig.AuthorizationKey || 'Access-Token'
  const errorCodes = requestsConfig.errorCodes || [500, 400]
  const codeKey = requestsConfig.codeKey || 'code'
  const messageKey = requestsConfig.messageKey || 'message'
  const successCode = requestsConfig.successCode || 0
  const errorHandler = requestsConfig.errorHandler

  const service = axios.create({
    baseURL,
    // timeout: 60 * 1000 * 5,
    withCredentials: true,
    headers: {
      // 'Content-Type': 'application/x-www-form-urlencoded',
      // Authorization: 'token',
      'Content-Type': 'application/json'
    },
    requestOptions: {
      showLoading: false,
      withRequestId: false,
      responseType: 'json', // json, blob
      fileName: undefined
    }
  } as Config)

  // request 拦截器
  service.interceptors.request.use(
    async (config: InternalConfig) => {
      // config.data = qs.stringify(config.data)
      config.headers = config.headers || {}
      const token = getToken()
      if (token) {
        config.headers[AuthorizationKey] = token
      }
      startLoading(config?.requestOptions?.showLoading)
      return config
    },
    error => {
      return Promise.reject(error)
    }
  )

  // response 拦截器
  service.interceptors.response.use(
    (response: any) => {
      endLoading(response?.config?.requestOptions?.showLoading)
      const { responseType } = response?.config?.requestOptions || {}
      if (responseType === 'raw') return response
      if (responseType === 'blob') return response.data
      const { [codeKey]: code, [messageKey]: msg } = response?.data || {}
      if (code && errorCodes.includes(code)) {
        // uni.showToast({ title: msg })
        // uni.navigateTo({ url: '/pages/login/index' })
        errorHandler?.(msg)
        return response.data
      }
      if (code && code !== successCode) {
        uni.hideToast()
        uni.showToast({ title: msg })
      }
      return response?.data
    },
    error => {
      if (error && error.response) {
        error.message = httpMsg[error.response.status] || httpMsg.errorMsg
      }
      if (error.message) {
        uni.hideToast()
        uni.showToast({ title: error.message })
      }
      return Promise.reject(error)
    }
  )

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

  const patch = (url: string, ...args: any): Promise<any> =>
    service
      .patch(url, ...args)
      .then(res => res)
      .catch(e => console.log(e))

  const _delete = (url: string, ...args: any): Promise<any> =>
    service
      .delete(url, ...args)
      .then(res => res)
      .catch(e => console.log(e))

  const download = (url: string, data: any, config: Config = {}): Promise<any> => {
    let api
    const method = (config.method || 'post') as Method
    if (method === 'get') {
      api = service[method](url, { ...config, params: data })
    } else {
      api = service[method](url, data, config)
    }
    const { fileName, responseType, stringify, cb, blobOptions } = config.requestOptions || {}
    return api
      .then(async (res: any) => {
        cb?.(res)
        let data
        if (responseType === 'blob') {
          data = res
        } else {
          const { code, data: _data, message: msg } = res
          if (code && code !== successCode) {
            return
          }
          data = stringify ? JSON.stringify(_data) : _data
        }
        const write = responseType === 'base64' ? writeBase64File : writeFile
        await write(fileName as string, data, blobOptions)
        return true
      })
      .catch(e => console.log(e))
  }

  return { request, get, post, put, patch, delete: _delete, download }
}

// export const useRequests = createRequests
