/*
 * @Descripttion: vuex 配置
 * @Author: 天泽
 * @Date: 2020-08-06 18:55:18
 * @LastEditors: 天泽
 * @LastEditTime: 2020-08-18 21:16:37
 */
import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

// store 的子模块
let modules: any = [];
const children = require.context('./modules', false, /\.ts$/);
children.keys().forEach(key => {
  modules = [...modules, ...children(key).default];
});

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules
});
