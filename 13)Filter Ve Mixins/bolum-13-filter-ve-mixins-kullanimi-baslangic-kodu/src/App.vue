<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Filter ve Mixins</h3>

        <!--filter kullanım işlemi aşağıda message dan sonra koyulan | işareti ile toUpperCaseFunctionnın message üzerinde 
        işlem yapıp sonucunu döndürmesi sağlanmıştır
         -->
        <!--burada bulanan işlem önce uppercase i sonra da lowecase i çalıştığından bütün harfler küçülür-->
        <p>Chain Filter:{{message | toUpperCaseFilter | toLowerCaseFilter}}</p>



        <p>Upper Case Filter(Lokal):{{message | toUpperCaseFilter}}</p>
        <p>Lower Case Filter(Global):{{message | toLowerCaseFilter}}</p>



        <hr>
        <input type="text" v-model="searchText">  

        <ul>
          <!--filtrelenmiş elemanlar içinde gezilerek sadece ekranda filtrelenmiş elemanların gözükmesi sağlanmıştır.-->
          <li v-for="product in filterTheList" :key="product">
            {{product}}
          </li>
        </ul>



        <filterList></filterList>  

      </div>
    </div>
  </div>
</template>

<script>
import FilterList from "./FilterList";
import {productMixin} from "./productMixin";
export default {
  mixins:[productMixin],
  components:{
    filterList:FilterList,
  },
  data(){
    return{
      message:"merhabalar videoSinif | Ben sefa ekici",
    }
  },
  filters:{
    toUpperCaseFilter:function(value){
      return value.toUpperCase();
    },
  },

};
</script>

<style></style>
