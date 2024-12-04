import { defineStore } from 'pinia'

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
})
