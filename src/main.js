import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/store";

import toast from "components/common/toast";

require("./mock/mock");
Vue.config.productionTip = false;
//添加时间总线
Vue.prototype.$bus = new Vue();
// 安装toast插件
Vue.use(toast);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
