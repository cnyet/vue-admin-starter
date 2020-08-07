/*
 * @Descripttion: HTTP请求方法封装
 * @Author: 天泽
 * @Date: 2020-07-23 16:02:48
 * @LastEditors: 天泽
 * @LastEditTime: 2020-08-07 15:24:32
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
  baseURL: process.env.VUE_APP_API_BASE_URL,
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
  return config;
});

// 添加响应时的拦截
instance.interceptors.response.use((response: AxiosResponse) => {
  const requestUrl = response.config.url;
  let msg: string | undefined;
  if (response.status !== 200) {
    msg = errorMessage.get(response.status);
    msg = `${requestUrl} ${msg}`;
    return Promise.reject(msg);
  } else if (response.data.code !== 0) {
    msg = errorMessage.get(response.data.code);
    msg = `${requestUrl} ${msg}`;
    return Promise.reject(msg);
  }
  return response;
}, (error) => {
  return Promise.reject(error.message);
});

export default class Http {
  // GET请求
  static async get (
    url: string,
    params: object | null = null,
    config: AxiosRequestConfig = {},
    isNeedAuth = false
  ): Promise<ResponseData> {
    if (isNeedAuth) {
      const hasToken = validateAuth();
      if (!hasToken) {
        const error = new Error('暂无权限');
        return Promise.reject(error.message);
      }
    }
    const res = await instance({ method: 'get', url, params, ...config });
    const responseData: ResponseData = res.data;
    return Promise.resolve({
      code: responseData.code,
      data: responseData.data,
      message: responseData.message
    });
  }
  // POST请求
  static async post (
    url: string,
    data: object | null = null,
    config: AxiosRequestConfig = {}
  ): Promise<ResponseData> {
    const res = await instance({ method: 'post', url, data, ...config });
    const responseData: ResponseData = res.data;
    return Promise.resolve({
      code: responseData.code,
      data: responseData.data,
      message: responseData.message
    });
  }
  // PUT请求
  static async put (
    url: string,
    data: object | null = null,
    config: AxiosRequestConfig = {}
  ): Promise<ResponseData> {
    const res = await instance({ method: 'put', url, data, ...config });
    const responseData: ResponseData = res.data;
    return Promise.resolve({
      code: responseData.code,
      data: responseData.data,
      message: responseData.message
    });
  }
  // PATCH请求
  static async patch (
    url: string,
    data: object | null = null,
    config: AxiosRequestConfig = {}
  ): Promise<ResponseData> {
    const res = await instance({ method: 'patch', url, data, ...config });
    const responseData: ResponseData = res.data;
    return Promise.resolve({
      code: responseData.code,
      data: responseData.data,
      message: responseData.message
    });
  }
  // DELETE请求
  static async delete (
    url: string,
    config: AxiosRequestConfig = {}
  ): Promise<ResponseData> {
    const res = await instance({ method: 'delete', url, ...config });
    const responseData: ResponseData = res.data;
    return Promise.resolve({
      code: responseData.code,
      data: responseData.data,
      message: responseData.message
    });
  }
}
