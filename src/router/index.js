import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Cart from "../views/Cart.vue";
import Category from "../views/Category.vue";
import Profile from "../views/Profile.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart
  },
  {
    path: "/category",
    name: "Category",
    component: Category
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  }
];

const router = new VueRouter({
  routes
});

export default router;
