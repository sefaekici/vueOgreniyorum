import Vue from "vue";
import VueRouter from "vue-router";

import Auth from "./pages/auth/Auth.vue";
import About from "./pages/About.vue";
import HomePage from "./pages/Homepage.vue";

import store from "./store";

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: HomePage,
      beforeEnter(to, from, next) {
        if (store.getters.isAuthenticated) {
          next();
        } else {
          next("/auth");
        }
      },
    },

    {
      path: "/about",
      component: About,
      beforeEnter(to, from, next) {
        if (store.getters.isAuthenticated) {
          next();
        } else {
          next("/auth");
        }
      },
    },
    { path: "/auth", component: Auth },
  ],
  mode: "history",
});
