;
var moduleA = (function () {
  // es5做法 导出对象
  var obj = {};

  var name = 'xm';
  var age = 22;

  function sum(num1, num2) {
    return num1 + num2;
  }

  var flag = true;

  if (flag)
    console.log(sum(1, 2));

  obj.flag = flag;
  obj.sum = sum;

  return obj;
})();