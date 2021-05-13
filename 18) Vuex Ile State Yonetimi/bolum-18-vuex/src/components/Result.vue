<template>
    <div class=" text-center alert alert-warning w-50">
        <h3 style="color:black;">SAYAÇ:{{counter}}</h3>
        <p style="color:black;">{{value}}</p>
    </div>
</template>


<script>
import {mapGetters} from "vuex";
export default {
       
    computed:{
        ...mapGetters({
            counter:"getCounter",
            value:"getValue",
        }),
        
    },
    
}
</script>