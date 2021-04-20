<template>
  <div class="container">
    <div class="col-md-6 col-md-offset-3">
      <h3>Directive Sınavı</h3>
      <!-- Soru -->
      <!-- Event'leri dinleyecek v-on gibi çalışan bir Directive geliştiriniz. -->

      <p>{{count}}</p>
      <div v-on-custom:mousemove="denemeFonksiyon">Üzerinde Gezinince Sayı Artar....</div>
      <br>
      <button v-on-custom:click="denemeFonksiyon">Arttır</button>
    </div>
  </div>
</template>

<script>
export default {
  directives:{
    "on-custom":{
      bind(el,binding,vnode){
          if(binding.arg==="click"){
             el.addEventListener("click",binding.value);
          }
          else if(binding.arg==="mousemove"){
            el.addEventListener("mousemove",binding.value);
          }
      },
    },
  },
  data(){
    return{
      count:0,
    }
  },
  methods:{
    denemeFonksiyon(){
      this.count+=1;
    },

  }
}
</script>

<style>
</style>
