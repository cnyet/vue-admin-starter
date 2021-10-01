export default [
  {
    key: '1',
    path: '/form',
    name: 'form',
    meta: {
      icon: 'iconform',
      title: '表单页'
    },
    redirect: '/form/base',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
    children: [
      {
        key: '1-1',
        path: 'base',
        name: 'baseForm',
        meta: {
          title: '基础表单'
        },
        component: () => import(/* webpackChunkName: "baseForm" */ '@/views/form/BaseForm.vue')
      }, {
        key: '1-2',
        path: 'distribution',
        name: 'distributionForm',
        meta: {
          title: '分布表单'
        },
        component: () => import(/* webpackChunkName: "distributionForm" */ '@/views/form/DistributionForm.vue')
      }, {
        key: '1-3',
        path: 'advanced',
        name: 'advancedForm',
        meta: {
          title: '高级表单'
        },
        component: () => import(/* webpackChunkName: "advancedForm" */ '@/views/form/AdvancedForm.vue')
      }
    ]
  }
]
