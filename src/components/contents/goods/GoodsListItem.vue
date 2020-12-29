<template>
  <div class="goods-item">
    <img :src="goodsItem.img" alt="" @load="imageLoad" />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.id }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    imageLoad() {
      this.$bus.$emit("itemImageLoad");
    },
  },
};
</script>

<style>
.goods-item {
  padding-bottom: 33px;
  width: 46%;
  position: relative;
}
.goods-item img {
  border-radius: 5px;
  border: 3px solid var(--color-tint);
  width: 98%;
}
.goods-info {
  position: absolute;
  right: 0;
  left: 0;
  bottom: 3px;
  text-align: center;
  font-size: 12px;
}
.goods-info p {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-bottom: 3px;
}
.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-info .collect {
  position: relative;
}
.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: 1px;
  width: 14px;
  height: 14px;
  background: url("~assets/images/common/collect.svg") 0 0/14px 14px;
}
</style>
