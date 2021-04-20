<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <server-list  v-for="server in servers" :server="server" @click.native="updateCurrentServer(server)"  ></server-list>
    </ul>
  </div>
</template>

<script>
import {eventBus} from "../../main";
import ServerList from "./ServerList";
export  default {
  data(){
    return{
      servers:[
        {id:1,status:"Başarılı"},
        {id:2,status:"Başarısız"},
        {id:3,status:"Tehlikeli"},
        {id:4,status:"Bilinmiyor"},
        {id:5,status:"Tehlikeli"},
        {id:6,status:"Riskli"},
      ],
      currentServer:{},
    }
  },
  methods:{
    updateCurrentServer(server){
      this.currentServer=server;

      eventBus.$emit("currentServer",this.currentServer);
    },
  },
  components:{
    serverList:ServerList,
  },

}
</script>