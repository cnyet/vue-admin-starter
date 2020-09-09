/*
 * @Descripttion: 不同权限对用的路由规则
 * @Author: 天泽
 * @Date: 2020-09-03 21:13:23
 * @LastEditors: 天泽
 * @LastEditTime: 2020-09-08 21:19:45
 */
import { RouteConfig } from 'vue-router';
import { defaultRouter } from './common';
import { dashboard, form } from './modules/base';

// 管理员
const ADMIN_ROUTER: RouteConfig[] = [
  {
    path: '/',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
    redirect: '/dashboard',
    children: [
      ...dashboard,
      ...form
    ]
  },
  ...defaultRouter
];

// 普通用户
const USER_ROUTER: RouteConfig[] = [
  ...defaultRouter,
  {
    path: '/',
    name: '',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
  }
];
// 访客
const GUEST_ROUTER: RouteConfig[] = [
  ...defaultRouter,
  {
    path: '/',
    name: '',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
  }
];

export default {
  admin: ADMIN_ROUTER,
  user: USER_ROUTER,
  guest: GUEST_ROUTER
};
