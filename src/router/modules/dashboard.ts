export default [
  {
    path: 'dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "forbiddance" */ '@/views/dashboard/index.vue')
  }
];
