<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in cbanners" :key="item.image">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageLoad" />
          <!-- <img src="~assets/images/home/banner.jpg" alt="" /> -->
        </a>
      </div>
    </div>
    <div class="swiper-pagination"></div>
    <!-- <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div> -->
  </div>
</template>

<script>
import { Swiper, Navigation, Pagination, Autoplay } from "swiper";

import "swiper/swiper-bundle.min.css";
Swiper.use([Navigation, Pagination, Autoplay]);
export default {
  name: "HomeSwiper",
  props: {
    cbanners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      isLoad: false,
    };
  },
  methods: {
    //只发送一次事件，使用变量记录状态
    imageLoad() {
      if (!this.isLoad) {
        this.$emit("swiperImageLoad");
        this.isLoad = true;
      }
    },
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      autoplay: true,
      // loop: true, // 循环模式选项
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true, //修改swiper的父元素时，自动初始化swiper
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  },
};
</script>

<style>
.swiper-container {
  height: 190px;
}
.swiper-pagination-bullet {
  margin: 0 5px;
  /* width: 30px;
  height: 6px; */
  /* border-radius: 2px; */
  background: rgba(255, 255, 255, 0.5);
  opacity: 0.5;
}

.swiper-pagination-bullet-active {
  background: rgba(255, 255, 255, 1);
  opacity: 1;
}
.swiper-slide img {
  height: 100%;
  width: 100%;
}
</style>
