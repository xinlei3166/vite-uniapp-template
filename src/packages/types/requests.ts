import type { UniServiceRequestConfig, UniServiceHttpMethod } from '@packages/lib/requests'

export interface RequestsConfig {
  baseURL?: string
  AuthorizationKey?: string
  errorCodes?: Array<string | number>
  codeKey?: string
  messageKey?: string
  successCode?: string | number
  errorHandler?: (...args: any[]) => void
}

export type Method = UniServiceHttpMethod

export interface RequestOptions {
  showLoading?: boolean
  withRequestId?: boolean
  responseType?: 'json' | 'blob' | 'base64' | 'raw'
  stringify?: boolean
  cb?: (...args: any[]) => void
  fileKey?: string
  fileName?: string
  blobOptions?: Record<string, any>
}

export interface RequestConfig {
  requestOptions?: RequestOptions
  [key: string]: any
}
export type Config = RequestConfig & UniServiceRequestConfig
export type InternalConfig = RequestConfig & UniServiceRequestConfig

export interface Request {
  [key: string]: any
}

export type RequestMethod = UniServiceHttpMethod
export type ResponseData = null | Array<any> | Record<string, any>

export interface Response {
  code: number | string
  data: ResponseData
  [key: string]: any
}
