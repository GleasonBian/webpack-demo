const path = require('path')

// HtmlWebPackPlugin 插件解决 index.html 文件仍然会引用旧的名字问题
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 每次构建前清理dist文件夹
const CleanWebpackPlugin = require('clean-webpack-plugin');

// 引入 webpack 配置 HMR 使用
const webpack = require('webpack');


module.exports = {
  entry: {
    // -app: './src/index.js',
    // -print: './src/print.js'
    app: './src/index.js'
  },
  devtool: 'inline-source-map',
  // devServer 实时重新加载
  devServer: { 
    contentBase: './dist',
    hot: true //启用 webpack 的模块热替换
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output management'
    }),
    new CleanWebpackPlugin(),
    new webpack.NamedModulesPlugin(), // 在热加载时直接返回更新文件名, 而不是文件的id
    new webpack.HotModuleReplacementPlugin() // webpack 模块热替换插件
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath:'/'
  },
}