<template>
<div class="back-top">
  <button class="button">TOP</button>
</div>
</template>

<script>
export default {
  name: "BackTop"
}
</script>

<style scoped>
.back-top{
  position: fixed;
  right: 10px;
  bottom: 60px;
}
.button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 32px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>