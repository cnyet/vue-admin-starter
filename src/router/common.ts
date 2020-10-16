/*
 * @Descripttion: 公共路由配置
 * @Author: 天泽
 * @Date: 2020-08-07 15:02:12
 * @LastEditors: 天泽
 * @LastEditTime: 2020-10-16 18:09:47
 */
export interface RouteItemInterface {
  key: string;
  path: string;
  name: string;
  meta: {
    icon: string;
    title: string;
  };
  component: Function;
}
export interface RouteInterface extends RouteItemInterface{
  children?: RouteItemInterface[];
};

export interface MenusItemInterface {
  key: string;
  value: string;
  name: string;
  icon: string;
};

export interface MenusInterface extends MenusItemInterface {
  children?: MenusItemInterface[];
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
export const routeModules = importModules(require.context('./modules', false, /\.ts$/));

export default [{
  path: '/',
  redirect: '/dashboard',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
  children: [{
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "home" */ '@/views/dashboard/index.vue')
  }]
}, {
  path: '/login',
  name: 'Login',
  component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue')
}, {
  path: '/403',
  name: '403',
  component: () => import(/* webpackChunkName: "forbiddance" */ '@/views/exception/403.vue')
}, {
  path: '/404',
  name: '404',
  component: () => import(/* webpackChunkName: "notfound" */ '@/views/exception/404.vue')
}, {
  path: '/500',
  name: '500',
  component: () => import(/* webpackChunkName: "error" */ '@/views/exception/500.vue')
}];
