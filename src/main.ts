/*
 * @Descripttion: 应用初始化配置
 * @Author: 天泽
 * @Date: 2020-08-06 18:55:18
 * @LastEditors: 天泽
 * @LastEditTime: 2020-10-16 18:55:53
 */
import Vue from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import router from './router';
import store from './store';
import SvgIcon from './components/SvgIcon.vue';
import './registerServiceWorker';

Vue.use(Antd);
Vue.component('svg-icon', SvgIcon); // 注册全局组件
Vue.config.productionTip = false;
// 加载所有 svg 图标
const requireAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().map(requireContext);
requireAll(require.context('./assets/svgicons', false, /\.svg$/));

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
