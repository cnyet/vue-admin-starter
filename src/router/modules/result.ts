export default [
  {
    key: '4',
    path: '/result',
    name: 'result',
    meta: {
      icon: 'inbox',
      title: '结果页'
    },
    redirect: '/result/success',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
    children: [
      {
        key: '4-1',
        path: 'success',
        name: 'successResult',
        meta: {
          title: '成功页'
        },
        component: () => import(/* webpackChunkName: "successResult" */ '@/views/result/SuccessResult.vue')
      }, {
        key: '4-2',
        path: 'fail',
        name: 'failResult',
        meta: {
          title: '失败页'
        },
        component: () => import(/* webpackChunkName: "failResult" */ '@/views/result/FailResult.vue')
      }
    ]
  }
];
