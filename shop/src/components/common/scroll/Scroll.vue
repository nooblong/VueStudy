<template>
  <div class="" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll"
import PullUp from "@better-scroll/pull-up"

BScroll.use(PullUp);

export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data(){
    return{
      scroll: null
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper,{
      click: true,
      mouseWheel: true,
      probeType: this.probeType,
      pullUpLoad: true
    })
    this.scroll.on("scroll",(position) => {
      this.$emit("scroll", position)
    })
    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp")
      this.scroll.finishPullUp();
    })
  }
}
</script>

<style scoped>

</style>