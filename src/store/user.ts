import { defineStore } from 'pinia'
import { getPermissions, getUserinfo } from '@/api'
import { storage } from './storage'

const storageKeyPrefix = import.meta.env.VITE_APP_STORAGE_KEY_PREFIX

export interface UserState {
  userinfo: Record<string, any>
  permissions: Record<string, any>[]
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({ userinfo: {}, permissions: [] }),
  getters: {
    Userinfo(state) {
      return state.userinfo
    },
    Permissions(state) {
      return state.permissions
    }
  },
  actions: {
    async setUserName(userName: string) {
      this.userinfo = { ...this.userinfo, userName }
    },
    async setUserinfo() {
      const res: any = await getUserinfo()
      if (!res || res.code !== 0) return
      this.userinfo = res.data
    },
    async setPermissions() {
      // const res: any = await getPermissions()
      // if (!res || res.code !== 0) return
      // this.permissions = res.data
    },
    cleanup() {
      this.userinfo = {}
      this.permissions = []
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: storageKeyPrefix + 'User',
        storage: storage as any
      }
    ]
  }
})
