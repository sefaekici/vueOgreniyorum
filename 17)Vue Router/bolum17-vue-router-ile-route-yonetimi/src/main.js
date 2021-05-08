import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from "./routes";

Vue.use(VueRouter);


const router=new VueRouter({
  //routes:routes
  routes,
  //history ve hash modları vardır hash modunda router modunu belirten # işareti bulunurken history de bulunmaz.
  mode:"history",
  //hash gönderilerek istenilen yerde sayfanın başlaması sağlanmıştır
  scrollBehavior(to,from,savedPosition){
    if(to.hash){
      return{
        selector:to.hash
      }
    }
  }
});

//Her route işleminde çalışır.
router.beforeEach((to,from,next)=>{
  console.log("Global olarak kontrol...");


  //next yönlendirmenin olmasını sağlar
  // next(false) yönlendirmeleri engeller next({path}) next({name}) next('/user/') alırsa yönledirme adresleri belirlenir.
  next();
})

new Vue({
  el: '#app',
  //router:router
  router,
  render: h => h(App)
})
