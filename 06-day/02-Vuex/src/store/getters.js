export default {
  // 默认参数第一个是state,第二个是getters对象本身
  powerCounter(state) {
    return state.counter * state.counter;
  },
  more20stu(state) {
    return state.students.filter(s => s.age > 20)
  },
  // getters就是 getters 对象
  more20stuLength(state, getters) {
    return getters.more20stu.length
  },
  moreAgeStu(state) {
    return function (age) {
      return state.students.filter(s => s.age > age)
    }
  }

}
