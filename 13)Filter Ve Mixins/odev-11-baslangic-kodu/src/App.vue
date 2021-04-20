<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <!-- Soru 1 -->
        <!-- Girmiş olduğunuz yazıyı tersten yazacak bir Filter tanımı yapınız ve bunu <p> içerisinde uygulayınız -->
        
        <div id="soru1" style="margin-top:1rem">
           <input type="text" v-model="message">
           <p>{{message | getReverse}}</p>
        </div>

       
        <!-- Soru 2 -->
        <!-- Global bir Filter tanımlayarak size kelime sayısını ve kelimeyi veren bir Filter tanımı yapınız -->
        <!-- Örneğin : "videosinif.com" => videosinif.com (14) Şeklinde çıktı vermelidir -->

        <div id="soru2">
           <p>{{soru2 |getWordNumber}}</p>
        </div>
       

        <!-- Soru 3 -->
        <!-- Soru 1 ve 2 deki uygulamaların aynısını Computed Property kullanarak yapınız -->

        <div id="soru3">
            <input type="text" v-model="message2">
            <p>{{getReverse2}}</p>
            <p>{{getWordNumber2}}</p>

        </div>


        <!-- Soru 4 -->
        <!-- 3.Uygulamadaki Computed Property'leri bir Mixin aracılığı ile tanımlayarak tekrardan kodlarınızı düzenleyiniz-->
        
      </div>
    </div>
  </div>
</template>
<script>
  import {computedMixin} from "./computedMixin";
  export default {
    mixins:[computedMixin],
    data(){
      return{
        message:"",
        soru2:"videosinif.com",
        
      }
    },
    filters:{
      getReverse(value){
        return value.split("").reverse().join("");
      }
    },
   
  }
</script>
<style>

</style>
