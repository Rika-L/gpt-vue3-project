//统一管理用户相关的接口
import request from '@/utils/request.ts'
import type {
  loginForm,
  loginResponseData,
  useResponseData,
} from '@/api/user/type.ts'

//统一管理接口
enum API {
  LOGIN_URL = '/api/login/',
  USERINFO_URL = '/user/info',
}

//暴露请求函数
//登录接口方法
export const reqLogin = (data: loginForm) =>
  request.post<any, loginResponseData>(API.LOGIN_URL, data)

// 获取用户信息
export const reqUserInfo = () =>
  request.get<any, useResponseData>(API.USERINFO_URL)
