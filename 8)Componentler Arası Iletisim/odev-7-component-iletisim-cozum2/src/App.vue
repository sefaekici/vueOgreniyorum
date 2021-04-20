<template>
  <div class="container">
    <app-header></app-header>
    <hr>
    <div class="row">
      <app-servers @currentServer="currentServer=$event"></app-servers>
      <app-server-details :currentServer="currentServer"></app-server-details>
    </div>
    <hr>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Header from "./components/Common/Header";
  import Footer from "./components/Common/Footer";
  import Servers from "./components/Server/Servers";
  import ServerDetails from "./components/Server/ServerDetails";


  export default {
    data(){
      return {
        currentServer: {},
      }
    },
    components : {
      appHeader : Header,
      appFooter : Footer,
      appServers : Servers,
      appServerDetails : ServerDetails
    }
  }
</script>

<style>

</style>
