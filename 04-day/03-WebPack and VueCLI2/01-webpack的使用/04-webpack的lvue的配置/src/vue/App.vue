<template>
  <div>
    <h2 class='title'>{{message}}</h2>
    <button @click="btnClick">按钮</button><br>
    <b>it's ok</b>
    <Cpn></Cpn>
  </div>
</template>

<script>
  import Cpn from './Cpn.vue';
  export default {
    name: 'App',
    data() {
      return {
        message: 'hello webpack'
      }
    },
    methods: {
      btnClick() {
        console.log('btnClick');
      }
    },
    components: {
      Cpn
    }
  }
</script>

<style>
  .title {
    color: orange;
  }
</style>