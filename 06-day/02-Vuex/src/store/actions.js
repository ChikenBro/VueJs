export default {
  // 它的默认属性是context 上下文 这里理解成store对象

  // 不够优雅
  // [obj.A_UPTATE_INFO](context, payload) {
  //   setTimeout(() => {
  //     context.commit(obj.UPDATEINFO);
  //     console.log(payload.message);
  //     payload.success();
  //   }, 1000)
  // }

  [obj.A_UPTATE_INFO](context, payload) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit(obj.UPDATEINFO);
        console.log(payload);

        resolve("It's ok ")
      }, 1000)
    })

  }
}
