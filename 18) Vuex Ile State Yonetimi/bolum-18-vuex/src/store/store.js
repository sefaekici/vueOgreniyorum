import Vue from "vue";
import Vuex from "vuex";
import counter from "./modules/counter";
import * as mutations from "./mutations";
Vue.use(Vuex);

export const store = new Vuex.Store({
  //statelerde datalar tutulur.
  state: {
    value: ""
  },
  //mutationslar veri güncellemek için kullanılırlar.
  mutations,
  //get işlemleri için kullanılırlar.
  getters: {
    getValue(state) {
      return state.value;
    }
  },
  //actionlar mutationlar gibidir ancak asenkron yapılardır bu nedenle genellikle istekler için kullanılırlar
  //actionlar burada ara katmandır dipatch işlemi yapar daha sonradan commit yardımı ile mutationı günceller.
  actions: {
    asyncSetValue({ commit }, payload) {
      setTimeout(() => {
        commit("setValue", payload);
      }, 300);
    }
  },

  modules: {
    counter
  }
});
