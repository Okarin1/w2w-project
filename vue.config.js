const path = require('path');
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
   // ...
   pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      // 引入需要全局加载的 less 文件
      patterns: [path.resolve(__dirname, './src/assets/css/okarin.less')],
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        //src: '@', 默认已配置
        assets: "@/assets",
        common: "@/common",
        components: "@/components",
      },
    },
  },
}