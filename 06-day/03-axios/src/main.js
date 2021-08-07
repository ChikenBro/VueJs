import Vue from 'vue'
import App from './App'

import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

// 1.基本使用

// 使用全局的axios和对应的配置在进行网络请求
axios.defaults.baseURL = 'http://152.136.185.210:7878/api/m5'
axios.defaults.timeout = 5000
//默认get请求
axios({
  url: '/home/multidata',
  method: 'get'
}).then(res => {
  console.log(res);
})

axios({
  // url: 'http://152.136.185.210:7878/api/m5/home/data?type=pop&page=1',
  url: '/home/data',
  params: {
    type: 'pop',
    page: 1
  },
}).then(res => {
  console.log(res);
})

// 2.axios发送并发请求
axios.all([
  axios({
    url: '/home/multidata',
  }),
  axios({
    url: '/home/data',
    params: {
      type: 'sell',
      page: 5
    }
  })
]).then(results => {
  console.log(results);
})
// 也可以then(axios.spread((res1, res2) => {
//   console.log(res1);
//   console.log(res2);
// }))

// 创建axious实例
const instance1 = axios.create({
  baseURL: 'http://152.136.185.210:7878/api/m5',
  timeout: 5000
})

instance1({
  url: '/home/multidata'
}).then(result => {
  console.log('--------------');
  console.log(result);
})


// 封装reques模块
import {
  request
} from './network/request'

// 方法1
// request({
//   url: '/home/multidata',
// }, res => {
//   console.log(res);
// }, err => {
//   console.log(err);
// })

// 方法2
// request({
//   baseConfig: {
//     url: '/home/multidata',
//   },
//   success(res) {
//     console.log('ok');
//     console.log(res);
//   },
//   failure(err) {
//     console.log('error');
//     console.log(err);
//   }
// })
// 3.最终方案
request({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
  console.log('ok');
}).catch(err => {
  console.log(err);
  console.log('error');
})
