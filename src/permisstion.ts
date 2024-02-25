//路由鉴权
import router from '@/router'
//引入进度条
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

import useUserStore from '@/stores/modules/user'

import pinia from '@/stores/index.ts'

const userStore = useUserStore(pinia)

nprogress.configure({ showSpinner: false })

//全局前置守卫
router.beforeEach(async (_to: any, _from: any, next: any) => {
  nprogress.start()
  if (userStore.userName) {
    next()
  } else {
    //如果没有用户信息，在守卫发请求获取到用户信息再放行
    try {
      await userStore.getUserInfo()
      next()
    } catch (error) {
      //token过期
      //用户手动修改了token信息
      //退出登录->清空用户相关数据
      userStore.userLogout()
      next()
    }
  }
})

//全局后置守卫
router.afterEach(() => {
  nprogress.done()
})

//第一个问题：任意路由切换实现进度条业务——nprogress
//第二个问题：路由鉴权

//用户未登录，可以访问login，其余六个指向login
//登陆成功后，不可以访问login，其余的路由可以访问
