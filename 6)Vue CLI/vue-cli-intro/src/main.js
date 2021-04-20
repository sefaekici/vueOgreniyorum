import Vue from 'vue'
import App from './App.vue'
import Home from "./Home";

//component yaratma işlemi bu sayede bütün componentlar ile kullanılabilir(Global Component Tanımlama).
Vue.component("home",Home);

new Vue({
  el: '#app',
  render: h => h(App)
})
