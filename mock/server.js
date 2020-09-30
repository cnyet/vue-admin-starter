/*
 * @Descripttion: 自定义优先执行的方法
 * @Author: 天泽
 * @Date: 2020-09-16 17:09:31
 * @LastEditors: 天泽
 * @LastEditTime: 2020-09-30 19:34:14
 */
const MockData = require('./index');

module.exports = (app, server, compiler) => {
  MockData.forEach(mock => {
    app[mock.type](mock.url, function (req, res) {
      res.json(mock.response);
    })
  });
  // app.get('/api/userList', function (req, res) {
  //   res.json(User.UserList);
  // });
};
