import {
  name,
  age
} from './js/info.js';
console.log(name, age);

const {
  add,
  sub
} = require('./js/mathUtils.js');
console.log(add(1, 2));
console.log(sub(1, 2));
console.log('webpack.config.js配置完毕');