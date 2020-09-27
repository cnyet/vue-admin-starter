/*
 * @Descripttion: 首页接口请求配置
 * @Author: 天泽
 * @Date: 2020-07-30 11:06:02
 * @LastEditors: 天泽
 * @LastEditTime: 2020-09-27 17:08:17
 */
import Http from '../http';

// 获取产品列表
function getHomeList (params = {}) {
  return Http.create({
    method: 'get',
    url: '/api/home/projectList',
    params
  });
}

// 新增产品
function saveNewItem (params = {}) {
  return Http.create({
    method: 'get',
    url: '/api/home/saveProject',
    params
  });
}

export default {
  getHomeList,
  saveNewItem
};
