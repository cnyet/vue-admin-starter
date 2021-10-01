/*
 * @Descripttion: 不同权限对用的路由规则
 * @Author: 天泽
 * @Date: 2020-09-03 21:13:23
 * @LastEditors: 天泽
 * @LastEditTime: 2020-10-01 15:23:43
 */
import { RouteConfig } from 'vue-router'
import { routeModules } from './common'

const OtherRouter = {
  path: '*',
  redirect: '/404'
}

// 管理员
const ADMIN_ROUTER: RouteConfig[] = [...routeModules, OtherRouter]
// 普通用户
const USER_ROUTER: RouteConfig[] = [...routeModules, OtherRouter]
// 访客
const GUEST_ROUTER: RouteConfig[] = [...routeModules, OtherRouter]

export default {
  admin: ADMIN_ROUTER,
  user: USER_ROUTER,
  guest: GUEST_ROUTER
}
