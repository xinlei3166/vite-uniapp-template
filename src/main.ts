import { createSSRApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import plugins from '@packages/plugins'
import '@packages/styles/index.scss'
import '@packages/styles/reset.scss'
import '@/styles/index.scss'
// import 'animate.css'
import 'virtual:uno.css'

export function createApp() {
  const app = createSSRApp(App)

  const systemInfo = uni?.getSystemInfoSync?.()
  console.log('systemInfo', systemInfo)
  // if (import.meta.env.DEV && ['web'].includes(systemInfo?.uniPlatform)) {
  //   import('vconsole').then((module: any) => {
  //     new module.default()
  //   })
  // }
  const pinia = createPinia()
  pinia.use(piniaPluginPersistedstate)
  app.use(pinia)
  app.use(plugins)

  if (import.meta.env.PROD) {
    app.config.errorHandler = (err, vm, info) => {
      console.group('vue_global_error')
      console.log('捕获到异常：', { err, vm, info })
      console.groupEnd()
    }

    // window.onerror = function (message, source, lineno, colno, error) {
    //   console.group('window_global_error')
    //   console.log('捕获到异常：', { message, source, lineno, colno, error })
    //   console.groupEnd()
    // }
  }

  return {
    app
  }
}
