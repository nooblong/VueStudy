<template>
  <div id="app">
    <router-view/>
    <TabBarInstance/>
  </div>
</template>

<script>
import TabBarInstance from "@/components/common/tabbar/TabBarInstance";

export default {
  name: 'App',
  components: {
    TabBarInstance
  }
}
</script>

<style>
@import "./assets/css/base.css";
</style>
