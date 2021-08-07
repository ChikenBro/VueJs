// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import {
  compile
} from 'vue/types/umd'
import App from './App'

Vue.config.productionTip = false
const cpn = {
  template: '<div>{{message}}</div>',
  data() {
    return {
      message: 'Hello'
    }
  }
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: {
  //   App
  // },
  // template: '<App/>',
  render: function (createElement) {
    // 1.普通用法 createElement('标签', {标签的属性},['标签里的内容'])
    // return createElement('h2', {
    //     class: 'box'
    //   },
    //   ['Hellow World', createElement('button', ['按钮'])]
    // )

    // 2.传入组件对象
    return createElement(App)
  }
})
// runtime-compiler
// template -> ast -> render -> vdom -> ui

// runtime-only (1.性能好 2.代码少)
// render -> vdom -> ui

// .vue中的template是由vue-template-compiler处理的
