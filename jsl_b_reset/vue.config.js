const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const path = require('path');
module.exports = {
  configureWebpack: {
    resolve: {
      // 别名
      alias: {
        '@': path.resolve(__dirname, './src'),
        assets: path.resolve(__dirname, './src/assets'),
        components: path.resolve(__dirname, './src/components'),
        style: path.resolve(__dirname, './src/style'),
        utils: path.resolve(__dirname, './src/utils')
      }
    },
 
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
       require("unplugin-auto-import/webpack")({
        resolvers: [ElementPlusResolver({importStyle: false})],
      }),
      require("unplugin-vue-components/webpack")({
        resolvers: [ElementPlusResolver()],
      }),
    ]
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title= '28快检'
        return args
      })
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname,'./src/assets/css/global.less')
      ]
    }
  }
}
