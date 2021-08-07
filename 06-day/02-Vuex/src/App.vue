<template>
  <div id="app">
    <h2>----------Vuex-modules内容----------</h2>
    <h2>{{ $store.state.a.name }}</h2>
    <button @click="updateName">修改名字</button>
    <h2>{{ $store.getters.fullName }}</h2>
    <h2>{{ $store.getters.fullName2 }}</h2>
    <h2>{{ $store.getters.fullName3 }}</h2>

    <button @click="asyncUpdateName">异步修改</button>

    <h2>----------Vuex-info对象内容是否是响应式的----------</h2>
    <h2>{{ $store.state.info }}</h2>
    <button @click="updateInfo">修改信息</button>

    <h2>----------app----------</h2>
    <h2>{{ $store.state.counter }}</h2>
    <!-- <button @click="$store.state.counter++">+</button> -->
    <!-- <button @click="$store.state.counter--">-</button> -->
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">增加学生</button>

    <h2>----------Vuex-getters相关信息----------</h2>
    <h2>{{ $store.getters.powerCounter }}</h2>
    <h2>{{ $store.getters.more20stu }}</h2>
    <h2>{{ $store.getters.more20stuLength }}</h2>
    <h2>{{ $store.getters.moreAgeStu(12) }}</h2>

    <h2>----------hello vuex----------</h2>
    <hello-vuex />
    <!-- <hello-vuex :counter="counter" /> -->
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex.vue";
import * as obj from "./store/mutations-types";
export default {
  name: "App",
  components: {
    HelloVuex,
  },
  data() {
    return {
      message: "zrf",
      counter: 0,
    };
  },
  methods: {
    addition() {
      console.log(1);
      this.$store.commit(obj.INCREMEMT);
    },
    subtraction() {
      this.$store.commit(obj.DECREMEMT);
    },
    addCount(count) {
      // 1.普通的提交风格
      // this.$store.commit("incrementCount", count);

      // 2.特殊的提交风格 这时候传过去的是一个对象
      this.$store.commit({
        type: obj.INCREMEMTCOUNT,
        count,
      });
    },
    addStudent() {
      // 多个参数可以传递对象
      const stu = { id: 104, name: "eee", age: 100 };
      this.$store.commit(obj.ADDSTUDENT, stu);
    },
    updateInfo() {
      // this.$store.commit(obj.UPDATEINFO);

      // 异步操作
      // this.$store.dispatch(obj.A_UPTATE_INFO, {
      //   message: "我是携带的信息",
      //   success() {
      //     console.log("okok");
      //   },
      // });

      this.$store.dispatch(obj.A_UPTATE_INFO, "我是携带的信息").then((res) => {
        console.log(res);
      });
    },
    updateName() {
      this.$store.commit(obj.UPDATENAME, "zjx10086");
    },
    asyncUpdateName() {
      this.$store.dispatch(obj.A_UPTATE_NAME);
    },
  },
};
</script>

<style>
</style>
