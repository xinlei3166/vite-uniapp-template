import type { Ref } from 'vue'
import type { AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios-miniprogram'

export * from './requests'

export type Method = 'get' | 'post' | 'put' | 'patch' | 'delete'

export interface RequestOptions {
  showLoading?: boolean
  withRequestId?: boolean
  responseType?: 'json' | 'blob' | 'base64' | 'raw'
  stringify?: boolean
  cb?: Function
  fileKey?: string
  fileName?: string
  blobOptions?: Record<string, any>
}

export interface RequestConfig {
  requestOptions?: RequestOptions
  [key: string]: any
}
export type Config = RequestConfig & AxiosRequestConfig
export type InternalConfig = RequestConfig & InternalAxiosRequestConfig

export interface Request {
  [key: string]: any
}

export type RequestMethod = 'get' | 'post' | 'put' | 'patch' | 'delete'
export type ResponseData = null | Array<any> | Record<string, any>

export interface Response {
  code: number | string
  data: ResponseData

  [key: string]: any
}

export interface Pagination {
  size: string
  current: number
  defaultCurrent: number
  pageSize: number
  total: number

  showTotal(total: number | string): string

  showLessItems: boolean
  showQuickJumper: boolean
  showSizeChanger: boolean
  pageSizeOptions: string[]
  [key: string]: any
}

// tab list
export interface TabList {
  key: string // component name
  permission?: string
  name?: string // cn name
  tab?: string
  slots?: Object
}

export type TabListRef = Ref<TabList[]>

// visible
export interface Visible extends Record<string, any> {
  visible: boolean
  title?: string
  id?: number
  mode?: 'new' | 'edit' | string
  data?: any[] | Record<string, any>
}
