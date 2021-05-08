<template>
  <div class="container">
    <h3>User Detail Component</h3>
    <hr>
    <p>User ID:{{userId}}</p>
   <!-- <router-link tag="button" :to="'/user/'+id+'/edit'"  class="btn btn-primary">
       {{id}} ID'li Kullanıcıyı Düzenle
    </router-link>  -->
    <router-link :to="navigationLink" tag="button" class="btn btn-primary">{{userId}} ID'li Kullanıyı Düzenle</router-link>

    <hr>
    <button @click="navigateUserStart" class="btn btn-primary">User Start Component</button>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        userId:this.$route.params.id,
        navigationLink:{
          name:'userEdit',params:{id:this.$route.params.id},
          query:{name:'sefa',lastName:'ekici'},
          hash:'#data',
        },
      }
    },
    methods:{
      navigateUserStart(){
        this.$router.push("/user");
      }
    }

  }
</script>
