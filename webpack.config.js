const path = require('path')
// HtmlWebPackPlugin 插件解决 index.html 文件仍然会引用旧的名字问题
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 每次构建前清理dist文件夹
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output management'
    }),
    new CleanWebpackPlugin(),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
}