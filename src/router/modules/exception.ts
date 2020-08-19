export default [
  {
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
  }
];
