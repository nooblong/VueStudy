<template>
  <tab-bar>
    <tab-bar-item path="/home" active-color="#2b7dfd">
      <img slot="item-icon" src="@/assets/img/tabbar/仓储仓库.svg" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/仓储仓库1.svg" alt="">
      <div slot="item-text">Home</div>
    </tab-bar-item>
    <tab-bar-item path="/category" active-color="#2b7dfd">
      <img slot="item-icon" src="@/assets/img/tabbar/全领域规模.svg" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/全领域规模1.svg" alt="">
      <div slot="item-text">Category</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" active-color="#2b7dfd">
      <img slot="item-icon" src="@/assets/img/tabbar/合同.svg" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/合同1.svg" alt="">
      <div slot="item-text">Cart</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" active-color="#2b7dfd">
      <img slot="item-icon" src="@/assets/img/tabbar/用户.svg" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/用户1.svg" alt="">
      <div slot="item-text">Profile</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBarItem from "@/components/common/tabbar/TabBarItem";
import TabBar from "@/components/common/tabbar/TabBar";

export default {
  name: "TabBarInstance",
  components: {TabBar, TabBarItem}
}
</script>

<style scoped>

</style>