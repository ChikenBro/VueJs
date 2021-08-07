import {
  name,
  age
} from './js/info.js';
console.log(name, age);

const {
  add,
  sub
} = require('./js/mathUtils');
console.log(add(1, 2));
console.log(sub(1, 2));
console.log('webpack.config.js配置完毕');

// 依赖css文件
require('./css/normal.css');
import style from './css/test.css';

// 依赖less文件
require('./css/special.less');

//使用vue
import Vue from 'vue';

// const App = {
//   template: `
//     <div>
//       <h2>{{message}}</h2>
//       <button @click="btnClick">按钮</button>
//     </div>
//   `,
//   data() {
//     return {
//       message: 'hello webpack'
//     }
//   },
//   methods: {
//     btnClick() {
//       console.log('btnClick');
//     }
//   }
// }
// import App from './vue/app.js';
import App from './vue/App.vue';
new Vue({
  el: '#app',
  //它内部会替换到挂载的el上
  template: `<App/>`,
  components: {
    App
  }
})


document.writeln('<button>本地服务器</button>');