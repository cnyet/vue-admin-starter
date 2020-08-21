import { ActionContext } from 'vuex';
import { RouteConfig } from 'vue-router';
import { UserAction } from '@/api';
import router from '../../router';

export interface AppStates {
  routes: object[];
};

const app = {
  state: {
    routes: []
  },
  mutations: {
    // 动态添加路由
    ADD_ROUTES (state: AppStates, value: object[]) {
      const routes: RouteConfig[] = [];
      router.addRoutes(routes);
      state.routes = value;
    }
  },
  actions: {
    addRoutes ({ commit }: ActionContext<string, object>) {
      return new Promise((resolve, reject) => {
        UserAction.getMenus().then(res => {
          commit('ADD_ROUTES', res.data);
          resolve(res);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }
};

export default app;
