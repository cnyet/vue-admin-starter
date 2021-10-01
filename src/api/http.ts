/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 * @Descripttion: HTTP请求方法封装
 * @Author: 天泽
 * @Date: 2020-07-23 16:02:48
 * @LastEditors: 天泽
 * @LastEditTime: 2021-10-01 17:23:58
 */
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'
import { message } from 'ant-design-vue'
import { getCookie } from '@/utils/auth'
import router from '@/router'
import errorMessage from './messages'

// 每次最多显示一个提示框
message.config({ maxCount: 1 })

// 返回数据格式
export interface ResponseData {
  code: number;
  data: any;
  message: string;
};

// 创建axios实例
const instance = axios.create({
  // baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 30000,
  responseType: 'json',
  withCredentials: true
})

// 检查权限
export function validateAuth (): boolean {
  const token = getCookie()
  if (!token) {
    return false
  }
  instance.defaults.headers.common.Authorization = token
  return true
}

// 添加请求时拦截
instance.interceptors.request.use((config: AxiosRequestConfig) => {
  const isNeedAuth = config.auth || false
  if (isNeedAuth) {
    const hasToken = validateAuth()
    if (!hasToken) {
      const error = new Error('暂无权限')
      return Promise.reject(error)
    }
  }
  return config
})

// 添加响应时的拦截
instance.interceptors.response.use((response: any) => {
  if (response.status >= 200 && response.status < 300) {
    const code = response.data.code || response.data.response_code
    if (code === 200 || code === 1) {
      return response
    }
    if (code === 0) {
      router.replace('/login')
    }
    if (code === 403) {
      // 用户无权限
      router.replace('/403')
    }
    const message = errorMessage(response)
    return Promise.reject(message)
  } else {
    const message = errorMessage(response)
    return Promise.reject(message)
  }
}, (error) => {
  const message = errorMessage(error)
  const errorMsg = message || error
  return Promise.reject(errorMsg)
})

export default class Http {
  // 封装 GET、POST、PATCH、PUT、DELETE 等请求的配置参数
  static async create (config: AxiosRequestConfig): Promise<ResponseData> {
    const res = await instance(config)
    const result: ResponseData = this.successResponse(res)
    return Promise.resolve(result)
  }
  // 返回数据格式
  private static successResponse (res: AxiosResponse) {
    return {
      code: res.data.code || res.status,
      data: res.data.data || res.data,
      message: res.data.message || res.statusText
    }
  }
}
