<template>
  <div>
    <h1>你好,{{ userId }}</h1>
    <h1>{{ $route.params.aaa }}</h1>

    <h2>我是用户界面</h2>
    <p>我是用户界面的内容嘿嘿嘿</p>
  </div>
</template>

<script>
export default {
  name: "User",
  // created() {
  //   document.title = "用户";
  // },
  computed: {
    userId() {
      //router是new出来的router对象 route是活跃的route
      return this.$route.params.aaa;
    },
  },
  created() {
    console.log("User created");
  },
};
</script>

<style>
</style>