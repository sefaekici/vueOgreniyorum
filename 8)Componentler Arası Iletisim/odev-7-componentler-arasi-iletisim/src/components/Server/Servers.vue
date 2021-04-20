<template>
  <div class="col-xs-12 col-sm-6">

    <ul class="list-group">
      <server-list @currentServer="currentServer=$event" :servers="servers"></server-list>
    </ul>

  </div>
</template>

<script>
import ServerList from "./ServerList";

export  default {

  data:function (){
    return{
      servers:[
        {id:1,serverStatus:"Tehlikede"},
        {id:2,serverStatus:"Stabil"},
        {id:3,serverStatus:"Bilinmiyor"},
        {id:4,serverStatus:"Stabil"},
        {id:5,serverStatus:"Tehlikede"},
      ],
      currentServer:{},
    }
  },
  methods:{

  },
  watch:{
    currentServer:function (){
      this.$emit("currentServer",this.currentServer);
    }
  },
  components:{
    serverList:ServerList,
  }
}
</script>