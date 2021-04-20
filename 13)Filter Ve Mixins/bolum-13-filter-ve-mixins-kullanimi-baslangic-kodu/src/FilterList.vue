<template>
    <div>
         <hr>
        <input type="text" v-model="searchText">  

        <ul>
          <!--filtrelenmiş elemanlar içinde gezilerek sadece ekranda filtrelenmiş elemanların gözükmesi sağlanmıştır.-->
          <li v-for="product in filterTheList" :key="product">
            {{product}}
          </li>
        </ul>
    </div>
</template>

<script>
import {productMixin} from "./productMixin";
export default {
    //mixin tanımlama işlemi değişkenler direkt olarak sanki instance içinde tanımlanmış gibi çağırılabilir yukarıda olduğu gibi.
    mixins:[productMixin],

};
</script>

<style></style>
