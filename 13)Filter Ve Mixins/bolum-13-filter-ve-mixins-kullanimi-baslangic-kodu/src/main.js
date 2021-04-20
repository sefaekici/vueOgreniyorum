import Vue from "vue";
import App from "./App.vue";

Vue.filter("toLowerCaseFilter", (value) => {
  return value.toLowerCase();
});

export const eventBus = new Vue();

new Vue({
  el: "#app",
  render: (h) => h(App),
});
