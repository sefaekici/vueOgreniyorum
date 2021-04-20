<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
        <server-list @click.native="updateCurrentServer(server)" v-for="server in servers" :server="server"></server-list>
    </ul>
  </div>
</template>

<script>
import ServerList from "./ServerList";
export default {
  components:{
    serverList:ServerList,
    currentServer:{}
  },
  data(){
    return{
      servers:[
        {id:1,status:"Başarısız"},
        {id:2,status:"Tehlikede"},
        {id:3,status: "Başarılı"},
        {id:4,status: "Bilgi Alınamadı"},
      ]
    }
  },
  methods:{
    updateCurrentServer(server){
        this.currentServer=server;
        this.$emit("currentServer",this.currentServer);
    },
  }
}
</script>