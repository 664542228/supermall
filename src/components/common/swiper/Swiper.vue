<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <div class="swiper-pagination"></div>
    <!-- <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div> -->
  </div>
</template>

<script>
import { Swiper, Navigation, Pagination, Autoplay } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperItem from "./SwiperItem.vue";

import "swiper/swiper-bundle.min.css";

Swiper.use([Navigation, Pagination, Autoplay]);
export default {
  name: "Swiper",
  props: {
    images: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: { SwiperItem },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      autoplay: true, // 循环模式选项
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true, //修改swiper的父元素时，自动初始化swiper
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
      },
      //   navigation: {
      //     nextEl: ".swiper-button-next",
      //     prevEl: ".swiper-button-prev",
      //   },
    });
  },
};
</script>

<style scoped>
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
</style>
