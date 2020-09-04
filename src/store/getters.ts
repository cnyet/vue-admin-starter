/*
 * @Descripttion:
 * @Author: 天泽
 * @Date: 2020-08-21 12:23:58
 * @LastEditors: 天泽
 * @LastEditTime: 2020-09-04 17:38:04
 */
import { AppStates } from './modules/app';

interface StateInterface {
  app: AppStates;
};

export default {
  routes: (state: StateInterface) => state.app.routes,
  collapsed: (state: StateInterface) => state.app.collapsed
};
