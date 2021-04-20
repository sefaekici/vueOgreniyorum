<template>
  <div class="wcol-md-6">
    <h3>Child Component 1</h3>
    <p>Ben User.vue isimli Parent Component'in içerisindeki bir Child componentim</p>
    <p>Kullanıcı Adı:{{postTitle}}</p>
    <p>Ters Kullanıcı Adı:{{switchName()}}</p>
    <p>Kullanıcı Yaşı:{{personAge}}</p>
    <button @click="sendToParent()">Parenta Gönder</button>
  </div>
</template>
<script>
export default{
    props:{
      postTitle:{
        type:String, //gelicek propsun tipini belirler birden fazla olabilir. String,Array gibi
        default:"Aleyna Dikal", //eğer değer gelmez ise onun yerine kullanılıcak default değeri belirler
        //required:true,-Değerin gelmesinin zorunlu olup olmadığını belirtir.

      },
      personAge:{
        type:Number,
        default: 0,
      }
    },
    data:function(){
        return{
          childName:"Sefa Ekici",
        }
    },
    methods:{
      //propslar sanki veriler data içierisindeymiş gibi kullanılırlar.
      switchName(){
        return this.postTitle.split("").reverse().join("");
      },
      sendToParent(){
        //$emit parenta event gönderir.
        this.$emit("data",this.childName);
      }

    },
}
</script>
<style scoped>
  div {
    background-color: lightcoral;
    padding: 20px;
    border: 1px solid #666;
    display: inline-block;
  }
</style>
