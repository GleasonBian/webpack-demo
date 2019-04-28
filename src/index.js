/**
 *  显式要求引入的 lodash 必须存在，然后将它绑定为 _（没有全局作用域污染）。
 *  通过声明模块所需的依赖，webpack 能够利用这些信息去构建依赖图，
 *  然后使用图生成一个优化过的，会以正确顺序执行的 bundle。
 */

import _ from 'lodash'
import printMe from './print.js'

/**
 * 创建 函数 component
 */
function component() {
  let element = document.createElement('div')
  let btn = document.createElement('button');

  element.innerHTML = _.join(['hello', 'webpack'], ' ')

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn)
  return element
}

document.body.appendChild(component())

/**
 * 模块热替换
 */
 if (module.hot) {
   module.hot.accept('./print.js', function() {
     console.log('Accepting the updated printMe module!');
     printMe();
   })
 }