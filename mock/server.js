/*
 * @Descripttion: HTTP请求优先执行的方法
 * @Author: 天泽
 * @Date: 2020-09-16 17:09:31
 * @LastEditors: 天泽
 * @LastEditTime: 2020-10-09 16:50:10
 */
const chokidar = require('chokidar'); // 类似 fs.watch 文件状态监听
const bodyParser = require('body-parser'); // 一个用于解析 req.body 请求参数的中间件
const chalk = require('chalk'); // 给命令行输出字符添加不同颜色
const path = require('path');  // 文件路径解析
const mockDir = path.join(process.cwd(), 'mock');  // 返回nodejs进程的当前工作目录

function registerRoutes(app) {
  const MockData = require('./index');
  MockData.forEach(mock => {
    app[mock.type](mock.url, function (req, res) {
      res.json(mock.response);
    });
  });
  const mockLastIndex = app._router.stack.length;
  const mockRoutesLength = Object.keys(MockData).length;
  return {
    mockRoutesLength: mockRoutesLength,
    mockStartIndex: mockLastIndex - mockRoutesLength
  }
}

function unregisterRoutes() {
  Object.keys(require.cache).forEach(i => {
    if (i.includes(mockDir)) {
      delete require.cache[require.resolve(i)];
    }
  })
}

module.exports = (app, server, compiler) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  // 注册mock路由
  const mockRoutes = registerRoutes(app);
  let mockRoutesLength = mockRoutes.mockRoutesLength;
  let mockStartIndex = mockRoutes.mockStartIndex;

  chokidar.watch(mockDir, {
    ignored: /server/,
    ignoreInitial: true
  }).on('all', (event, path) => {
    if (event === 'change' || event === 'add') {
      try {
        // 删除 mock 路由栈中的无效数据
        app._router.stack.splice(mockStartIndex, mockRoutesLength);
        // 删除路由缓存数据
        unregisterRoutes();
        // 重新注册mock路由
        const newMockRoutes = registerRoutes(app);
        mockRoutesLength = newMockRoutes.mockRoutesLength;
        mockStartIndex = newMockRoutes.mockStartIndex;
        console.log(chalk.magentaBright(`\n > Mock Server hot reload success! changed  ${path}`));
      } catch (error) {
        console.log(chalk.redBright(error));
      }
    }
  })
};
