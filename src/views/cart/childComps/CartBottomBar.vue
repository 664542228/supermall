<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button
        :is-checked="isSelectAll"
        class="check-button"
        @click.native="checkClick"
      />
      <span>全选</span>
    </div>

    <div class="price">合计：{{ totalPrice }}</div>
    <div class="calculate">去计算:({{ checkLength }})</div>
  </div>
</template>

<script>
import CheckButton from "components/contents/checkButton/CheckButton.vue";
import { mapGetters } from "vuex";

export default {
  components: { CheckButton },
  name: "CartBottomBar",
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      return (
        "￥" +
        this.cartList
          .filter((item) => item.checked)
          .reduce((preValue, item) => {
            return preValue + item.price * item.count;
          }, 0)
          .toFixed(2)
      );
    },
    checkLength() {
      return this.cartList.filter((item) => item.checked).length;
    },
    isSelectAll() {
      if (this.cartList.length === 0) return false;
      //   1.使用filter
      //   return !this.cartList.filter((item) => !item.checked).length;
      //   2.使用find
      return !this.cartList.find((item) => !item.checked);
      //   3.普通遍历
      //   for (let item of this.cartList){
      //    if(!item.checked){
      //      return false
      //    }
      //   }
      //   return ture
    },
  },
  methods: {
    checkClick() {
      if (this.isSelectAll) {
        //全部选中
        this.cartList.forEach((item) => (item.checked = false));
      } else {
        //部分选中或者全不选中
        this.cartList.forEach((item) => (item.checked = true));
      }
    },
  },
};
</script>

<style scoped>
.bottom-bar {
  position: absolute;
  bottom: 49px;
  display: flex;

  width: 100%;
  height: 40px;

  line-height: 40px;
  background-color: #eee;
  font-size: 14px;
}
.check-content {
  display: flex;
  align-items: center;
  margin-left: 10px;
  width: 60px;
}
.check-button {
  line-height: 16px;
}
.price {
  margin-left: 20px;
  flex: 1;
}
.calculate {
  width: 90px;
  background: red;
  color: #fff;
  text-align: center;
}
</style>
