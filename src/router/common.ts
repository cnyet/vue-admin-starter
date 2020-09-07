/*
 * @Descripttion: 公共路由配置
 * @Author: 天泽
 * @Date: 2020-08-07 15:02:12
 * @LastEditors: 天泽
 * @LastEditTime: 2020-09-07 20:47:05
 */
export const loginRouter = {
  path: '/login',
  name: 'Login',
  component: () =>
    import(/* webpackChunkName: "login" */ '@/views/Login.vue')
};

export const defaultRouter = [
  {
    path: '/',
    redirect: '/dashboard'
  }, {
    path: '/403',
    name: 'forbid',
    component: () =>
      import(/* webpackChunkName: "forbiddance" */ '@/views/exception/403.vue')
  }, {
    path: '/404',
    name: 'notfound',
    component: () =>
      import(/* webpackChunkName: "notfound" */ '@/views/exception/404.vue')
  }, {
    path: '/500',
    name: 'error',
    component: () =>
      import(/* webpackChunkName: "error" */ '@/views/exception/500.vue')
  }, {
    path: '*',
    redirect: '/404'
  }
];
