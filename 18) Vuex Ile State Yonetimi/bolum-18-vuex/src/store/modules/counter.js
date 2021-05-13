const state = {
  counter: 0
};

const getters = {
  getDoubleCounter(state) {
    return state.counter * 2;
  },
  getStringCounter(state) {
    return state.counter + " kez tıklandı...";
  },
  getCounter(state) {
    return state.counter;
  }
};

const mutations = {
  increaseCounter(state, payload) {
    state.counter += payload;
  },
  decreaseCounter(state, payload) {
    state.counter -= payload;
  }
};
const actions = {
  increment({ commit }, payload) {
    commit("increaseCounter", payload);
  },

  /*
           parametre almıyor olsaydı bu şekilde tanımlanabilirdi.
           increment({ commit }) {
             commit("increaseCounter");
           }
           ancak bu durumda etkilediği mutations da parametre almamalıdır.
    */
  decrement({ commit }, payload) {
    commit("decreaseCounter", payload);
  },
  //asenkron olarak arttırma işlemi actions yardımı ile yapılmış oldu.
  incAsync({ commit }, payload) {
    setTimeout(() => {
      commit("increaseCounter", payload.value);
    }, payload.time);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
