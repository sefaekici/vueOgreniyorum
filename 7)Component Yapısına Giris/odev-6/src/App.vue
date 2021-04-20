<template>
  <div class="container">
    <sunucu-durumu></sunucu-durumu>
    <hr>
    <sunucu-index></sunucu-index>
    <hr>
    <footer></footer>
  </div>
</template>

<script>
import SunucuDurumu  from "./components/SunucuDurumu";
import SunucuIndex from "./components/SunucuIndex";
import Footer from "./components/Footer";
export  default {
  components:{
    "sunucu-durumu":SunucuDurumu,
    "sunucu-index":SunucuIndex,
    "footer":Footer,
  }
}
</script>

<style>

</style>
