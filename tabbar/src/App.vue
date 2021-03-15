<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/img/tabbar/仓储仓库.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/仓储仓库1.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/img/tabbar/全领域规模.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/全领域规模1.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/img/tabbar/合同.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/合同1.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/img/tabbar/用户.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/用户1.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "./components/tabbar/TabBar";
import TabBarItem from "./components/tabbar/TabBarItem";

export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
@import "./assets/css/base.css";
</style>