/*
 * @Descripttion:
 * @Author: 天泽
 * @Date: 2020-09-16 16:09:17
 * @LastEditors: 天泽
 * @LastEditTime: 2020-10-02 16:25:40
 */
const UserMock = require('./modules/user');
const HomeMock = require('./modules/home');
const DashboardMock = require('./modules/dashboard');

module.exports = [
  ...UserMock,
  ...HomeMock,
  ...DashboardMock
];
