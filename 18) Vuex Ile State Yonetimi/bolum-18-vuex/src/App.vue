<template>
  <div class="app mt-3">
    <h1 class="text-center">VUEX</h1>
    <hr>
    <appResult></appResult>
    <hr>
    <appDoubleResult></appDoubleResult>
    <hr>
    <appCounter></appCounter>
  </div>
</template>

<script>
import Counter from "./components/Counter"
import Result from "./components/Result"
import DoubleResult from "./components/DoubleResult"
export default {
  components:{
    appCounter:Counter,
    appResult:Result,
    appDoubleResult:DoubleResult,
  },
  data() {
    return{
      counter:0,
    }
  },
  watch:{
    counter:function(){
      if(this.counter<0){
        this.counter=0;
      }
    }
  }
};
</script>

<style>
html,body{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.app{
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
