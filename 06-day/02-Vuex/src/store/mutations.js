import * as obj from "./mutations-types"
export default {
  //定义方法 默认有个参数叫state
  [obj.INCREMEMT](state) {
    state.counter++;
  },
  [obj.DECREMEMT](state) {
    state.counter--;
  },
  //第二个参数是实例传过来的
  // count叫做payload:载荷
  [obj.INCREMEMTCOUNT](state, payload) {
    state.counter += payload.count
  },
  [obj.ADDSTUDENT](state, stu) {
    state.students.push(stu);
  },
  [obj.UPDATEINFO](state) {
    //错误代码
    // setTimeout(() => {
    //   state.info.name = 'zjx';
    // }, 1000)

    state.info.name = 'zjx';
    //页面不会添加这个属性
    // state.info['address'] = '07'
    //这种是响应式的
    // Vue.set(state.info, 'address', '07')

    // 做不到响应式
    // delete state.info.age
    //这种是响应式的
    // Vue.delete(state.info, 'age')
  }
}
