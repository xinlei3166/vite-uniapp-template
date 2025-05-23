import type { Request, Response, Config } from '@packages/types'
import { requests } from './base'
import * as mock from '@/mock'

export function getList(config?: Config): Promise<Response> {
  // return requests.get('http://jsonplaceholder.typicode.com/posts', config)
  // return requests.get('/api/mock/data/list', config)
  return mock.getList()
}
