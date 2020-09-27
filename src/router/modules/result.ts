export default [
  {
    key: '4',
    path: '/result',
    name: 'result',
    meta: {
      icon: 'inbox',
      title: '结果页'
    },
    component: () => import(/* webpackChunkName: "form" */ '@/views/Home.vue'),
    children: [
      {
        key: '4-1',
        path: 'success',
        name: 'successResult',
        meta: {
          title: '成功'
        },
        component: () => import(/* webpackChunkName: "form" */ '@/views/form/index.vue')
      }, {
        key: '4-2',
        path: 'fail',
        name: 'failResult',
        meta: {
          title: '失败'
        },
        component: () => import(/* webpackChunkName: "form" */ '@/views/form/index.vue')
      }
    ]
  }
];
