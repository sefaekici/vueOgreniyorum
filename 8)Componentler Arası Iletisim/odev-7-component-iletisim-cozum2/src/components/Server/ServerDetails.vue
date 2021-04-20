<template>
  <div class="col-xs-12 col-sm-6" v-if="Object.keys(currentServer).length===0">
    <p>Sunucu Bilgisi güncel değil!!</p>
  </div>
  <div class="col-xs-12 col-sm-6" v-else>
    <h3>Server Id:{{currentServer.id}}</h3>
    <p>Server Status:{{currentServer.status}}</p>
    <button @click="updateServerStatus()">Sunucu Durumunu Güncelle</button>
  </div>
</template>
<script>
export default {
  props:["currentServer"],
  methods:{
    updateServerStatus:function (){
      this.currentServer.status="Başarılı";
    }
  }
}
</script>