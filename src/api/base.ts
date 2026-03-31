import { useRequests } from '@packages/lib'
import type { Request } from '@packages/types'
import { removeToken } from '@packages/utils'
import { useUserStore } from '@/store/user'

const errorHandler = (msg: string) => {
  const userStore = useUserStore()
  removeToken()
  userStore.cleanup()
  uni.hideToast()
  uni.showToast({ title: msg })
  setTimeout(() => {
    uni.navigateTo({ url: 'pages/login/index' })
  }, 50)
}

const baseURL = import.meta.env.VITE_API_URL

// 刷新令牌
const pureRequests = useRequests({ baseURL, errorHandler, noRefreshToken: true })
export const refreshTokenApi = (data?: Request) =>
  pureRequests.post('/user/refresh_token', { refresh_token: data?.refreshToken })

export const requests = useRequests({ baseURL, errorHandler, refreshTokenApi })
