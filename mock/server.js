/*
 * @Descripttion: HTTP请求优先执行的方法
 * @Author: 天泽
 * @Date: 2020-09-16 17:09:31
 * @LastEditors: 天泽
 * @LastEditTime: 2020-10-03 12:59:47
 */
const chokidar = require('chokidar'); // 类似 fs.watch 文件状态监听
const bodyParser = require('body-parser'); // 一个用于解析 req.body 请求参数的中间件
const chalk = require('chalk'); // 给命令行输出字符添加不同颜色
const path = require('path');  // 文件路径解析
const MockData = require('./index');
const mockDir = path.join(process.cwd(), 'mock');  // 返回nodejs进程的当前工作目录

function registerRoutes(app) {
  let mockLastIndex
  const mocksForServer = MockData.map(route => {
    return responseFake(route.url, route.type, route.response)
  })
  for (const mock of mocksForServer) {
    app[mock.type](mock.url, mock.response)
    mockLastIndex = app._router.stack.length
  }
  const mockRoutesLength = Object.keys(mocksForServer).length
  return {
    mockRoutesLength: mockRoutesLength,
    mockStartIndex: mockLastIndex - mockRoutesLength
  }
}

module.exports = (app, server, compiler) => {
  const mockRoutes = registerRoutes(app);
  const mockRoutesLength = mockRoutes.mockRoutesLength;
  const mockStartIndex = mockRoutes.mockStartIndex;

  MockData.forEach(mock => {
    app[mock.type](mock.url, function (req, res) {
      res.json(mock.response);
    })
  });
  chokidar.watch(mockDir, {
    ignored: /server/,
    ignoreInitial: true
  }).on('all', (event, path) => {
    if (event === 'change' || event === 'add') {
      try {
        app._router.stack.splice()
      } catch (error) {

      }
    }
  })
};
