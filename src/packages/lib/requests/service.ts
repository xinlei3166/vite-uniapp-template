import type { RequestOptions } from '@packages/types'

export type UniServiceHttpMethod = UniServiceHttpMethodLowercase | UniServiceHttpMethodUppercase

export type UniServiceHttpMethodLowercase =
  | 'get'
  | 'post'
  | 'put'
  // | 'patch'
  | 'delete'
  | 'connect'
  | 'head'
  | 'options'
  | 'trace'

export type UniServiceHttpMethodUppercase =
  | 'GET'
  | 'POST'
  | 'PUT'
  // | 'PATCH'
  | 'DELETE'
  | 'CONNECT'
  | 'HEAD'
  | 'OPTIONS'
  | 'TRACE'

export interface UniServiceRequestConfig {
  baseURL?: string
  url?: string
  method?: UniServiceHttpMethod
  data?: any
  params?: Record<string, any>
  headers?: Record<string, string>
  timeout?: number
  retry?: number // Auto-retry times (default: 0)
  signal?: AbortSignal // For request cancellation
  withCredentials?: boolean
  requestOptions?: RequestOptions
  [key: string]: any
}

export interface UniServiceResponse<T = any> {
  data: T
  status: number
  headers: Record<string, string>
}

type UniServiceResponseInterceptorReturn<T> =
  | UniServiceResponse<T>
  | UniServiceResponse<T>['data']
  | UniServiceResponse<T>['status']
  | UniServiceResponse<T>['headers']

interface Interceptors {
  request: (
    config: UniServiceRequestConfig
  ) => UniServiceRequestConfig | Promise<UniServiceRequestConfig>
  response: <T>(
    res: UniServiceResponse<T>,
    config: UniServiceRequestConfig
  ) => UniServiceResponseInterceptorReturn<T> | Promise<UniServiceResponseInterceptorReturn<T>>
  error: (err: UniServiceHttpError, config?: UniServiceRequestConfig) => Promise<never>
}
interface InterceptorsArray {
  request: Array<Interceptors['request']>
  response: Array<Interceptors['response']>
  error: Array<Interceptors['error']>
}

class UniServiceHttpError extends Error {
  constructor(
    public status: number,
    public data: any,
    message?: string
  ) {
    super(message)
  }
}

class UniService {
  private config: UniServiceRequestConfig
  private interceptors: InterceptorsArray

  constructor(config: UniServiceRequestConfig = {}) {
    this.config = config
    this.interceptors = { request: [], response: [], error: [] }
  }

  // Add interceptors
  use(interceptor: Interceptors) {
    if (interceptor.request) this.interceptors.request.push(interceptor.request)
    if (interceptor.response) this.interceptors.response.push(interceptor.response)
    if (interceptor.error) this.interceptors.error.push(interceptor.error)
  }

  // Core request method
  async request<T = any>(
    config: UniServiceRequestConfig
  ): Promise<UniServiceResponseInterceptorReturn<T>> {
    try {
      // Apply request interceptors
      let mergedConfig = { ...this.config, ...config }
      for (const interceptor of this.interceptors.request) {
        mergedConfig = await interceptor(mergedConfig)
      }

      // Build URL with query params
      const url = new URL((mergedConfig.baseURL || '') + (mergedConfig.url || ''))
      if (mergedConfig.params) {
        Object.entries(mergedConfig.params).forEach(([key, value]) => {
          url.searchParams.append(key, String(value))
        })
      }

      // Abort signal check
      if (mergedConfig.signal?.aborted) {
        throw new UniServiceHttpError(0, null, 'Request aborted')
      }

      // Send request with retry logic
      let retryCount = 0
      const maxRetries = mergedConfig.retry ?? 0

      while (true) {
        try {
          const res = await this._sendRequest<T>(mergedConfig)
          // Apply response interceptors
          if (this.interceptors.response.length > 0) {
            let transformedRes
            for (const interceptor of this.interceptors.response) {
              transformedRes = await interceptor(res, mergedConfig)
            }
            return transformedRes!
          } else {
            return res
          }
        } catch (err) {
          if (retryCount >= maxRetries) throw err
          retryCount++
          await new Promise(resolve => setTimeout(resolve, 1000 * retryCount)) // Exponential backoff
        }
      }
    } catch (err) {
      // Apply error interceptors
      const error =
        err instanceof UniServiceHttpError ? err : new UniServiceHttpError(0, null, 'Unknown error')
      for (const interceptor of this.interceptors.error) {
        await interceptor(error)
      }
      throw error
    }
  }

  private _sendRequest<T>(config: UniServiceRequestConfig): Promise<UniServiceResponse<T>> {
    return new Promise((resolve, reject) => {
      const task = uni.request({
        url: config.url?.toString() as string,
        method: config.method?.toUpperCase() as UniServiceHttpMethodUppercase,
        data: config.data,
        header: config.headers,
        timeout: config.timeout,
        success: result => {
          resolve({
            data: result.data as T,
            status: result.statusCode,
            headers: result.header
          })
        },
        fail: (err: any) => {
          console.log('err', err)
          reject(new UniServiceHttpError(err.statusCode || 500, err.data, err.errMsg))
        }
      })

      // Abort handling
      config.signal?.addEventListener('abort', () => {
        task.abort()
        reject(new UniServiceHttpError(0, null, 'Request aborted'))
      })
    })
  }

  // Shortcut methods
  get<T = any>(url: string, config?: Omit<UniServiceRequestConfig, 'url' | 'method'>) {
    return this.request<T>({ ...config, url, method: 'GET' })
  }

  post<T = any>(
    url: string,
    data?: any,
    config?: Omit<UniServiceRequestConfig, 'url' | 'method' | 'data'>
  ) {
    return this.request<T>({ ...config, url, method: 'POST', data })
  }

  put<T = any>(
    url: string,
    data?: any,
    config?: Omit<UniServiceRequestConfig, 'url' | 'method' | 'data'>
  ) {
    return this.request<T>({ ...config, url, method: 'PUT', data })
  }

  delete<T = any>(url: string, config?: Omit<UniServiceRequestConfig, 'url' | 'method'>) {
    return this.request<T>({ ...config, url, method: 'DELETE' })
  }

  head<T = any>(url: string, config?: Omit<UniServiceRequestConfig, 'url' | 'method'>) {
    return this.request<T>({ ...config, url, method: 'HEAD' })
  }

  options<T = any>(url: string, config?: Omit<UniServiceRequestConfig, 'url' | 'method'>) {
    return this.request<T>({ ...config, url, method: 'OPTIONS' })
  }
}

export default UniService
