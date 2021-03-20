<template>
  <div id="app">
    <h2>{{}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>

    <HelloVuex/>
  </div>
</template>
<script>
  import HelloVuex from "@/components/HelloVuex";
  export default {
    name: "App",
    components: {HelloVuex},
    data(){
      return{
        message: "App Components",
      }
    },
    methods: {
      add(){
        this.$store.commit("increment");
      },
      sub(){
        this.$store.commit("decrement");
      }
    }
  }
</script>
<style>

</style>
