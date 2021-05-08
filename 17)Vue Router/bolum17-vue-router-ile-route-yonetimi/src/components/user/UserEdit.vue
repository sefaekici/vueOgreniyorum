<template>
  <div class="container">
    <h3>User Edit Component</h3>
    <hr>
    <p>
      {{id}} - {{name}} - {{lastName}}
    </p>
    <button class="btn btn-warning" @click="saveUser()">Onayla</button>
    <div style="height: 900px"></div>
    <div id="data">Merhabalar Ben Data Id'li Eleman</div>

    <router-link :to="'/user/'+id">Geri Git</router-link>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        id:this.$route.params.id,
        name:this.$route.query.name,
        lastName:this.$route.query.lastName,
        saved:false,
      }
    },
    methods:{
      saveUser(){
        this.saved=true;
        alert("Başarı ile kaydedildi...");
      }
    },
    beforeRouteLeave(to,from,next){

      if(this.saved){
        next();
      }
      else{
        if(confirm("Tüm bilgileriniz kaybolacak.Emin Misiniz?")){
          next();
        }
        else{
          next(false);
        }
      }


    }
  }
</script>
