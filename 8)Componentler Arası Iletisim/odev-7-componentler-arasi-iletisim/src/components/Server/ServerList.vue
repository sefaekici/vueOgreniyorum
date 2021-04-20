<template>
  <div>
    <li

        class="list-group-item"
        v-for="server in servers">

      Sunucu #{{ server.id }},
      Sunucu Durumu #{{server.serverStatus}}

      <button @click="setCurrentServer(server)">Current Server Update</button>

    </li>



  </div>

</template>


<script>
export  default {
  props:["servers"],
  data(){
    return{
      currentServer:{id:null,status:null},
    }
  },
  methods:{
    setCurrentServer(server){
      this.currentServer.id=server.id;
      this.currentServer.status=server.serverStatus;
      this.$emit("currentServer",this.currentServer);
    }
  }
}
</script>