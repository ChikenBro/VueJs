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

// 依赖css文件
require('./css/normal.css');
import style from './css/test.css';

// 依赖less文件
require('./css/special.less');