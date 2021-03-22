<template>
  <div id="home">
    <nav-bar class="home-navbar">Home</nav-bar>
    <div id="home-swiper">
      <swiper>
        <swiper-item v-for="item in banners" :key="item.title">
          <a :href="item.link">
            <img :src="item.image" alt=""/>
          </a>
        </swiper-item>
      </swiper>
    </div>
    <recommend-view :recommends="recommends"/>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import {getHomeMultiData} from "@/network/home";
import Swiper from "@/components/common/swiper/Swiper";
import SwiperItem from "@/components/common/swiper/SwiperItem";
import RecommendView from "@/views/home/RecommendView";

export default {
  name: "Home",
  components: {
    NavBar,
    Swiper,
    SwiperItem,
    RecommendView
  },
  data() {
    return {
      res: null,
      banners: [],
      recommends: [],

    }
  },
  created() {
    getHomeMultiData().then(res => {
      this.res = res;
      this.banners = res.data.data.banner.list;
      this.recommends = res.data.data.recommend.list;
    })
  }
}
</script>

<style scoped>
#home-swiper {
  border-radius: 10px;
  background-color: white;
  margin-left: 8px;
  margin-right: 8px;
  box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 20px 2px;
  margin-bottom: 15px;
}
</style>