<template>
  <div class="param-info" v-if="Object.keys(paramInfo.length !== 0)">
    <table v-for="(tables, index) in paramInfo.tables" class="info-size" :key="index">
      <tr v-for="(tr, indey) in tables" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">{{ td }}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(info, index) in paramInfo.set" :key="index">
        <td
          v-for="(td, indey) in info"
          :key="indey"
          :class="{ 'set-value': indey === 1, 'set-key': indey === 0 }"
        >
          {{ td }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "DetailParamsInfo",
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.param-info {
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
}
.param-info table {
  width: 100%;
}
.param-info table tr {
  height: 42px;
}
.param-info table tr td {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.set-key {
  width: 95px;
}
.info-param {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
.set-value {
  color: #eb4868;
}
</style>
