<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :cbanners="banners"></home-swiper>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
  },
  data() {
    return {
      banners: [],
    };
  },
  created() {
    this.banners = [
      {
        link: "https//:www.baidu.com",
        image:
          "https://i2.hdslb.com/bfs/archive/a9828b89cd58900c67d376c0aa75ed86f0d73a9b.jpg@257w_145h_1c_100q.webp",
      },
      {},
      {},
    ];
  },
  // data(){
  //   return{
  //     banners:[]
  //     recommends:[]
  //   }
  // }
  // created() {
  //   //请求数据
  //   getHomeMultaidata().then((res) => {
  //     console.log(res);
  //     this.banners=res.data.banner.list;
  //     this.recommends=res.data.recommend.list;
  //   });
  // },
};
</script>

<style>
/* #home {
  padding-top: 44px;
  height: 100vh;
  position: relative;
} */
.home-nav {
  background-color: var(--color-tint);
  color: white;
}
</style>
