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
      // for (let book of this.books)
      //   totalPrice += book.price * book.count;
      return this.books.reduce((prev, curr) => prev + curr.price * curr.count, 0);

    }
  },
  methods: {
    // getFinalPrice(price) {
    //   return '¥' + price.toFixed(2);
    // }
    increment(index) {
      this.books[index].count++;
    },
    decrement(index) {
      this.books[index].count--;
    },
    removeHandle(index) {
      this.books.splice(index, 1);
    }
  },
  // 过滤器
  filters: {
    showPrice(price) {
      return '¥' + price.toFixed(2);
    }
  }
})