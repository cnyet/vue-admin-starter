/*
 * @Descripttion: 公共路由配置
 * @Author: 天泽
 * @Date: 2020-08-07 15:02:12
 * @LastEditors: 天泽
 * @LastEditTime: 2020-08-21 18:34:10
 */
import { RouteConfig } from 'vue-router';

const modules = require.context('./modules', false, /\.ts/);
let routers: Array<RouteConfig> = [];

modules.keys().forEach((key) => {
  routers = [...routers, ...modules(key).default];
});
export default [
  {
    path: '/',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
    redirect: '/dashboard',
    children: [...routers]
  }, {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue')
  }, {
    path: '*',
    redirect: '/404'
  }
];
