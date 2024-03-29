/*
 * @Descripttion: 用户信息接口请求配置
 * @Author: 天泽
 * @Date: 2020-07-30 11:06:02
 * @LastEditors: 天泽
 * @LastEditTime: 2020-10-02 17:22:07
 */
import Http from '../http'

// 获取产品列表
function getUserList (params = {}) {
  return Http.create({
    method: 'get',
    url: '/api/userList',
    params
  })
}
// 获取当前用户导航栏
function getMenus (params = {}) {
  return Http.create({
    method: 'get',
    url: '/api/userList',
    params
  })
}

export default {
  getUserList,
  getMenus
}
