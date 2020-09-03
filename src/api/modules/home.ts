/*
 * @Descripttion: 首页接口请求配置
 * @Author: 天泽
 * @Date: 2020-07-30 11:06:02
 * @LastEditors: 天泽
 * @LastEditTime: 2020-09-03 20:43:14
 */
import Http from '../http';

const HOME_LIST_API = '/api/app/mock/1484/user';
const SAVE_NEW_ITEM = '/api/app/mock/1484/status';

// 获取产品列表
const getHomeList = () => Http.get(HOME_LIST_API);
// 新增产品
const saveNewItem = (data = {}) => Http.post(SAVE_NEW_ITEM, data);

export default {
  getHomeList,
  saveNewItem
};
