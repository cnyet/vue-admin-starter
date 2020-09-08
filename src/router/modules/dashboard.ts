/*
 * @Descripttion:
 * @Author: 天泽
 * @Date: 2020-08-21 18:25:03
 * @LastEditors: 天泽
 * @LastEditTime: 2020-09-08 21:11:55
 */
export default [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "forbiddance" */ '@/views/dashboard/index.vue')
  }
];
