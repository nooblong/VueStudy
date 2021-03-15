<template>
  <div id="app">
<!--    <router-link to="/home" tag="button" replace active-class="active">首页</router-link>-->
<!--    <router-link to="/about" tag="button" replace active-class="active">关于</router-link>-->

<!--    <router-link to="/home" tag="button" replace active-class="active">首页</router-link>-->
<!--    <router-link to="/about" tag="button" replace active-class="active">关于</router-link>-->
<!--    <router-view></router-view>-->
<!--    <button @click="homeClick">首页</button>-->
<!--    <button @click="aboutClick">关于</button>-->

    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link v-bind:to="/user/+userId">用户</router-link>
    <router-link v-bind:to="{path: '/profile', query: {
      name: 'nhb',
      age: 23,
      height: 1.6
    }}">档案</router-link>

    <img :src="imgURL" alt="">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      userId: 'lisi',
      imgURL: ''
    }
  },
  methods: {
    homeClick(){
      console.log('homeClick');
      // this.$router.push('/home');
      this.$router.replace('/home');
    },
    aboutClick(){
      console.log('aboutClick');
      // this.$router.push('/about');
      this.$router.replace('/about');
    }
  }
}
</script>

<style>
  .active {
    color: aqua;
  }
</style>
