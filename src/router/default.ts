/*
 * @Descripttion: 不同权限对用的路由规则
 * @Author: 天泽
 * @Date: 2020-09-03 21:13:23
 * @LastEditors: 天泽
 * @LastEditTime: 2020-09-07 20:44:10
 */
import { RouteConfig } from 'vue-router';
import { defaultRouter } from './common';

// 管理员
const ADMIN_MENUS: RouteConfig[] = [
  ...defaultRouter,
  {
    path: '/dashboard',
    name: 'Dashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
    children: []
  }
];

// 普通用户
const USER_MENUS: RouteConfig[] = [
  ...defaultRouter,
  {
    path: '/',
    name: '',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
  }
];
// 访客
const GUEST_MENUS: RouteConfig[] = [
  ...defaultRouter,
  {
    path: '/',
    name: '',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
  }
];

export default {
  admin: ADMIN_MENUS,
  user: USER_MENUS,
  guest: GUEST_MENUS
};
