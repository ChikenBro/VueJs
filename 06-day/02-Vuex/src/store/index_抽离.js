import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'

Vue.use(Vuex)

const state = {
  counter: 1000,
  students: [{
      id: 100,
      name: 'aaa',
      age: 18
    },
    {
      id: 101,
      name: 'bbb',
      age: 21
    },
    {
      id: 102,
      name: 'ccc',
      age: 17
    },
    {
      id: 103,
      name: 'ddd',
      age: 28
    },

  ],
  info: {
    name: 'zrf',
    age: 22,
  }
}
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    a: moduleA,
  }
})

export default store
