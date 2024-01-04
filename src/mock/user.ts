import qs from 'qs'
import mock from './base'

export const getUserMenu = function (options: Record<string, any> = {}) {
  const body: Record<string, any> = qs.parse(options.body)
  const arr: any[] = []
  return mock.response({
    code: 0,
    data: {
      list: arr,
      total: 0
    }
  })
}

export const getPermissions = function (options: Record<string, any> = {}) {
  const body: Record<string, any> = qs.parse(options.body)
  const arr: any[] = []
  return mock.response({
    code: 0,
    data: {
      list: arr,
      total: 0
    }
  })
}

export const getUserinfo = function (options: Record<string, any> = {}) {
  const body: Record<string, any> = qs.parse(options.body)
  const data = {
    id: mock.genNumber(1, 99),
    name: mock.genName(),
    phone: mock.genPhone(),
    email: mock.genEmail(),
    age: mock.genAge(),
    hobby: mock.genSentence(),
    updateTime: mock.genTime(),
    img: mock.genImg()
  }

  return mock.response({
    code: 0,
    data
  })
}

export const login = function (options: Record<string, any> = {}) {
  const body: Record<string, any> = qs.parse(options.body)
  return mock.response({
    code: 0,
    data: {
      accessToken: mock.genUniqueId()
    }
  })
}

export const logout = function (options: Record<string, any> = {}) {
  const body: Record<string, any> = qs.parse(options.body)
  return mock.response({
    code: 0
  })
}
