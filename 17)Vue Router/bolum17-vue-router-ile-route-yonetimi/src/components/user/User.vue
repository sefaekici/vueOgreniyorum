<template>
  <div class="container">
    <router-view></router-view>
    <hr>
    <button class="btn btn-success" @click="navigateHome">Home Component</button>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        //parametreyle gelen veriler $route sayesinde alınır.Burada gelen parametreler içinden id alınmıştır.
        id:this.$route.params.id,
      }
    },
    methods:{
      navigateHome(){
        //Bu üç çeşit push işlemiyle de aynı navigasyon işlemleri yapılabilir.
        this.$router.push("/");
        //this.$router.push({path:"/"});
        //this.$router.push({name:"anasayfa"});
      },
    },
    watch:{
      //watch sayesinde routeın değeri değiştiği anda id değerine yeni gelen değer atanmıştır oldValue ise bir önceki değeri verir
      //watch kullanılmasının nedeni ise componenet create edildikten sonra id değerinin güncellenmesini sağlamaktır.
      "$route"(value,oldValue){
        this.id=value.params.id;
      },
    }
  }
</script>
