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
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
  }, {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue')
  }, {
    path: '*',
    redirect: '/404'
  },
  ...routers
];
