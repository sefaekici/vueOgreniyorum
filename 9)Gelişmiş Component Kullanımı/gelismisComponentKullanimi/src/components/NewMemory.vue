<template>
  <div>
    <h1>Yeni Anı Componenti....</h1>
    <p>{{counter}}</p>
    <button @click="counter++">Arttır</button>
  </div>
</template>


<script>
export default {
  data(){
    return{
      counter:0,
    }
  },
  /*Activeted ve deactiveted hookları keep-alive sayesinde kullanılır.Destroy hookunun devreden çıkmasından dolayı
  ona muadil işlemler bu sayede yapılır.
  */
  activated() {
    console.log("Component Aktif Edildi...");
  },
  deactivated() {
    console.log("Component Deactif Edildi...");
  }

}
</script>
