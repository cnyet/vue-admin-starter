/*
 * @Descripttion: vuex 配置
 * @Author: 天泽
 * @Date: 2020-08-06 18:55:18
 * @LastEditors: 天泽
 * @LastEditTime: 2020-08-21 20:04:50
 */
import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import app from './modules/app';

Vue.use(Vuex);

export default new Vuex.Store({
  getters,
  modules: {
    app
  }
} as object);
