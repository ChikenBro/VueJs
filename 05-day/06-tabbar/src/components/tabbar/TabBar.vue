<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style>
#tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  background-color: #f6f6f6;

  box-shadow: 0 -1px 1px rgba(0, 0, 0, 0.1);
}
</style>