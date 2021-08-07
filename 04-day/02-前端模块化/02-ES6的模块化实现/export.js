let username = '小明';
let age = 22;
let flag = true;
const sum = (num1, num2) => num1 + num2;

if (flag)
  console.log(sum(1, 2));

// 导出方式1
export {
  flag,
  sum
}

// 导出方式2 变量
export let num1 = 2;

// 导出方式3 函数和类
export const sub = (num1, num2) => num1 - num2;
export class Dog {
  constructor(name) {
    this.name = name;
  }
}

// 导出方式4 export default 只能导出一个
const address = '07镇';
export default address;