/*
 * @Descripttion: 存取cookie
 * @Author: 天泽
 * @Date: 2020-08-03 19:20:40
 * @LastEditors: 天泽
 * @LastEditTime: 2020-09-29 15:45:13
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
export const setCookie = (value: string, params = { expires: 1 }) => {
  Cookie.set(COOKIE_KEY, value, params);
};
// 删除cookie
export const removeCookie = (value?: string) => {
  Cookie.remove(value || COOKIE_KEY);
};
