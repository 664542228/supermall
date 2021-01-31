<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/images/common/back.svg" alt="" />
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item, index) in titiles"
          class="title-item"
          :class="{ active: index === currentIndex }"
          @click="titleClick(index)"
        >
          {{ item }}
        </div>
      </div></nav-bar
    >
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "DetailNavBar",
  components: {
    NavBar,
  },
  data() {
    return {
      titiles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index);
    },
    backClick() {
      this.$router.back();
      // this.$router.go(-1)
    },
  },
};
</script>

<style scoped>
.nav-bar {
  background-color: #fff;
  position: relative;
  z-index: 9;
}
.title {
  display: flex;
  justify-content: space-evenly;
  font-size: 13px;
}
/* .title-item {
  flex: 1;
} */
.active {
  color: var(--color-high-text);
}
.back img {
  margin-top: 10px;
}
</style>
