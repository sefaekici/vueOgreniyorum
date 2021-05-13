<template>
    <div>
        <button class="btn btn-success" @click="increaseCounter(1)">+Arttır</button>
        <button class="btn btn-danger" @click="decreaseCounter(1)">-Azalt</button>
        <hr>
        <button class="btn btn-success" @click="increment(1)">+Arttır (Action)</button>
        <button class="btn btn-danger" @click="decrement(1)">-Azalt (Action)</button>
        <hr>
        <!--veriler obje olarak da gönderilebilir -->
        <button class="btn btn-success" @click="incAsync({time:3000,value:1})">+Arttır (Async)</button>
        <hr>
        <input type="text" @keyup="asyncSetValue($event.target.value)">
        <br>
        <hr>
        <input type="text" v-model="value">
        <p>{{value}}</p>        
    </div>    
</template>


<script>
import {mapMutations,mapActions} from "vuex"


export default {

    computed:{
        /*bu şekilde oluşturulan computed proprty sayesinde get işlemi yapıldığında içindeki get i kullanır.
        set işlemi yapıldığında set metodunu kullanır.
        */
        value:{
            get(){
                return this.$store.getters.getValue;
            },
            set(payload){
                this.$store.commit("setValue",payload);
            }
        }
    },
    methods:{
        //mapMutations yardımı ile mutationslar maplenebilir.
        ...mapMutations({
            increaseCounter:"increaseCounter",
            decreaseCounter:"decreaseCounter",
            
        }),
        ...mapActions([
            "increment",
            "decrement",
            "incAsync",
            "asyncSetValue"
        ]),
        // //actionlar dispatch yardımı ile çağırılırlar.Async yapılardır.
        // increment(value){
        //     this.$store.dispatch("increment",value);
        // },
        // decrement(value){
        //     this.$store.dispatch("decreament",value);
        // },
        // incrementAsync(value){
        //    this.$store.dispatch("incAsync",value);
        // },


    },
    
}
</script>


