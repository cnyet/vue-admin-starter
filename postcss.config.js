/**
 * PostCss 是一种用JavaScript来处理CSS的工具，主要功能有两个：
 * 1. 把CSS处理解析成JavaScript可以操作AST（抽象语法树结构）
 * 2. 然后调用各种插件来处理AST，实现更丰富的功能，比如：支持变量和混入，增加浏览器相关的前缀，压缩图片，生成雪碧图等
 * https://github.com/michael-ciniawsky/postcss-load-config
 */
module.exports = {
  "plugins": {
    // to edit target browsers: use "browserslist" field in package.json
    //添加浏览器前缀
    "autoprefixer": {},
    //检测到主样式表中@import的文件然后合并到文件中，自动发现Bower Component和Node Module中样式文件
    'postcss-import': {},
    //处理图片和 SVG
    'postcss-assets': {},
    //压缩和优化样式表的功能
    'cssnano': {}
  }
}