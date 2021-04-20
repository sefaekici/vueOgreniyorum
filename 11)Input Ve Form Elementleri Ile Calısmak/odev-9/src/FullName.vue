<template>
    <div>
        <input class="form-control" type="text"  @input="firstNameFunction($event)" placeholder="Please give your first name">
        <br>
        <input class="form-control" type="text"  @input="lastNameFunction($event)"   placeholder="Please give your last name..">
    </div>
</template>

<script>
export default {
   
    data(){
        return{
            firstName:null,
            lastName:null,
        }
    },


    
    methods:{
        firstNameFunction(e){
            this.firstName=e.target.value;
        },
        lastNameFunction(e){
            this.lastName=e.target.value;
        }
    },
    watch:{
        firstName:function(){
            this.$emit("input",this.firstName+" "+this.lastName);
        },
        lastName:function(){
            this.$emit("input",this.firstName+" "+this.lastName);
        }
    },
}
</script>


<style>

</style>
