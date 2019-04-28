/**
 *  显式要求引入的 lodash 必须存在，然后将它绑定为 _（没有全局作用域污染）。
 *  通过声明模块所需的依赖，webpack 能够利用这些信息去构建依赖图，
 *  然后使用图生成一个优化过的，会以正确顺序执行的 bundle。
 */

import _ from 'lodash'
import printMe from './print.js'
import './styles.css'

/**
 * 创建 函数 component
 */
function component() {
  let element = document.createElement('div')
  let btn = document.createElement('button');

  element.innerHTML = _.join(['hello', 'webpack'], ' ')

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe; // onclick事件绑定到原始printMe函数

  element.appendChild(btn)
  return element
}
let element = component() //当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
document.body.appendChild(element)

/**
 * 模块热替换
 */
if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('Accepting the updated printMe module!');
    document.body.removeChild(element);
    element = component(); // 重新渲染页面后，component 更新 click 事件处理
    document.body.appendChild(element);
  })
}