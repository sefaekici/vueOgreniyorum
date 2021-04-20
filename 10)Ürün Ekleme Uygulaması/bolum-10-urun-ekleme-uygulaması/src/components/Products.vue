<template>
  <div v-if="products.length>0" >
    <h3>Eklenen Ürünler Listesi</h3>
    <hr>
    <div class="row product-container" >

      <product v-for="product in products">
        <img class="card-img-top" :src="product.selectedImage" :alt="product.productName">
        <div class="card-body">
          <h5 class="card-title" style="text-align: center">{{product.productName}}</h5>
          <small>
            <strong>Adet : </strong> {{product.productQuentity}}
          </small>
          <br>
          <small>
            <strong>Fiyat : </strong> {{product.productPrice}}
          </small>
          <br>
          <small>
            <strong>Tutar : </strong> {{product.productTotalPrice}}
          </small>
        </div>
      </product>
    </div>



  </div>

</template>


<script>
import Product from "./Product";
import {eventBus} from "../main";

export default {
  components:{
    product:Product,

  },
  data(){
    return{
      products:[],
    }
  },
  created() {
    eventBus.$on("productAdded",(productData)=>{
      if(this.products.length<10){
        this.products.push(productData);
        eventBus.$emit("produtsLength",this.products.length);
      }
      else{
        alert("Daha fazla ürün ekleyemezsiniz...");
      }

    })
  }
}
</script>


<style scoped>

</style>