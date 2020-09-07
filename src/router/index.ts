/*
 * @Descripttion: 全局路由配置
 * @Author: 天泽
 * @Date: 2020-08-06 18:55:18
 * @LastEditors: 天泽
 * @LastEditTime: 2020-09-04 20:30:29
 */
import Vue from 'vue';
import VueRouter, { Route, RawLocation } from 'vue-router';
import { ErrorHandler } from 'vue-router/types/router';
import { loginRouter } from './common';
import { getCookie } from '@/api/auth';
import store from '../store';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [loginRouter]
});

router.beforeEach((to, from, next) => {
  if (getCookie()) {
    if (to.path === '/login') {
      next('/');
    } else {
      if (store.getters.routes.length === 0) {
        store.dispatch('app/addRoutes').then(() => {
          next({
            path: to.path
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

// 解决Vue-Router升级导致的Uncaught(in promise) navigation guard问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function (location: RawLocation): Promise<Route> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (originalPush.call(this, location) as any).catch(
    (err: ErrorHandler) => err
  );
};

export default router;
