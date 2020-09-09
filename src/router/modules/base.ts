/*
 * @Descripttion:
 * @Author: 天泽
 * @Date: 2020-08-21 18:25:03
 * @LastEditors: 天泽
 * @LastEditTime: 2020-09-08 21:11:55
 */
export const dashboard = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "forbiddance" */ '@/views/dashboard/index.vue')
  }
];

export const form = [
  {
    path: '/form',
    name: 'form',
    component: () => import(/* webpackChunkName: "forbiddance" */ '@/views/form/index.vue')
  }
];
