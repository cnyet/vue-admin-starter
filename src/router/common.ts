/*
 * @Descripttion: 公共路由配置
 * @Author: 天泽
 * @Date: 2020-08-07 15:02:12
 * @LastEditors: 天泽
 * @LastEditTime: 2020-09-27 21:09:46
 */
export interface RouteInterface {
  key: string;
  path: string;
  name: string;
  meta: {
    icon: string;
    title: string;
  };
  component: Function;
};

export interface MenusInterface {
  key: string;
  value: string;
  name: string;
  icon: string;
  children?: {
    key: string;
    value: string;
    name: string;
    icon: string;
  };
};

// eslint-disable-next-line
function importModules(files: any) {
  const routeModules: RouteInterface[] = [];
  files.keys().forEach((key: string) => {
    routeModules.push(...files(key).default);
  });
  routeModules.sort((a: RouteInterface, b: RouteInterface) => Number(a.key) - Number(b.key));
  return routeModules;
}
export const routeModules = importModules (require.context('./modules', false, /\.ts$/));

export default [{
  path: '/login',
  name: 'Login',
  component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue')
}, {
  path: '/403',
  name: 'forbid',
  component: () => import(/* webpackChunkName: "forbiddance" */ '@/views/exception/403.vue')
}, {
  path: '/404',
  name: 'notfound',
  component: () => import(/* webpackChunkName: "notfound" */ '@/views/exception/404.vue')
}, {
  path: '/500',
  name: 'error',
  component: () => import(/* webpackChunkName: "error" */ '@/views/exception/500.vue')
}, {
  path: '/',
  redirect: '/dashboard',
  component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
  children: [{
    key: '1',
    path: 'dashboard',
    name: 'dashboard',
    meta: {
      icon: 'dashboard',
      title: 'Dashboard'
    },
    component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue')
  }]
}, {
  path: '*',
  redirect: '/404'
}];
