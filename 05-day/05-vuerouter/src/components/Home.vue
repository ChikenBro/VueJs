<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容哈哈哈哈</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      path: "/home/news",
    };
  },
  created() {
    console.log("home created");
  },
  destroyed() {
    console.log("home destroyed");
  },
  activated() {
    this.$router.push(this.path);
  },
  beforeRouteLeave(to, from, next) {
    // console.log(this.$route.path);
    this.path = this.$route.path;
    next();
  },
};
</script>

<style>
</style>