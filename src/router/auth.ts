/*
 * @Descripttion: 不同权限对用的路由规则
 * @Author: 天泽
 * @Date: 2020-09-03 21:13:23
 * @LastEditors: 天泽
 * @LastEditTime: 2020-09-27 21:03:02
 */
import { RouteConfig } from 'vue-router';
import commonRouter from './common';
import { RouteInterface, routeModules } from './common';

// 管理员
const ADMIN_ROUTER: RouteConfig[] = [
  {
    path: '/',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
    redirect: '/dashboard',
    children: routeModules
  },
  ...commonRouter
];

// 普通用户
const USER_ROUTER: RouteConfig[] = [
  {
    path: '/',
    name: '',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
    children: routeModules
  },
  ...commonRouter
];
// 访客
const GUEST_ROUTER: RouteConfig[] = [
  {
    path: '/',
    name: '',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
    children: routeModules
  },
  ...commonRouter
];

export default {
  admin: ADMIN_ROUTER,
  user: USER_ROUTER,
  guest: GUEST_ROUTER
};
