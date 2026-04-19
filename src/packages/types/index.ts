import type { Ref } from 'vue'

export * from './requests'

export interface Pagination {
  current: number
  defaultCurrent?: number
  pageSize: number
  total: number
  totalContent: any
  size: string
  theme: string
  pageSizeOptions: any[]
  showFirstAndLastPageBtn: boolean
  showJumper: boolean
  showPageNumber: boolean
  showPageSize: boolean
  showPreviousAndNextBtn: boolean
  [key: string]: any
}

// tab list
export interface TabList {
  key: string // component name
  permission?: string
  name?: string // cn name
  tab?: string
  slots?: object
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
