import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login'] // no redirect whitelist 白名单，不需要健鉴权

router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()

  // set page title
  document.title = getPageTitle(to.meta.title)

  const hasGetUserInfo = store.getters.user; // 获取本地用户信息

  // determine whether the user has logged in
  const hasToken = getToken()

  if(to.meta.auth) {
    // 说明页面需要鉴权
    if(hasGetUserInfo) {
      // 有用户信息
      next()
    } else {
      // 没有用户信息 看一下是否有 token
      const hasToken = localStorage.getItem('adminToken')
      if(hasToken) {
        // 有 token , 需要验证token 有效性
        try{
          await store.dispatch('user/getInfo')
          next()
        } catch(error) {
          await store.dispatch('user/resetToken')
          Message.error('登录过期，请重新登录')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      } else {
        // 说明没有token, 需要重新登录
        next(`/login?redirect=${to.path}`)
        NProgress.done()
      }
    }
  } else {
    // 说明该页面不需要鉴权
    if(to.path === './login' && hasGetUserInfo) {
      next({ path: '/' })
    } else {
      next()
    }
    NProgress.done()
  }


  // 下方是 vue-elemement-admin 原本的鉴权流程
  // if (hasToken) {
  //   if (to.path === '/login') {
  //     // if is logged in, redirect to the home page
  //     next({ path: '/' })
  //     NProgress.done()
  //   } else {
  //     const hasGetUserInfo = store.getters.name
  //     if (hasGetUserInfo) {
  //       next()
  //     } else {
  //       try {
  //         // get user info
  //         await store.dispatch('user/getInfo')

  //         next()
  //       } catch (error) {
  //         // remove token and go to login page to re-login
  //         await store.dispatch('user/resetToken')
  //         Message.error(error || 'Has Error')
  //         next(`/login?redirect=${to.path}`)
  //         NProgress.done()
  //       }
  //     }
  //   }
  // } else {
  //   /* has no token*/

  //   if (whiteList.indexOf(to.path) !== -1) {
  //     // in the free login whitelist, go directly
  //     next()
  //   } else {
  //     // other pages that do not have permission to access are redirected to the login page.
  //     next(`/login?redirect=${to.path}`)
  //     NProgress.done()
  //   }
  // }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
