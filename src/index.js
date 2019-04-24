/**
 * 创建 函数 component
 */
function component() {
  let element = document.createElement('div')

  // lodash (目前通过一个 script 脚本引入) 对于执行这一项必须的
  element.innerHTML = _.join(['hello', 'webpack'], '')

  return element
}

document.body.appendChild(component())