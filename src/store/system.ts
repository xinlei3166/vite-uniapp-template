import { defineStore } from 'pinia'
import { storage } from './storage'

export interface SystemState {
  showLandingPage: boolean
}

export const useSystemStore = defineStore('system', {
  state: (): SystemState => ({ showLandingPage: true }),
  getters: {
    ShowLandingPage(state) {
      return state.showLandingPage
    }
  },
  actions: {
    setLandingPage(showLandingPage: boolean) {
      this.showLandingPage = showLandingPage
    }
  }
  // persist: {
  //   enabled: true,
  //   strategies: [
  //     {
  //       key: 'system',
  //       storage: storage as any
  //     }
  //   ]
  // }
})
