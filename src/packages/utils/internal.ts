import { useUserStore } from '@/store/user'

const storageKeyPrefix = import.meta.env.VITE_APP_STORAGE_KEY_PREFIX
export const TokenKey = `${storageKeyPrefix}Token`

export const setToken = (token: string) => uni.setStorageSync(TokenKey, token) // { expires: 1 }
export const getToken = () => uni.getStorageSync(TokenKey)
export const removeToken = () => {
  uni.removeStorageSync(TokenKey)
  uni.removeStorageSync(RefreshTokenKey)
}

export const RefreshTokenKey = `${storageKeyPrefix}RefreshToken`
export const setRefreshToken = (token: string) => uni.setStorageSync(RefreshTokenKey, token) // { expires: 1 }
export const getRefreshToken = () => uni.getStorageSync(RefreshTokenKey)

export const setLocalValue = (key: string, value: any, stringify = false) => {
  let val = value
  if (val && stringify) {
    val = JSON.stringify(val)
  }
  uni.setStorageSync(`${storageKeyPrefix}${key}`, val)
}
export const getLocalValue = (key: string, parse = false) => {
  let val = uni.getStorageSync(`${storageKeyPrefix}${key}`)
  if (val && parse) {
    val = JSON.parse(val as string)
  }
  return val
}
export const removeLocalValue = (key: string) => {
  return uni.removeStorageSync(`${storageKeyPrefix}${key}`)
}

// logout
export const logoutCleanup = () => {
  const userStore = useUserStore()
  removeToken()
  uni.navigateTo({ url: '/pages/login/index' })
  userStore.cleanup()
}
