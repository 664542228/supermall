<template>
  <div class="recommend">
    <div v-for="item in crecommends">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad" />
        <div>
          <span>{{ item.title }}</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    crecommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    imageLoad() {
      this.$emit("imageLoad");
    },
  },
};
</script>

<style>
.recommend {
  display: flex;
  justify-content: space-evenly;
  border-bottom: 10px solid #eee;
  padding: 5px 0 3px;
  text-align: center;
  font-size: 12px;
}
.recommend img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
  border-radius: 50%;
}
.recommend a {
  text-decoration: none;
  color: inherit;
}
</style>
