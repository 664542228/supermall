<template>
  <div class="detail-swiper">
    <swiper>
      <swiper-item v-for="item in topImages">
        <a href=""> <img @load="imageLoad" :src="item" alt="" /></a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "DetailSwiper",
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
  data() {
    return {
      isLoad: false,
    };
  },
  methods: {
    imageLoad() {
      if (!this.isLoad) {
        this.$emit("ImageLoad");
        this.isLoad = true;
      }
    },
  },
};
</script>

<style scoped>
.detail-swiper {
  height: 280px;
}
.detail-swiper img {
  height: 100%;
  width: 100%;
}
</style>
