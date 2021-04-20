import Vue from "vue";
import App from "./App.vue";

//global directive tanımlama.
Vue.directive("color", {
  bind(el, binding, vnode) {
    var delay = 0;

    if (binding.modifiers["delay"]) {
      delay = 3000;
    }

    if (binding.modifiers["flash"]) {
      let firsColor = binding.value;
      let secondColor = "#fbbd08";
      let currentColor = firsColor;

      setInterval(function() {
        firsColor = secondColor;
        secondColor = currentColor;
        currentColor = firsColor;

        el.style.backgroundColor = currentColor;
      }, 2000);
    } else {
      setTimeout(function() {
        if (binding.arg === "background") {
          el.style.backgroundColor = binding.value;
        } else {
          el.style.color = binding.value;
        }
      }, delay);
    }
  },
});

new Vue({
  el: "#app",
  render: (h) => h(App),
});
