<template>
  <grid-view>
    <goods-list-item
      v-for="(item, index) in categoryDetail"
      :key="index"
      :goodsItem="item"
    ></goods-list-item>
  </grid-view>
</template>

<script>
import GridView from "common/gridView/GridView";
import GoodsListItem from "components/contents/goods/GoodsListItem.vue";

export default {
  name: "TabContentDetail",
  components: {
    GridView,
    GoodsListItem,
  },
  data() {
    return {
      isShow: false,
    };
  },
  props: {
    categoryDetail: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped></style>
