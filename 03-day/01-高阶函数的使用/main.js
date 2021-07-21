const app = new Vue({
  el: '#app',
  data: {
    books: [{
        id: 1,
        name: '《算法导论》',
        data: '2006-9',
        price: 85.00,
        count: 1
      },
      {
        id: 2,
        name: '《UNIX编程艺术》',
        data: '2016-9',
        price: 59.00,
        count: 1
      },
      {
        id: 3,
        name: '《编程珠玑》',
        data: '2002-6',
        price: 39.00,
        count: 1
      },
      {
        id: 4,
        name: '《代码大全》',
        data: '2006-12',
        price: 128.00,
        count: 1
      },
    ]
  },
  computed: {
    totalPrice() {
      let totalPrice = 0;
      // 1.一般的for循环
      for (let i = 0; i < this.books.length; i++)
        totalPrice += this.books[i].price * this.books[i].count;

      // 2.for in 循环
      for (let i in this.books)
        totalPrice += this.books[i].price * this.books[i].count;

      // 3.for of 循环
      for (let book of this.books)
        totalPrice += book.price * book.count;

      // 4.reduce()


      return totalPrice;
    }
  },

  // 过滤器
  filters: {
    showPrice(price) {
      return '¥' + price.toFixed(2);
    }
  }
})

// 编程范式 命令式编程/声明式编程
// 编程范式 面向对象编程(第一公民:对象)/函数式编程(第一公民:函数) 利于链式编程

const nums = [100, 200, 30, 400, 50];
// filter的回调函数必须返回一个布尔值 fasle会过滤这个元素 最终返回的是一个新数组
let filterNums = nums.filter(item => item < 100);
//map的回调函数会返回处理完后的这个元素 最终返回一个新的数组
let mapNums = filterNums.map(item => item * 2);
//reduce就是汇总数组的内容
//prev是上一次返回的值,0是prev的初始值 最终返回prev值
let reduceNums = mapNums.reduce((prev, curr) => prev + curr, 0)
let total = nums.filter(n => n < 100).map(n => n * 2).reduce((prev, curr) => prev + curr, 0);
console.log(reduceNums, total);