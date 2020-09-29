/*
 * @Descripttion: 不同权限对用的路由规则
 * @Author: 天泽
 * @Date: 2020-09-03 21:13:23
 * @LastEditors: 天泽
 * @LastEditTime: 2020-09-29 16:46:05
 */
import { RouteConfig } from 'vue-router';
import { routeModules } from './common';

// 管理员
const ADMIN_ROUTER: RouteConfig[] = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
    children: routeModules
  }
];

// 普通用户
const USER_ROUTER: RouteConfig[] = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
    children: routeModules
  }
];
// 访客
const GUEST_ROUTER: RouteConfig[] = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
    children: routeModules
  }
];

export default {
  admin: ADMIN_ROUTER,
  user: USER_ROUTER,
  guest: GUEST_ROUTER
};
