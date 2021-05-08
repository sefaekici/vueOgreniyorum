<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">

        <router-view name="header-top"></router-view>
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>

        <router-view name="header-bottom"></router-view>

      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header"
export default {
  components:{
    appHeader:Header,
  }
}
</script>

<style>
  .slide-enter-active{
    animation: slide-in .3s ease-out forwards;
  }
  .slide-leave-active{
    animation: slide-out .3s ease-out forwards;
  }
  @keyframes slide-in {
    from{
      transform: translateX(-1000px);
      opacity: 0;
    }
    to{
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes slide-out {
    from{
      transform: translateX(0);
      opacity: 1;
    }
    to{
      transform: translateX(1000px);
      opacity: 0;
    }
  }



</style>
