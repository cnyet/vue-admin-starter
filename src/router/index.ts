/*
 * @Descripttion: 全局路由配置
 * @Author: 天泽
 * @Date: 2020-08-06 18:55:18
 * @LastEditors: 天泽
 * @LastEditTime: 2020-08-07 15:10:10
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import CommonRouter from './common';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: CommonRouter
});

export default router;
