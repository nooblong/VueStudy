<template>
  <div class="tab-control apple">
    <div v-for="(item,index) in titles" class="tab-control-item"
         :class="{active : index === currentIndex}"
         @click="itemClick(index)" :key="item.iid">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    }
  }
}
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
}

.tab-control-item {
  flex: 1;
}

.tab-control-item span{
  font-family: sans-serif;
  font-size: 14px;
  font-weight: 1000;
}
.tab-control{
  background-color: rgb(232,232,232);
}

.tab-control-item span {
  padding: 5px;
}

.active {
  background-color: white;
  /*margin: 4px;*/
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 20px 2px;
}

span text {
  position: fixed;
}
</style>