export default [
  {
    key: '6',
    path: '/user',
    name: 'user',
    meta: {
      icon: 'user',
      title: '个人页'
    },
    redirect: '/user/individual',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
    children: [
      {
        key: '6-1',
        path: 'individual',
        name: 'individual',
        meta: {
          title: '个人中心'
        },
        component: () => import(/* webpackChunkName: "individual" */ '@/views/user/Individual.vue')
      }, {
        key: '6-2',
        path: 'setting',
        name: 'setting',
        meta: {
          title: '个人设置'
        },
        component: () => import(/* webpackChunkName: "setting" */ '@/views/user/Setting.vue')
      }
    ]
  }
];
