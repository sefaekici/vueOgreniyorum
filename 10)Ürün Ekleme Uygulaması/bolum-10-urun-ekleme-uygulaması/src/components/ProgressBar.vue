<template>
  <div class="progress">
    <div class="progress-bar bg-info" role="progressbar" :style="{width:progressLength+'%'}" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
      {{productLength}}/10
    </div>
  </div>
</template>


<script>
import {eventBus} from "../main";

export default {
  data:function (){
    return{
      productLength:0,
      progressLength:0,
    }
  },
  created() {
    eventBus.$on("produtsLength",(productLength)=>{
        this.productLength=productLength;
        this.progressLength=productLength*10;
    })
  }
}
</script>