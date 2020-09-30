export default [
  {
    key: '6',
    path: '/user',
    name: 'user',
    meta: {
      icon: 'user',
      title: '个人页'
    },
    component: () => import(/* webpackChunkName: "form" */ '@/views/Home.vue'),
    children: [
      {
        key: '6-1',
        path: 'individual',
        name: 'individualUser',
        meta: {
          title: '个人中心'
        },
        component: () => import(/* webpackChunkName: "form" */ '@/views/form/index.vue')
      }, {
        key: '6-2',
        path: 'setting',
        name: 'settingUser',
        meta: {
          title: '个人设置'
        },
        component: () => import(/* webpackChunkName: "form" */ '@/views/form/index.vue')
      }
    ]
  }
];
