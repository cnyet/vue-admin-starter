/*
 * @Descripttion:
 * @Author: 天泽
 * @Date: 2020-09-16 16:09:17
 * @LastEditors: 天泽
 * @LastEditTime: 2020-09-30 19:31:52
 */
const UserMock = require('./modules/user');
const HomeMock = require('./modules/home');

module.exports = [
  ...UserMock,
  ...HomeMock
];
