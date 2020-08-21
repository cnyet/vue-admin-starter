/*
 * @Descripttion:
 * @Author: 天泽
 * @Date: 2020-08-18 18:10:21
 * @LastEditors: 天泽
 * @LastEditTime: 2020-08-21 18:34:38
 */
export default [
  {
    path: '403',
    name: 'forbid',
    component: () => import(/* webpackChunkName: "forbiddance" */ '@/views/exception/403.vue')
  }, {
    path: '404',
    name: 'notfound',
    component: () => import(/* webpackChunkName: "notfound" */ '@/views/exception/404.vue')
  }, {
    path: '500',
    name: 'error',
    component: () => import(/* webpackChunkName: "error" */ '@/views/exception/500.vue')
  }
];
