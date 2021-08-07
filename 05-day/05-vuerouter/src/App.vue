<template>
  <div id="app">
    <router-link to="/home" tag="button">首页</router-link>
    <router-link to="/about" tag="button">关于</router-link>
    <router-link :to="'/user/' + userId" tag="button">用户</router-link>
    <!-- <router-link to="/profile" tag="button">我的档案</router-link> -->
    <router-link
      :to="{ path: '/profile', query: { name: 'zrf', age: 22 } }"
      tag="button"
      >我的档案</router-link
    >

    <!-- router-view就是一个占位标签  -->
    <!-- 不要在,后随便加空格 -->
    <keep-alive exclude="Profile,User">
      <router-view></router-view>
    </keep-alive>
    <!-- <button @click="homeClick">首页</button> -->
    <!-- <button @click="aboutClick">关于</button> -->
    <button @click="userClick">新用户</button>
    <button @click="profileClick">新档案</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userId: "zrf",
    };
  },
  methods: {
    homeClick() {
      // this.$router.push("/home");
      this.$router.replace("/home");
    },
    aboutClick() {
      // this.$router.push("/about");
      this.$router.replace("/about");
    },
    userClick() {
      this.$router.push("/user/" + this.userId);
    },
    profileClick() {
      this.$router.push({
        path: "/profile",
        query: {
          name: "kobe",
          age: 38,
        },
      });
    },
  },
};
</script>

<style>
.router-link-active {
  background: skyblue;
  color: white;
  transition: 500ms;
  transform: scale(1.2) translate(10px, 10px);
}
.active {
  color: red;
}
</style>
