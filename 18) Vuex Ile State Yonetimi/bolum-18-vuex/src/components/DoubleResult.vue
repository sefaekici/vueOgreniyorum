<template>
    <div class=" text-center alert alert-warning w-50">
        <h3 style="color:black;">SAYAÇ:{{getDoubleCounter}}</h3>
        <p style="color:black;">Tıklama:{{getStringCounter}}</p>
    </div>
</template>


<script>
//mapGetters sayesinde her getters için computed yazmamıza gerek kalmaz
import {mapGetters} from "vuex";
export default {
    /*kendi computedlarımızla beraber mapGettersları kullanmak istiyor isek spread operatörlerden yararlanırız.
    mapGetters başına ... nokta koyulur ise problem çözülmüş olur.
    */
    computed:{
        ...mapGetters([
            'getDoubleCounter',
            'getStringCounter',
        ]),
        defaultComputed(){

        },
    }

    //computedlara isimlendirme yapmak istiyorsak mapGetters'ı obje notasyonu ile kullanmalıyız.
    /*computed:mapGetters({
        getCounter:'getDoubleCounter',
        getString:'getStringCounter',
    })*/

}
</script>