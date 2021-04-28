<template>
  <div class="container">
    <h1>Maalesef Bilemediniz!!!</h1>
    <button @click="newGame">Yeni Oyun</button>
  </div>
</template>

<script>
export default {
  methods:{
    newGame(){
      this.$emit("isCorrectEvent","appGameCards");
    },

  }
}
</script>

<style scoped>
.container{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: darkred;
}

.container h1{
  text-align: center;
  font-size: 333%;
  color: white;
}
.container button{
  width: 200px;
  background-color: #fff;
  color: darkred;
  height: 50px;
  font-size: 15px;
  border-radius: 10px;
  outline: none;
  transition:all .5s;
}

.container button:hover{
  background-color: lightgreen;
  color: #fff;
  transition:all .5s;
}

</style>