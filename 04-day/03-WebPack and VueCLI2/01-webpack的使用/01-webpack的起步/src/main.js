import {
  name,
  age
} from './info.js';
console.log(name, age);

const {
  add,
  sub
} = require('./mathUtils.js');
console.log(add(1, 2));
console.log(sub(1, 2));