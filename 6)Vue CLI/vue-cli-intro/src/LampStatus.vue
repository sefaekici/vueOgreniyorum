<template>
  <div class="app">
    <h1>Sunucu Durumu:{{status}}</h1>
    <home></home>
    <hr>
  </div>

</template>

<script>
export default {
  data(){
    return {
      status:"Aktif",

    }
  },

}
</script>
