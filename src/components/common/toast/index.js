import Toast from "./Toast.vue";

const obj = {};

obj.install = function(Vue) {
  // 1创建组件构造器
  const toastConstructor = Vue.extend(Toast);
  // 2new一个组件对象
  const toast = new toastConstructor();
  // 3将组件对象挂载到某一个元素上
  toast.$mount(document.createElement("div"));
  // 4toast.$el对应的就是div
  document.body.appendChild(toast.$el);
  Vue.prototype.$toast = toast;
};

export default obj;
