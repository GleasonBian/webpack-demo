
/**
 * 引入 express 
 * 引入 webpack
 * 引入 webpack-dev-middleware
 */
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js')
const compiler = webpack(config);

/**
 * 告诉 express 使用 webpack-dev-middleware(中间件) 并使用 webpack.config.js 配置文件作为基础。
 */
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}))

/**
 * 为端口 3000 上的文件提供服务
 */
app.listen(3000, function () { 
  console.log('example app listening port 3000!\n');
})