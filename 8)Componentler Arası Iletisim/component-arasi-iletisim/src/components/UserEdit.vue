<template>
  <div class="col-md-s6">
    <h3>Child Component 2</h3>
    <p>Ben User.vue isimli Parent Component'in içerisindeki bir diğer Child componentim</p>
    <button @click="updatePersonAge()">Yaşı Güncelle</button>
  </div>
</template>
<script>
export default {
  props:{
    personAge:{
      type:Number,
      default:0,
    }
  },
  methods:{
    updatePersonAge:function (){
      this.personAge=Math.ceil(Math.random()*100)
      this.$emit("personAge",this.personAge);
    },
  }
}

</script>

<style scoped>
  div {
    background-color: lightgoldenrodyellow;
    padding: 20px;
    border: 1px solid #666;
    display: inline-block;
  }
</style>
