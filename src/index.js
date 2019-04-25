/**
 *  显式要求引入的 lodash 必须存在，然后将它绑定为 _（没有全局作用域污染）。
 *  通过声明模块所需的依赖，webpack 能够利用这些信息去构建依赖图，
 *  然后使用图生成一个优化过的，会以正确顺序执行的 bundle。
 */

import _ from 'lodash'
import './style.css';
import Icon from './icon.png'
/**
 * 创建 函数 component
 */
function component() {
  let element = document.createElement('div')

  // - lodash (目前通过一个 script 脚本引入) 对于执行这一项必须的
  // lodash, now imported by this script(lodash 现在由脚本引入)
  element.innerHTML = _.join(['hello', 'webpack'], ' ')
  element.classList.add('hello');

  // 将图像添加到现有div
  let myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon)
  
  return element
}

document.body.appendChild(component())
