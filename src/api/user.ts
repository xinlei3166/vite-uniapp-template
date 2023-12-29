import type { Request, Response, Config } from '@packages/types'
import { requests } from './base'
import * as mock from '@/mock'

// 用户当前菜单列表
export const getUserMenu = (config?: Config): Promise<any> => {
  // return requests.get('/api/mock/user/menu', config)
  return mock.getUserMenu()
}

// 权限列表-扁平化
export const getPermissions = (config?: Config): Promise<any> => {
  // return requests.get('/api/mock/user/permissions', config)
  return mock.getPermissions()
}

// 用户当前菜单列表
export const getUserinfo = (config?: Config): Promise<any> => {
  // return requests.get('/api/mock/user/info', config)
  return mock.getUserinfo()
}

// 普通用户登录
export const login = (data?: Request) => {
  // return requests.post('/api/mock/user/login', data)
  return mock.login()
}

// 退出登录
export const logout = () => {
  // return requests.post('/api/mock/user/logout')
  return mock.logout()
}
