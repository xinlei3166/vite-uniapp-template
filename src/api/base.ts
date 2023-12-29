import { useRequests } from '@packages/lib'
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
export const requests = useRequests({ baseURL, errorHandler })
