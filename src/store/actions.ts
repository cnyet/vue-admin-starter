/*
 * @Descripttion: 异步修改 state 的方法集合
 * @Author: 天泽
 * @Date: 2020-08-18 21:10:46
 * @LastEditors: 天泽
 * @LastEditTime: 2020-08-18 21:16:10
 */
export default {
  commitAddRoutes ({ commit }: any, value: string) {
    commit('addRoutes', value);
  }
};
