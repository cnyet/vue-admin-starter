/*
 * @Descripttion: 同步修改 state 的方法集合
 * @Author: 天泽
 * @Date: 2020-08-18 21:10:37
 * @LastEditors: 天泽
 * @LastEditTime: 2020-08-18 21:16:02
 */
import { RouteConfig } from 'vue-router';
import router from '../router';

export default {
  // 动态添加路由
  addRoutes (state: any, value: string) {
    const routes: RouteConfig[] = [];
    router.addRoutes(routes);
    state.routes = value;
  }
}
