const path = require('path')

// HtmlWebPackPlugin 插件解决 index.html 文件仍然会引用旧的名字问题
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 每次构建前清理dist文件夹
const CleanWebpackPlugin = require('clean-webpack-plugin');

// 引入 webpack 配置 HMR 使用
const webpack = require('webpack');


module.exports = {
  entry: {
    app: './src/index.js'
  },
  devtool: 'inline-source-map', // source map 选项 追踪到错误和警告在源代码中的原始位置

  /**
   *  devServer 实时重新加载
   * 告知 webpack-dev-server，在 localhost:8080 下建立服务，将 dist 目录下的文件，作为可访问文件。
   */
  devServer: {
    contentBase: './dist', // 对外提供的访问内容的路径
    hot: true //启用 webpack 的模块热替换
  },
  /**
   * HMR 修改样式表
   */
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output management'
    }),
    new CleanWebpackPlugin(), // 清除 dist 文件夹下 编译文件
    new webpack.NamedModulesPlugin(), // 在热加载时直接返回更新文件名, 而不是文件的id
    new webpack.HotModuleReplacementPlugin() // webpack 模块热替换插件
  ],
  /**
   * webpack-dev-middleware中间件 publicPath 配置: 
   *  publicPath 也会在服务器脚本用到，以确保文件资源能够在 http://localhost:3000 下正确访问 端口
   *  在 server.js 中配置端口 使用 npm run server 启用服务
   */
  output: {
    filename: '[name].bundle.js', // [name] 生成的名字为入口 entry 的 key 当前执行 npm run build 在 dist 文件下生成 app.bundle.js 文件
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
}