import { defineStore } from 'pinia'
import { reqLogin } from '@/api/user'
import { GET_TOKEN, REMOVE_TOKEN, SET_TOKEN } from '@/utils/token'
import type { loginForm, loginResponseData } from '@/api/user/type'

let useUserStore = defineStore('user', {
  state: () => {
    return {
      loginSwitchStatus: false, //登录开关的状态
      token: GET_TOKEN(), //token
      userName: '',
      remainingQuantity: '',
    }
  },
  actions: {
    //登录请求
    async userLogin(data: loginForm) {
      let result: loginResponseData = await reqLogin(data)
      if (result.code === 200) {
        this.token = result.data.token as string
        SET_TOKEN(result.data.token)
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },

    //退出登录
    userLogout() {
      this.token = ''
      REMOVE_TOKEN()
    },
  },
  getters: {},
})

export default useUserStore
