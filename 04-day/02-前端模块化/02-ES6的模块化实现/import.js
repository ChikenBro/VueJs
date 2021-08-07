import {
  flag,
  sum,
  sub,
  Dog,
} from './export.js';
if (flag)
  console.log('小明是天才hhh');
console.log(sum(1, 2));
console.log(sub(1, 2));

const lucky = new Dog('lucky');
console.log(lucky.name);

import add from './export.js';
console.log(add);

// 统一全部导出
import * as aaa from './export.js';
console.log(aaa.flag);