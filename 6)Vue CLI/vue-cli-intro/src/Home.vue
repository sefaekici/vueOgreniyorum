<template>
  <div class="Home">
    <p>Lamba Durumu: {{lampStatus}}</p>
    <button @click="setLampStatus()">Lambayı Aç/Kapa</button>
  </div>
</template>


<script>
export default {
  data:function (){
    return{
      lampStatus:"Kapalı",
    }
  },
  methods:{
    setLampStatus:function (){
      if(this.lampStatus==="Kapalı"){
        this.lampStatus="Açık";
      }else{
        this.lampStatus="Kapalı";
      }
    },

  }

}


</script>


<style></style>
