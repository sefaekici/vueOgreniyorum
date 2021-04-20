<template>
  <div>
      <lamp-status v-for="status in 5"></lamp-status>
  </div>

</template>



<script>
//Componentin dosyasının import edilmesi işlemi.
import LampStatus from "./LampStatus";
export default {
  //Bu dizinde kullanabileceğim componentler böyle tanımlanır.
  components:{
    "lamp-status":LampStatus,
  }
}
</script>





