import { useUserStore } from '@/store/user'

const storageKeyPrefix = import.meta.env.VITE_APP_STORAGE_KEY_PREFIX
export const TokenKey = `${storageKeyPrefix}Token`

export const setToken = (token: string) => uni.setStorageSync(TokenKey, token) // { expires: 1 }
export const getToken = () => uni.getStorageSync(TokenKey)
export const removeToken = () => {
  uni.removeStorageSync(TokenKey)
}

// logout
export const logoutCleanup = () => {
  const userStore = useUserStore()
  removeToken()
  uni.navigateTo({ url: '/pages/login/index' })
  userStore.cleanup()
}
