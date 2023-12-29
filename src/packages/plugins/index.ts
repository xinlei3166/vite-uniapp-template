import type { App } from 'vue'
import auth from './auth'
import bus from './bus'
import components from './components'

export default {
  install: (app: App) => {
    app.use(auth)
    app.use(bus)
    app.use(components)
  }
}
