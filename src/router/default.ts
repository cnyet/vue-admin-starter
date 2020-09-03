/*
 * @Descripttion: 不同权限对用的路由规则
 * @Author: 天泽
 * @Date: 2020-09-03 21:13:23
 * @LastEditors: 天泽
 * @LastEditTime: 2020-09-03 21:20:39
 */
import { RouteConfig } from "vue-router";

// 管理员
const ADMIN_MENUS: RouteConfig[] = [
  {
    path: "/",
    name: "",
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
  }
];
// 普通用户
const USER_MENUS: RouteConfig[] = [
  {
    path: "/",
    name: "",
    component: () => import(/* webpackChunkName: "home" */ "@/views/Home.vue")
  }
];
// 访客
const GUEST_MENUS: RouteConfig[] = [
  {
    path: "/",
    name: "",
    component: () => import(/* webpackChunkName: "home" */ "@/views/Home.vue")
  }
];

export default {
  admin: ADMIN_MENUS,
  user: USER_MENUS,
  guest: GUEST_MENUS
};
