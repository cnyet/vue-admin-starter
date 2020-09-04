/*
 * @Descripttion:
 * @Author: 天泽
 * @Date: 2020-08-21 12:25:50
 * @LastEditors: 天泽
 * @LastEditTime: 2020-09-04 19:16:19
 */
import { ActionContext } from 'vuex';
import { RouteConfig } from 'vue-router';
import { UserAction } from '@/api';
import router from '../../router';
// import defaultMenus from '../../router/default';
export interface AppStates {
  routes: object[];
  collapsed: boolean;
};

const app = {
  namespaced: true,
  state: {
    routes: [],
    collapsed: false
  },
  mutations: {
    // 动态添加路由
    ADD_ROUTES (state: AppStates, value: object[]) {
      const routes: RouteConfig[] = [];
      router.addRoutes(routes);
      state.routes = value;
    },
    // 更新侧边导航的折叠状态
    TOGGLE_COLLAPSED (state: AppStates, value: boolean) {
      state.collapsed = value;
    }
  },
  actions: {
    addRoutes ({ commit }: ActionContext<string, object>) {
      return new Promise((resolve, reject) => {
        UserAction.getMenus()
          .then(res => {
            commit('ADD_ROUTES', res.data);
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    toggleCollapsed ({ commit }: ActionContext<string, object>, value: boolean) {
      commit('TOGGLE_COLLAPSED', value);
    }
  }
};

export default app;
