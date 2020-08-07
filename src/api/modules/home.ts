/*
 * @Descripttion: 首页接口请求配置
 * @Author: 天泽
 * @Date: 2020-07-30 11:06:02
 * @LastEditors: 天泽
 * @LastEditTime: 2020-08-04 17:39:54
 * @apiInfoUrl: https://info.bilibili.co/pages/viewpage.action?pageId=122238897
 */
import Http from '../http';

const PROJECT_LIST_API = '/map/config';
const NOTIFICATIONS_API = '/map/notice';
const FEEDBACK_API = '/map/feedback';

// 获取产品列表
const getProjectList = () => Http.get(PROJECT_LIST_API);
// 获取公告信息
const getNotifications = () => Http.get(NOTIFICATIONS_API);
// 提交用户反馈信息
const saveFeedback = (params: object) => Http.get(FEEDBACK_API, params);

export default {
  getProjectList,
  getNotifications,
  saveFeedback
};
