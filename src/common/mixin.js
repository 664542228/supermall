import { debounce } from "common/utils";
import BackTop from "components/contents/backTop/BackTop.vue";

export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,
      newRefresh: null
    };
  },
  mounted() {
    this.newRefresh = debounce(this.$refs.scroll.refresh, 50);
    this.itemImgListener = () => {
      this.newRefresh();
    };
    this.$bus.$on("ImageLoad", this.itemImgListener);
  }
};

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false
    };
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 300);
    },
    listenShowBackTop(position) {
      this.isShowBackTop = -position.y > this.$refs.scroll.$el.offsetHeight;
    }
  }
};
