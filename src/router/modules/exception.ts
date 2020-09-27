export default [
  {
    key: '5',
    path: '/exception',
    name: 'exception',
    meta: {
      icon: 'appstore',
      title: '详情页'
    },
    component: () => import(/* webpackChunkName: "form" */ '@/views/Home.vue'),
    children: [
      {
        key: '5-1',
        path: '403',
        name: 'forbid',
        component: () =>
          import(/* webpackChunkName: "forbiddance" */ '@/views/exception/403.vue')
      },
      {
        key: '5-2',
        path: '404',
        name: 'notfound',
        component: () =>
          import(/* webpackChunkName: "notfound" */ '@/views/exception/404.vue')
      },
      {
        key: '5-3',
        path: '500',
        name: 'error',
        component: () =>
          import(/* webpackChunkName: "error" */ '@/views/exception/500.vue')
      }
    ]
  }
];
