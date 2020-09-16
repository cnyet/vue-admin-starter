/*
 * @Descripttion: 公共路由配置
 * @Author: 天泽
 * @Date: 2020-08-07 15:02:12
 * @LastEditors: 天泽
 * @LastEditTime: 2020-09-11 16:20:34
 */
export const loginRouter = {
  path: '/login',
  name: 'Login',
  component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue')
};

export const exceptionRouter = [
  {
    path: '/403',
    name: 'forbid',
    component: () =>
      import(/* webpackChunkName: "forbiddance" */ '@/views/exception/403.vue')
  },
  {
    path: '/404',
    name: 'notfound',
    component: () =>
      import(/* webpackChunkName: "notfound" */ '@/views/exception/404.vue')
  },
  {
    path: '/500',
    name: 'error',
    component: () =>
      import(/* webpackChunkName: "error" */ '@/views/exception/500.vue')
  },
  {
    path: '*',
    redirect: '/404'
  }
];

export const defaultMenus = [
  {
    key: '1',
    name: '仪表盘',
    value: 'dashboard',
    icon: 'dashboard'
  },
  {
    key: '2',
    name: '表单页',
    value: 'form',
    icon: 'desktop'
  },
  {
    key: '3',
    name: '结果页',
    value: 'result',
    icon: 'inbox'
  },
  {
    key: '4',
    name: '列表页',
    value: 'list',
    icon: 'mail',
    children: [
      {
        key: '5',
        name: '搜索列表',
        value: 'search'
      },
      {
        key: '6',
        name: '查询列表',
        value: 'checkout'
      },
      {
        key: '7',
        name: '标准列表',
        value: 'standard'
      }
    ]
  },
  {
    key: '9',
    name: '详情页',
    value: 'detail',
    icon: 'appstore',
    children: [
      {
        key: '10',
        name: '基础详情',
        value: 'basicDetail'
      },
      {
        key: '11',
        name: '高级详情',
        value: 'advancedDetail'
      }
    ]
  }
];
