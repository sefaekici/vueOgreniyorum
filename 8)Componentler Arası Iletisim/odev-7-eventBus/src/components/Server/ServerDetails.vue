<template>
  <div class="col-xs-12 col-sm-6" v-if="Object.keys(currentServer).length">
    <h3>Mevcut Server:{{currentServer.id}}</h3>
    <p>Mevcut Durum:{{currentServer.status}}</p>
    <button @click="currentServer.status='Başarılı'">Durum Güncelle</button>
  </div>
  <div class="col-xs-12 col-sm-6" v-else>
    <h3>Mevcut Server:{{currentServer.id}}</h3>
    <p>Mevcut Durum:{{currentServer.status}}</p>
    <button @click="currentServer.status='Başarılı'">Durum Güncelle</button>
  </div>
</template>
<script>
import {eventBus} from "../../main";

export default {
  data(){
    return{
      currentServer:{},
    }
  },
  //component yaratıldığı anda çalışır.
  created() {
    //event bus bir evvent alır ve de bir callback yardımı ile bu gelen eventla napılacağı belirtilir.
    eventBus.$on("currentServer",(data)=>{
      this.currentServer=data;
    });
  },
}
</script>