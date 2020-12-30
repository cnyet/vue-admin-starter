const Mock = require('mockjs');
// 用户列表
const UserList = Mock.mock({
  "code": 1,
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
