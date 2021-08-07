import axios from "axios";

export function request(config) {
  // 终极方案plus

  // 创建axios实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })
  // 2.axios拦截器
  // 2.1请求拦截
  instance.interceptors.request.use(config => {
    console.log(config);
    // 请求拦截的作用
    // 1.筛选config信息/进行变化
    // 2.每次发送网络请求,都希望在界面中显示一个请求图标
    // 3.某些网络请求(比如登录) 必须携带特殊的信息(token)

    //必须返回 不然请求会失败
    return config
  }, err => {
    console.log(err);
  })
  // 响应拦截
  instance.interceptors.response.use(res => {
    console.log('response ', res.data);
    // 不返回就拿不到结果
    return res.data
  }, err => {
    console.log('response ', err);
  })


  //发送真正请求
  return instance(config)



  // // 终极方案
  // return new Promise((resolve, reject) => {
  //   const instance = axios.create({
  //     baseURL: 'http://152.136.185.210:7878/api/m5',
  //     timeout: 5000
  //   })

  //   instance(config).then(res => {
  //     resolve(res)
  //   }).catch(err => {
  //     reject(err)
  //   })

  // })


  //创建axios实例
  // const instance = axios.create({
  //   baseURL: 'http://152.136.185.210:7878/api/m5',
  //   timeout: 5000
  // })

  //发送真正的网络请求
  // 方法1
  // instance(config).then(res => {
  //   success(res)
  // }).catch(err => {
  //   failure(err)
  // })
  // 方法2
  // instance(config.baseConfig).then(res => {
  //   config.success(res)
  // }).catch(err => {
  //   config.failure(err)
  // })
}
