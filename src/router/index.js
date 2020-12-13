// import { createRouter, createWebHistory } from "vue-router";
import VueRouter from "vue-router";
import Vue from "vue";
const Home = () => import("views/home/Home");
const Category = () => import("views/category/Category");
const Cart = () => import("views/cart/Cart");
const Profile = () => import("views/profile/Profile");
Vue.use(VueRouter);
const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/category",
    component: Category
  },
  {
    path: "/shopcart",
    component: Cart
  },
  {
    path: "/profile",
    component: Profile
  }
];
const router = new VueRouter({
  // history: routerHistory,
  mode: "history",
  routes
});
export default router;
