export default [
  {
    key: '2',
    path: '/list',
    name: 'list',
    meta: {
      icon: 'iconlist',
      title: '列表页'
    },
    component: () => import(/* webpackChunkName: "form" */ '@/views/Home.vue'),
    children: [
      {
        key: '2-1',
        path: 'check',
        name: 'checkForm',
        meta: {
          title: '查询表格'
        },
        component: () => import(/* webpackChunkName: "form" */ '@/views/form/index.vue')
      }, {
        key: '2-2',
        path: 'normal',
        name: 'normalList',
        meta: {
          title: '标准列表'
        },
        component: () => import(/* webpackChunkName: "form" */ '@/views/form/index.vue')
      }, {
        key: '2-3',
        path: 'card',
        name: 'cardList',
        meta: {
          title: '卡片列表'
        },
        component: () => import(/* webpackChunkName: "form" */ '@/views/form/index.vue')
      }, {
        key: '2-4',
        path: 'search',
        name: 'searchList',
        meta: {
          title: '搜索列表'
        },
        component: () => import(/* webpackChunkName: "form" */ '@/views/form/index.vue')
      }
    ]
  }
];
