import Vue from 'vue'
import App from './App.vue'
import vueResource from "vue-resource";

//Global olarak kullanmak istediğimiz kütüphaneler Vue.use() içerisine yazılır ancak önce import edilir.
Vue.use(vueResource);


//Bu belirtilen değişken sayesinde global olarak root belirlenmiştir isteklerde tekrardan kaynağın belirtilmesine gerek yoktur.
Vue.http.options.root="https://vuejs-vue-resource-3a466-default-rtdb.firebaseio.com";

//İnterceptorslar yardımı ile yapılan istekler sırasında isteklere müdahele edilebilir.Global olarak bütün projeyi etkiler
Vue.http.interceptors.push((request,next)=>{
  //Örneğin aşapıda yapılan işlem ile eğer method türü post ise bunu put olarak güncelle denmiştir.
  /*if(request.method==="POST"){
    request.method="PUT";
  }
  next();*/

  //response anında işlemlere müdahale etmeyi sağlar.
  /*next((response)=>{
    console.log(response);
  });*/

});



new Vue({
  el: '#app',
  render: h => h(App)
})
