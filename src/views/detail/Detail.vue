<template>
  <div id="detail">
    <detail-nav-bar ref="nav" @titleClick="titleClick"></detail-nav-bar>
    <scroll :probe-type="3" class="content" ref="scroll" @scroll="contentScroll">
      <detail-swiper
        ref="swiper"
        :top-images="topImages"
        @ImageLoad="imageLoad"
      ></detail-swiper>
      <detail-base-info :goods="goodsInfo"></detail-base-info>
      <detail-shop-info :shop="shopInfo"></detail-shop-info>
      <detail-image-info
        :detail-info="detailInfo"
        @imageLoad="imageLoad"
      ></detail-image-info>
      <detail-params-info ref="params" :paramInfo="itemParams"></detail-params-info>
      <detail-comment-info
        ref="comment"
        @imageLoad="imageLoad"
        :comment-info="commentInfo"
      />
      <goods-list ref="recommend" :goods="recommends" />
    </scroll>

    <detail-bottom-bar @addCart="addToCart" />
    <back-top @click.native="backClick" v-show="isShowBackTop" />
    <toast :message="'哈哈哈'" :show="show" />
  </div>
  <!-- //判断对象是否为空决定展示数据
  <div  v-if="Object.keys(goods).length!==0" class="base-info"></div> -->
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailImageInfo from "./childComps/DetailImageInfo.vue";
import DetailParamsInfo from "./childComps/DetailParamsInfo.vue";
import DetailCommentInfo from "./childComps/DetailCommentInfo.vue";
import DetailBottomBar from "./childComps/DetailBottomBar.vue";

import Scroll from "components/common/scroll/Scroll";
import GoodsList from "components/contents/goods/GoodsList.vue";
import Toast from "components/common/toast/Toast.vue";

import { getDetail, Goods, getRecommend } from "network/detail";
import { debounce } from "@/common/utils.js";
import { itemListenerMixin, backTopMixin } from "@/common/mixin.js";
import { mapActions } from "vuex";

export default {
  name: "",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailImageInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    DetailBottomBar,
    Scroll,
    GoodsList,
    Toast,
  },
  mixins: [itemListenerMixin, backTopMixin],
  data() {
    return {
      id: null,
      topImages: [],
      goodsInfo: {},
      shopInfo: {},
      detailInfo: {},
      itemParams: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: 0,
      message: "",
      show: false,
    };
  },
  methods: {
    ...mapActions([
      "addCart", //also supports payload `this.nameOfAction(amount)`
    ]),
    imageLoad() {
      this.newRefresh();
      //this.$refs.scroll.refresh()
      this.getThemeTopY();
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200);
    },
    contentScroll(position) {
      // 1.获取y值
      const positionY = -position.y;
      // 2.与主题中的值对比
      for (let i = 0; i < this.themeTopYs.length - 1; i++) {
        if (
          this.currentIndex !== i &&
          this.themeTopYs[i] <= positionY &&
          positionY < this.themeTopYs[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
      this.listenShowBackTop(position);
    },
    addToCart() {
      //  1.获取购物车需要展示的信息
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goodsInfo.title;
      product.desc = this.detailInfo.desc;
      product.price = this.goodsInfo.newPrice;
      product.id = this.id;
      // 2.将商品添加到购物车
      // this.$store.dispatch("addCart", product);
      this.addCart(product).then((res) => {
        this.$toast.show(res, 2000);
      });
    },
    // swiperImageLoad() {
    //   this.$refs.scroll.refresh();
    // },
  },
  mounted() {},
  created() {
    //请求商品数据
    getDetail(this.id).then((res) => {
      this.topImages = res.topImages;
      // const data = res.result;
      //创建商品类的对象
      // this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
      // 商品基本信息
      this.goodsInfo = new Goods(res.baseInfo);
      // 店铺信息
      this.shopInfo = res.shopInfo;
      // 商品详情
      this.detailInfo = res.detailInfo;
      //参数信息
      this.itemParams = res.itemParams;
      //评论信息
      if (res.rate) {
        this.commentInfo = res.rate;
      }
    });
    getRecommend().then((res) => {
      this.recommends = res;
    });
    this.getThemeTopY = debounce(() => {
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      this.themeTopYs.push(Number.MAX_VALUE);
    }, 10);
  },
  activated() {
    //保存传入的id
    this.id = this.$route.params.id;
  },
  destroyed() {
    this.$bus.$off("ImageLoad", this.itemImgListener);
  },
};
</script>

<style scoped>
#detail {
  height: 100vh;
  background-color: #fff;
  position: relative;
  z-index: 9;
}
/* .content {
  background-color: #fff;
  /* 注意calc使用减号前后加空格 */
/* height: calc(100% - 44px); */
/* } */
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>
