<template>
  <div id="category">
    <nav-bar class="nav-bar"><div slot="center">商品分类</div></nav-bar>
    <div class="content">
      <tab-menu :categories="categories" @selectItem="selectItem"></tab-menu>

      <scroll id="tab-content" ref="scroll">
        <div>
          <tab-control
            :titles="['综合', '新品', '热销']"
            @tabClick="tabClick"
          ></tab-control>
          <tab-content-detail :category-detail="showCategoryDetail"></tab-content-detail>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
import NavBar from "common/navbar/NavBar";

import TabMenu from "./childComps/TabMenu";
import TabControl from "components/contents/tabControl/TabControl";
import Scroll from "common/scroll/Scroll";
import TabContentDetail from "./childComps/TabContentDetail";

import { getCategory, getCategoryDetail } from "network/category";
import { POP, SELL, NEW } from "@/common/const";
import { tabControlMixin, itemListenerMixin } from "@/common/mixin";

export default {
  name: "Category",
  components: {
    NavBar,
    TabMenu,
    TabControl,
    Scroll,
    TabContentDetail,
  },
  mixins: [tabControlMixin, itemListenerMixin],
  data() {
    return {
      categories: [],
      categoryData: [
        {
          pop: [],
        },
      ],
      currentlistIndex: 0,
    };
  },
  created() {
    // 1.请求分类数据
    this._getCategory();
  },
  deactivated() {
    this.$bus.$off("ImageLoad", this.itemImgListener);
  },
  computed: {
    showCategoryDetail() {
      return this.categoryData[this.currentlistIndex][this.currentType];
    },
  },
  methods: {
    _getCategory() {
      getCategory().then((res) => {
        // 1.获取分类数据
        this.categories = res.data.category.list;
        // // 2.初始化每个类别的子数据
        for (let i = 0; i < this.categories.length; i++) {
          this.categoryData[i] = {
            pop: [],
            new: [],
            sell: [],
          };
        }
        // 3.请求第一个分类的数据
        this._getSubcategories(0);
      });
    },
    _getSubcategories(index) {
      this.currentlistIndex = index;

      this._getCategoryDetail(POP);
      this._getCategoryDetail(SELL);
      this._getCategoryDetail(NEW);
    },
    _getCategoryDetail(type) {
      // 1.获取请求的miniWallkey
      const miniWallkey = this.categories[this.currentlistIndex].miniWallkey;
      // 2.发送请求,传入miniWallkey和type
      getCategoryDetail(miniWallkey, type).then((res) => {
        // 3.将获取的数据保存下来
        this.categoryData[this.currentlistIndex][type] = res;
        this.categoryData = { ...this.categoryData };
      });
    },
    /**
     * 事件响应相关的方法
     */
    selectItem(index) {
      this._getSubcategories(index);
    },
  },
};
</script>

<style scoped>
#category {
  height: 100vh;
}

.nav-bar {
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
}

.content {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;

  display: flex;
}

#tab-content {
  height: 100%;
  flex: 1;
  overflow: hidden;
}
</style>
