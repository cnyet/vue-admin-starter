/*
 * @Descripttion: 存取cookie
 * @Author: 天泽
 * @Date: 2020-08-03 19:20:40
 * @LastEditors: 天泽
 * @LastEditTime: 2020-08-04 11:00:35
 */
import Cookie from 'js-cookie';

const COOKIE_KEY = 'access_token';
// 获取cookie值
export const getCookie = (name?: string) => {
  if (name) {
    return Cookie.get(name);
  }
  return Cookie.get(COOKIE_KEY);
};
// 设置新的cookie
export const setCookie = (value: string, params = {}) => {
  Cookie.set(COOKIE_KEY, value, params);
};
