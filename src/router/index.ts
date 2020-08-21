/*
 * @Descripttion: 全局路由配置
 * @Author: 天泽
 * @Date: 2020-08-06 18:55:18
 * @LastEditors: 天泽
 * @LastEditTime: 2020-08-21 19:15:53
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import CommonRouter from './common';
import { getCookie } from '@/api/auth';
import store from '../store';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: CommonRouter
});

router.beforeEach((to, from, next) => {
  if (getCookie()) {
    if (to.path === '/login') {
      next('/');
    } else {
      if (store.getters.routes.length === 0) {
        store.dispatch('addRoutes').then(() => {
          next({
            path: to.path,
            replace: true
          });
        });
      } else {
        next();
      }
    }
  } else {
    if (to.path === '/login') {
      next();
    } else {
      next('/login');
    }
  }
});

export default router;
