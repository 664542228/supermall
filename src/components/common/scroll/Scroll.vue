<template>
  <div class="wrapper" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";

export default {
  name: "Scroll",
  props: {
    probType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: {
        type: Object,
        default() {
          return {};
        },
      },
    };
  },
  mounted() {
    setTimeout(() => {
      this.scroll = new Bscroll(this.$refs.wrapper, {
        click: true,
        pullUpLoad: this.pullUpLoad,
        disableMouse: false, //启用鼠标拖动
        disableTouch: false, //启用手指触摸
        probeType: this.probType,
        observeDom: true,
      });
      //滚动监听
      if (this.probType === 2 || this.probType === 3) {
        this.scroll.on("scroll", (position) => {
          this.$emit("scroll", position);
        });
      }
      //监听上拉加载更多
      if (this.pullUpLoad) {
        this.scroll.on("pullingUp", () => {
          this.$emit("pullingUP");
          //解决切换标签后上拉加载更多
          this.scroll.finishPullUp();
          this.scroll.refresh();
          // setTimeout(() => {
          //   this.scroll.finishPullUp();
          //   this.scroll.refresh();
          // }, 500);
        });
      }
    }, 20);
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    // getScrollY() {
    //   return this.scroll ? this.scroll.y : 0;
    // },
  },
};
</script>

<style scoped></style>
