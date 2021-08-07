export default {
  state: {
    name: 'zrf9527'
  },
  mutations: {
    [obj.UPDATENAME](state, payload) {
      state.name = payload
    }
  },
  actions: {
    [obj.A_UPTATE_NAME](context) {
      // 这里的context commit的是模块A里的mutations
      // 可以通过rootState 和 rootGetters获取
      setTimeout(() => {
        console.log('我是根元素state里的', context.rootState.counter);
        console.log('我是根元素state里的', context.rootGetters.powerCounter);
        context.commit(obj.UPDATENAME, 'Bob')
      }, 1000)
    }
  },
  getters: {
    fullName(state) {
      return state.name + 111
    },
    fullName2(state, getters) {
      return getters.fullName + '222'
    },
    fullName3(state, getters, rootState) {
      return getters.fullName2 + rootState.counter
    }
  }
}
