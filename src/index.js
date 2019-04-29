/**
 *  显式要求引入的 lodash 必须存在，然后将它绑定为 _（没有全局作用域污染）。
 *  通过声明模块所需的依赖，webpack 能够利用这些信息去构建依赖图，
 *  然后使用图生成一个优化过的，会以正确顺序执行的 bundle。
 *  lodash 在 tree shaking 实例中解除使用
 *  cube 在 tree shaking 实例中 引入
 */

import { cube } from './math.js';

function component() {
  let element = document.createElement('pre');

  element.innerHTML = [
    'hello webpack',
    '5 cubed is equal to' + cube(5)
  ].join('\n\n');

  return element
}
document.body.appendChild(component())

/**
 * 模块热替换
 
if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('Accepting the updated printMe module!');
    document.body.removeChild(element);
    element = component(); // 重新渲染页面后，component 更新 click 事件处理
    document.body.appendChild(element);
  })
}*/