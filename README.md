# vue-starter
> 基于 @vue/cli 4.3.1 官方开发者工具配置的一套适合开发中后台系统的脚手架，包括HTTP请求的封装，模块分组，CSS样式设置，以及常用插件。

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Run your end-to-end tests
```
yarn test:e2e
```

### Lints and fixes files
```
yarn lint
```

## 目录结构说明
```
.
├──── node_modules                      # 项目依赖包目录
├──── public                            # 公共文件目录
│     ├── favicon.ico                   # ico图标
│     ├── index.html                    # 首页模板
│     └── robots.txt                    # 告诉搜索引擎爬虫能抓取哪些页面
├──── src                               # 源文件目录
│     ├──── api                         # 接口文件目录   
│     │     ├──── modules               # 不同接口模块
│     │     ├──── auth.ts               # 验证接口 token
│     │     ├──── http.ts               # 封装HTTP请求方法
│     │     ├──── index.ts              # 接口请求公共配置
│     │     └──── messages.ts           # 常见的错误提示信息                 
│     ├──── assets                      # 静态资源文件
│     │     ├──── iconfont              # 类库和插件目录
│     │     ├──── images                # 图片文件目录
│     │     └──── styles                # 样式文件目录   
│     ├──── components                  # 公共组件目录
│     ├──── router                      # 路由文件目录
│     │     ├──── modules               # 不同路由模块
│     │     └──── index.ts              # 全局路由配置
│     ├──── store                       # vuex状态管理文件目录
│     │     ├──── modules               # 不同vuex模块
│     │     └──── index.ts              # 全局vuex配置
│     ├──── utils                       # 公共方法目录
│     ├──── views                       # 页面目录
│     ├──── app.vue                     # 父组件
│     ├──── main.ts                     # 入口文件
│     ├──── registerServiceWorker.ts    # PWA WEB应用依赖的文件
│     ├──── shims-tsx.d.ts              # .tsx 中的类型声明文件
│     └──── shims.vue.d.ts              # .vue 中的类型声明文件
├──── tests                             # 单元测试文件目录         
├──── .browserslistrc                   # 共享目标浏览器和 Node.js 的版本
├──── .editorconfig                     # 统一编辑器风格设置
├──── .env                              # 全局公共环境设置
├──── .env.development                  # 开发环境设置
├──── .env.production                   # 生产环境设置
├──── .env.staging                      # 预发环境设置
├──── .env.testing                      # 测试环境设置
├──── .eslintignore                     # eslint 排除的文件
├──── .eslintrc.js                      # eslint 配置
├──── .gitignore                        # git提交忽略文件集合
├──── babel.config.js                   # babel 配置文件
├──── cypress.json                      # 自动化测试配置文件
├──── jest.config.js                    # jest 单元测试配置文件
├──── LICENSE.json                      # license
├──── package.json                      # 项目依赖关系说明
├──── tsconfig.json                     # typescript 配置文件
├──── vue.config.js                     # vue-cli 额外配置文件
└──── yarn.lock                         # yarn依赖包版本锁定说明    
```