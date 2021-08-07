var {
  flag,
  greet
} = require('./commomjs导出.js');
// 相当于
// var obj = require('./commomjs导出.js');
// var flag = obj.flag;
// var greet = obj.greet;

console.log(flag);
greet();