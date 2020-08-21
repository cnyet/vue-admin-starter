/*
 * @Descripttion: 用户信息接口请求配置
 * @Author: 天泽
 * @Date: 2020-07-30 11:06:02
 * @LastEditors: 天泽
 * @LastEditTime: 2020-08-21 15:27:55
 * @apiInfoUrl: https://info.bilibili.co/pages/viewpage.action?pageId=122238897
 */
import Http from '../http';

const HOME_LIST_API = '/api/app/mock/1484/user';
const ROUTE_LIST = '/api/app/mock/1484/routes';

// 获取产品列表
const getHomeList = () => Http.get(HOME_LIST_API);
// 获取当前用户导航栏
const getMenus = (params = {}) => Http.get(ROUTE_LIST, params);

export default {
  getHomeList,
  getMenus
};
