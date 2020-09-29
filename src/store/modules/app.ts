import { ActionContext } from 'vuex';
import { RouteConfig } from 'vue-router';
import { UserAction } from '@/api';
import router from '@/router';
import Menus from '@/router/auth';
import { routeModules, RouteInterface, MenusInterface } from '@/router/common';
export interface AppStates {
  routes: object[];
  collapsed: boolean;
};

// 格式化导航列表
function formatMenus (rotues: RouteInterface[]) {
  const result: MenusInterface[] = [];
  rotues.forEach(item => {
    const obj: MenusInterface = {
      key: item.key,
      value: item.name,
      name: item.meta.title,
      icon: item.meta.icon
    };
    if (item.children && item.children.length) {
      obj.children = formatMenus(item.children);
    }
    result.push(obj);
  });
  return result;
}

const app = {
  namespaced: true,
  state: {
    routes: [],
    collapsed: false
  },
  mutations: {
    // 动态添加路由
    ADD_ROUTES (state: AppStates) {
      const routes: RouteConfig[] = Menus.admin;
      const menus: MenusInterface[] = formatMenus(routeModules);
      router.addRoutes(routes);
      state.routes = [{
        key: '0',
        name: 'Dashboard',
        value: 'dashboard',
        icon: 'icondashboard'
      }, ...menus];
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
