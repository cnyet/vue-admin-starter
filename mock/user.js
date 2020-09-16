/*
 * @Descripttion:
 * @Author: 天泽
 * @Date: 2020-09-16 16:11:48
 * @LastEditors: 天泽
 * @LastEditTime: 2020-09-16 21:00:42
 */
const Mock = require('mockjs');

const UserList = Mock.mock({
  "code": 0,
  "message": "success",
  "data|5": [
    {
      "id": "@id",
      "name": "@first",
      "gender|1": [
        "男",
        "女"
      ],
      "age|10-60": 18
    },
  ]
});

module.exports = [
  {
    url: '/api/userList',
    type: 'get',
    response: UserList
  }
];
