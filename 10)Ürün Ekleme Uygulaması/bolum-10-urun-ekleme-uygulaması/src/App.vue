<template>
  <div class="container">
    <h1 class="text-center">Ürün Ekleme Uygulaması</h1>
    <hr>
    <add-product></add-product>
    <br><br>
    <app-progress></app-progress>
    <br><br>
    <products></products>

  </div>


</template>

<script>
  import AddProduct from "./components/AddProduct";
  import ProgressBar from "./components/ProgressBar";
  import Products from "./components/Products";
  export default {
    components:{
      addProduct:AddProduct,
      appProgress:ProgressBar,
      products:Products,
    },
    data() {
      return {
        imageList: [],

      }
    },
    methods: {

    }
  }
</script>

<style>
  body {
    background-color: aliceblue;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .card{
    margin-right: 5px;
    margin-bottom: 5px;
  }

  .card:last-child{
    margin-right: 0px;
  }

  .col-md-2{
    max-width: 15.666667%!important;
  }

  .product-container{
    margin-left: 15px;
  }

</style>

