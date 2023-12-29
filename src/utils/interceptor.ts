import pages from '../pages.json'
import { getToken } from '@packages/utils'

const config = {
  // 页面都不需要登录
  needLogin: true,
  // 不需要登录的页面，白名单
  tabBarList: pages.tabBar.list.slice(),
  whiteList: [
    '/',
    ...pages.pages.filter((page: Record<string, any>) => !page.auth).map(page => '/' + page.path)
  ],
  // 登录页
  loginPage: '/pages/login/index'
}

export function interceptRoute() {
  // h5路由拦截，用于拦截用户地址栏输入地址
  const locationUrl = window.location.href.split('/#')[1]
  console.log('locationUrl', locationUrl)
  if (!config.whiteList.includes(locationUrl) && !getToken()) {
    uni.navigateTo({ url: config.loginPage })
  }

  // uniapp跳转页面路由拦截器
  const list = ['navigateTo', 'redirectTo', 'reLaunch', 'switchTab', 'navigateBack']
  list.forEach(item => {
    // 用遍历的方式分别为uni.navigateTo, uni.redirectTo, uni.reLaunch, uni.switchTab 这4个路由方法添加拦截器
    uni.addInterceptor(item, {
      invoke(options) {
        console.log('options', options)
        if (options.from === 'backbutton') return true
        if (!config.needLogin) return true
        // 调用前拦截
        const url = options.url.split('?')[0] //获取要跳转的页面路径（url去掉"?"和"?"后的参数）
        const notNeedLogin = config.whiteList.includes(url)
        // 如果在whiteList里面就不需要登录
        if (notNeedLogin) return true
        if (!getToken()) {
          uni.navigateTo({ url: config.loginPage }) // 跳转到登录页
          return false
        }
        return true
      },
      success(res) {
        // console.log('success:', res)
      },
      fail(err) {
        // 失败回调拦截
        console.log('fail', err)
      }
    })
  })
}
