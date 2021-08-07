import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import * as obj from "./mutations-types"

//最后模块里的state是被放到state里的
//mutations 直接使用commit执行即可
//getters 也是直接使用就可以了
const moduleA = {
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
const store = new Vuex.Store({
  //保存状态
  state: {
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
  },
  mutations: {
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
  },
  actions: {
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
  },
  //类似于计算属性
  getters: {
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

  },
  modules: {
    a: moduleA,
  }
})

export default store
