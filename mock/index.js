/*
 * @Descripttion:
 * @Author: 天泽
 * @Date: 2020-09-16 16:09:17
 * @LastEditors: 天泽
 * @LastEditTime: 2020-09-16 20:58:33
 */
const UserMock = require('./user');
const HomeMock = require('./home');

module.exports = [
  ...UserMock,
  ...HomeMock
];
