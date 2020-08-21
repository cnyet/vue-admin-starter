/*
 * @Descripttion: 修改全局默认配置
 * @Author: 天泽
 * @Date: 2020-08-07 14:51:50
 * @LastEditors: 天泽
 * @LastEditTime: 2020-08-07 14:58:58
 */
const path = require('path');
// 分析包文件
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  // 使用链式操作来修改配置
  // config 参数为已经解析好的 webpack 配置
  chainWebpack: config => {
    config.resolve.alias.set('@', path.join(__dirname, 'src'));
    config.plugin('html')
      .tap((args) => {
        args[0].templateParameters = {
          title: 'XXX管理系统',
          favicon: `${process.env.VUE_APP_BASE_URL}/favicon.ico`,
        };
      return args;
    });
  },
  // 可以接收一个对象或函数，返回合并过的配置
  configureWebpack: () => {
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [
          // 使用包分析工具
          new BundleAnalyzerPlugin()
        ]
      };
    }
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
