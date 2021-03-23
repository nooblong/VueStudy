<template>
  <div id="home">

    <nav-bar class="home-navbar">Home</nav-bar>

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

    <custom-image/>
    <custom-image/>
    <custom-image/>
    <custom-image/>
    <custom-image/>
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
    GoodsListItem
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
      currentType: "pop"
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
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
        // console.log(res);
      })
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    }
  }
}
</script>

<style scoped>

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
</style>