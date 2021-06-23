import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { router } from "./router";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    //eğer token varsa sayfalara erişim verilecek yoksa verilmeyecek.
    token: "",
    firebaseApiKey: "AIzaSyDdlRdBnQMqaQ12Mllt2mCckne4jE-vTWA",
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    clearToken(state) {
      state.token = "";
    },
  },
  actions: {
    initAuth({ commit, dispatch }) {
      let token = localStorage.getItem("token");
      if (token) {
        let expressionDate = parseInt(localStorage.getItem("expressionDate"));
        let timeNow = new Date().getTime();

        if (timeNow >= expressionDate) {
          dispatch("logout");
        } else {
          commit("setToken", token);
          let timerSecond = parseInt(expressionDate) - timeNow;
          dispatch("setTimeoutTimer", timerSecond);
          router.push("/");
        }
      } else {
        router.push("/auth");
      }
    },
    login({ commit, state, dispatch }, authData) {
      //isUser değişkeni true olduğunda ekranda giriş yap kısmı olucak false ise kayıt ol ekranı gelicek bu nedenle giriş yap ve kayıt ol istekleri bu şelilde if ve else ile ayrıldı.
      if (authData.isUser == true) {
        //return edilmesinin sebebi işlem olduktan sonra bir then daha çalıştırabilmek bu sayede işlemler bittikten sonra yapılabilecek işlemleri then içerisinde halledebiliriz.(örneğin auth.vue içerisinde yer alan onSubmit methodu)
        return axios
          .post(
            " https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDdlRdBnQMqaQ12Mllt2mCckne4jE-vTWA",
            {
              email: authData.user.email,
              password: authData.user.password,
              returnSecureToken: true,
            }
          )
          .then((res) => {
            //token setEdildi.
            commit("setToken", res.data.idToken);
            localStorage.setItem("token", res.data.idToken);
            localStorage.setItem(
              "expirationDate",
              new Date().getTime() + parseInt(res.data.expiresIn * 1000)
            );
            // localStorage.setItem("expirationDate", new Date().getTime() + 5000);
            //expiresIn firebase üzerinden gelir saniye cinsine çevirmek için 1000 ile çarpılır.
            dispatch("setTimeoutTimer", parseInt(res.data.expiresIn * 1000));
            // dispatch("setTimeoutTimer", 10000);
          })
          .catch((err) =>
            alert("Kullanıcı Bulamadı Kullanıcı Adı Ve Şifreni Kontrol et!")
          );
      } else {
        axios
          .post(
            "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDdlRdBnQMqaQ12Mllt2mCckne4jE-vTWA",
            {
              email: authData.user.email,
              password: authData.user.password,
              returnSecureToken: true,
            }
          )
          .then((res) => {
            console.log(res);
          })
          .catch((err) => alert("Kullanıcı Mevcut!"));
      }
    },
    logout({ commit }) {
      commit("clearToken");
      localStorage.removeItem("token");
      localStorage.removeItem("expirationDate");
      router.push("/auth");
    },
    setTimeoutTimer({ dispatch }, expiresIn) {
      setTimeout(() => {
        dispatch("logout");
      }, expiresIn);
    },
  },
  getters: {
    getToken(state) {
      return state.token;
    },
    //kullanıcı giriş yaptığında token oluşacağı için true döner diğer durumlarda false döner.
    isAuthenticated(state) {
      return state.token !== "";
    },
  },
});

export default store;
