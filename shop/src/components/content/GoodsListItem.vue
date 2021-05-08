<template>
  <div class="goods-item apple">
    <img :src="goodsItem.show.img" alt="" @load="imageLoad"/>
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{"人民币"+goodsItem.price}}</span>
      <span class="collect">{{"收藏"+goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default(){
        return {};
      }
    }
  },
  methods: {
    imageLoad(){
      this.$bus.$emit("itemImageLoad");
    }
  }
}
</script>

<style scoped>
.goods-item {
  padding-bottom: 40px;
  position: relative;
  /*width: 100%;*/
  height: 100px;
}
.goods-item img {
  margin: 0;
  width: 30%;
  /*border-radius: 10px;*/
}
.goods-info {
  margin: 10px;
  font-size: 12px;
  position: absolute;
  bottom: 10px;
  left: 120px;
  right: 0;
  overflow: hidden;
  text-align: center;
}
/*.goods-info p {*/
/*  overflow: hidden;*/
/*  text-overflow: ellipsis;*/
/*  white-space: nowrap;*/
/*  margin-bottom: 3px;*/
/*}*/
.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
/*.goods-info .collect {*/
/*  position: relative;*/
/*}*/
/*.goods-info .collect::before {*/
/*  content: '';*/
/*  position: absolute;*/
/*  left: -15px;*/
/*  top: -1px;*/
/*  width: 14px;*/
/*  height: 14px;*/
/*  !*background: url("~assets/img/common/collect.svg") 0 0/14px 14px;*!*/
/*}*/
</style>