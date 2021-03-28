<template>
  <div id="home">

    <nav-bar class="home-navbar">Home</nav-bar>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll"
    :pull-up-load="true" @pullingUp="pullingUp">
      <div class="home-swiper apple">
        <swiper>
          <swiper-item v-for="item in banners" :key="item.title">
            <a :href="item.link">
              <img :src="item.image" alt=""/>
            </a>
          </swiper-item>
        </swiper>
      </div>
      <recommend-view :recommends="recommends"/>
      <custom-image/>
      <tab-control class="tab-control" :titles="['Pop','New','Nice']"
                   @tabClick="tabClick"/>
      <goods-list :goods="goods[currentType].list"/>
    </scroll>
    <back-top v-show="isShow" @click.native="backClick" />
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import {getHomeMultiData, getHomeGoods} from "@/network/home";
import Swiper from "@/components/common/swiper/Swiper";
import SwiperItem from "@/components/common/swiper/SwiperItem";
import RecommendView from "@/views/home/RecommendView";
import CustomImage from "@/views/home/CustomImage";
import TabControl from "@/components/content/TabControl";
import GoodsList from "@/components/content/GoodsList";
import GoodsListItem from "@/components/content/GoodsListItem";
import Scroll from "@/components/common/scroll/Scroll";
import BackTop from "@/components/content/BackTop";

export default {
  name: "Home",
  components: {
    NavBar,
    Swiper,
    SwiperItem,
    RecommendView,
    CustomImage,
    TabControl,
    GoodsList,
    GoodsListItem,
    Scroll,
    BackTop
  },
  data() {
    return {
      res: null,
      banners: [],
      recommends: [],
      goods: {
        "pop": {page: 0, list: []},
        "new": {page: 0, list: []},
        "sell": {page: 0, list: []}
      },
      currentType: "pop",
      scroll: null,
      isShow: false
    }
  },
  created() {
    this.getHomeMultiData();

    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    getHomeMultiData() {
      getHomeMultiData().then(res => {
        this.res = res;
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
        this.scroll.refresh();
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
        // console.log(res);
        this.scroll.refresh();
      })
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          this.scroll.refresh();
          console.log("refresh");
          break;
        case 1:
          this.currentType = "new";
          this.scroll.refresh();
          console.log("refresh");
          break;
        case 2:
          this.currentType = "sell";
          this.scroll.refresh();
          console.log("refresh");
          break;
      }
    },
    backClick(){
      this.scroll.scrollTo(0,0,30000);
    },
    contentScroll(pos){
      if (-pos.y > 1000){
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    },
    pullingUp(){
      this.getHomeGoods(this.currentType);
      console.log("pullingUp");
      this.scroll.refresh();
    }
  },
  mounted() {
    this.scroll = this.$refs.scroll.scroll;
  }
}
</script>

<style scoped>

#home{
  height: 100vh;
  position: relative;
}

.home-swiper {
  margin-top: 44px;
}

.home-navbar {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

.tab-control {
  position: sticky;
  top: 50px;
  z-index: 9;
}

.content {
  /*height: calc(100% - 93px);*/
  /*margin-top: 48px;*/
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
  /*background-color: #ff8198;*/
}
</style>