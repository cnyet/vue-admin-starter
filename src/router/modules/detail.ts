export default [
  {
    key: '3',
    path: '/detail',
    name: 'detail',
    meta: {
      icon: 'desktop',
      title: '详情页'
    },
    component: () => import(/* webpackChunkName: "form" */ '@/views/Home.vue'),
    children: [
      {
        key: '3-1',
        path: 'base',
        name: 'basicDetail',
        meta: {
          title: '基础详情'
        },
        component: () => import(/* webpackChunkName: "form" */ '@/views/form/index.vue')
      }, {
        key: '3-2',
        path: 'advanced',
        name: 'advancedDetail',
        meta: {
          title: '高级详情'
        },
        component: () => import(/* webpackChunkName: "form" */ '@/views/form/index.vue')
      }
    ]
  }
];
