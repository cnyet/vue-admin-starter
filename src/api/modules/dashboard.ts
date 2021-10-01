/*
 * @Descripttion: dashboard接口请求配置
 * @Author: 天泽
 * @Date: 2020-07-30 11:06:02
 * @LastEditors: 天泽
 * @LastEditTime: 2020-10-02 17:40:36
 */
import Http from '../http'

// 获取产品列表
function getDashboardData (params = {}) {
  return Http.create({
    method: 'get',
    url: '/api/dashboard/data',
    params
  })
}

export default {
  getDashboardData
}
