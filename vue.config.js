/*
 * @Descripttion: 修改全局默认配置
 * @Author: 天泽
 * @Date: 2020-08-07 14:51:50
 * @LastEditors: 天泽
 * @LastEditTime: 2020-08-07 14:58:58
 */
const path = require('path');

module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  // 使用链式操作来修改配置
  // config 参数为已经解析好的 webpack 配置
  chainWebpack: config => {
    config.resolve.alias.set('@', path.join(__dirname, 'src'));
    config.plugin('html')
      .tap((args) => {
        args[0].templateParameters = {
          title: '游戏数据产品地图',
          favicon: `${process.env.VUE_APP_BASE_URL}/favicon.ico`,
        };
      return args;
    });
  },
  // 向 CSS 相关的 loader 传递选项
  css: {
    loaderOptions: {
      sass: {
        // 传入共享的全局变量
        prependData: `
          @import "@/assets/styles/_mixin.scss";
          @import "@/assets/styles/_variable.scss";
        `
      }
    },
  },
  // PWA(渐进式web应用)，icon预加载路径的设置
  pwa: {
    iconPaths: {
      favicon32: '',
      favicon16: '',
      appleTouchIcon: '',
      maskIcon: '',
      msTileImage: ''
    }
  },
  // 配置 webpack-dev-server 本地服务
  devServer: {
    port: 8082,
    hot: true,
    compress: true,
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'http://rap2.taobao.org:38080',
        changeOrigin: true,  // 是否跨域
        pathRewrite: {'/api': '' },  // 重写接口去掉 /api
      },
    },
    overlay: {
      warnings: true,
      errors: true
    }
  }
};
