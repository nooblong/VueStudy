<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style>

#tab-bar {
  display: flex;
  background-color: rgb(249,250,252);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px 0 rgb(176, 178, 178);
}
</style>