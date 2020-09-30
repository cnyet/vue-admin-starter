export default [
  {
    key: '5',
    path: '/exception',
    name: 'exception',
    meta: {
      icon: 'alert',
      title: '异常页'
    },
    component: () => import(/* webpackChunkName: "form" */ '@/views/Home.vue'),
    children: [
      {
        key: '5-1',
        path: '403',
        name: 'forbiddance',
        meta: {
          title: '403'
        },
        component: () =>
          import(/* webpackChunkName: "forbiddance" */ '@/views/exception/403.vue')
      },
      {
        key: '5-2',
        path: '404',
        name: 'notFound',
        meta: {
          title: '404'
        },
        component: () =>
          import(/* webpackChunkName: "notfound" */ '@/views/exception/404.vue')
      },
      {
        key: '5-3',
        path: '500',
        name: 'serverError',
        meta: {
          title: '500'
        },
        component: () =>
          import(/* webpackChunkName: "error" */ '@/views/exception/500.vue')
      }
    ]
  }
];
