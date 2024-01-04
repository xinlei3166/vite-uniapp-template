import qs from 'qs'
import mock from './base'

export const getList = function (options: Record<string, any> = {}) {
  const body: Record<string, any> = qs.parse(options.body)
  const arr = []
  for (let i = 0; i < (body.pageSize || 10); i++) {
    const obj = {
      id: i + 1,
      name: mock.genName(),
      phone: mock.genPhone(),
      email: mock.genEmail(),
      age: mock.genAge(1, 99),
      hobby: mock.genSentence(),
      updateTime: mock.genTime(),
      img: mock.genImg()
    }
    arr.push(obj)
  }
  return mock.response({
    code: 0,
    data: {
      list: arr,
      total: 100
    }
  })
}
