export default [
  {
    key: '3',
    path: '/detail',
    name: 'detail',
    meta: {
      icon: 'icondetail-copy',
      title: '详情页'
    },
    redirect: '/detail/base',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
    children: [
      {
        key: '3-1',
        path: 'base',
        name: 'basicDetail',
        meta: {
          title: '基础详情'
        },
        component: () => import(/* webpackChunkName: "form" */ '@/views/detail/BasicDetail.vue')
      }, {
        key: '3-2',
        path: 'advanced',
        name: 'advancedDetail',
        meta: {
          title: '高级详情'
        },
        component: () => import(/* webpackChunkName: "form" */ '@/views/detail/AdvancedDetail.vue')
      }
    ]
  }
]
