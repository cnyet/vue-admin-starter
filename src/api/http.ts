/*
 * @Descripttion: HTTP请求方法封装
 * @Author: 天泽
 * @Date: 2020-07-23 16:02:48
 * @LastEditors: 天泽
 * @LastEditTime: 2020-08-21 19:15:09
 */
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { message } from 'ant-design-vue';
import { getCookie } from './auth';
import errorMessage from './messages';

// 每次最多显示一个提示框
message.config({ maxCount: 1 });

// 返回数据格式
export interface ResponseData {
  code: number;
  data: [] | null;
  message: string;
};

// 创建axios实例
const instance = axios.create({
  // baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 30000,
  responseType: 'json',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
});

// 检查权限
export function validateAuth (): boolean {
  const token = getCookie();
  if (!token) {
    return false;
  }
  instance.defaults.headers.common.Authorization = token;
  return true;
}

// 添加请求时拦截
instance.interceptors.request.use((config: AxiosRequestConfig) => {
  const isNeedAuth = config.auth || false;
  if (isNeedAuth) {
    const hasToken = validateAuth();
    if (!hasToken) {
      const error = new Error('暂无权限');
      return Promise.reject(error);
    }
  }
  return config;
});

// 添加响应时的拦截
instance.interceptors.response.use((response: AxiosResponse) => {
  if (response.status >= 200 && response.status < 300) {
    if (response.data.code && response.data.code !== 0) {
      const message = errorMessage.get(response.data.code);
      const error = message || response.statusText;
      return Promise.reject(error);
    }
  } else {
    const message = errorMessage.get(response.data.code);
    const error = message || response.statusText;
    return Promise.reject(error);
  }
  return response;
}, (error) => {
  const msg = error.response && error.response.statusText ? error.response.statusText : error;
  return Promise.reject(msg);
});

export default class Http {
  // GET请求
  static async get (
    url: string,
    params: object | null = null,
    config: AxiosRequestConfig = {}
  ): Promise<ResponseData> {
    const res = await instance({ method: 'get', url, params, ...config });
    const result: ResponseData = this.successResponse(res);
    return Promise.resolve(result);
  }
  // POST请求
  static async post (
    url: string,
    data: object | null = null,
    config: AxiosRequestConfig = {}
  ): Promise<ResponseData> {
    const res = await instance({ method: 'post', url, data, ...config });
    const result: ResponseData = this.successResponse(res);
    return Promise.resolve(result);
  }
  // PUT请求
  static async put (
    url: string,
    data: object | null = null,
    config: AxiosRequestConfig = {}
  ): Promise<ResponseData> {
    const res = await instance({ method: 'put', url, data, ...config });
    const result: ResponseData = this.successResponse(res);
    return Promise.resolve(result);
  }
  // PATCH请求
  static async patch (
    url: string,
    data: object | null = null,
    config: AxiosRequestConfig = {}
  ): Promise<ResponseData> {
    const res = await instance({ method: 'patch', url, data, ...config });
    const result: ResponseData = this.successResponse(res);
    return Promise.resolve(result);
  }
  // DELETE请求
  static async delete (
    url: string,
    config: AxiosRequestConfig = {}
  ): Promise<ResponseData> {
    const res = await instance({ method: 'delete', url, ...config });
    const result: ResponseData = this.successResponse(res);
    return Promise.resolve(result);
  }
  // 返回数据格式
  private static successResponse (res: AxiosResponse) {
    return {
      code: res.data.code || res.status,
      data: res.data.data,
      message: res.data.msg || res.statusText
    };
  }
}