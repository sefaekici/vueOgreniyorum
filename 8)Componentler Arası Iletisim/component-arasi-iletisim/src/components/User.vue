<template>
  <div class="container">
    <h1>Parent Component (User)</h1>
    <p>Burası parent component yani herşeyin import edildiği component :)</p>
    <button @click="changeName()">Adımı Değiştir</button>
    <p>Childdan Gelen Veri:{{childData}}</p>
    <hr>
    <div class="row">
      <app-user-detail @data="childData=$event" :postTitle="title" :personAge="personAge" ></app-user-detail>
      <app-user-edit :personAge="personAge"  @personAge="personAge=$event"></app-user-edit>
    </div>
  </div>
</template>


<script>
  import UserDetail from "./UserDetail";
  import UserEdit from "./UserEdit";
  export default {
    components : {
      appUserDetail : UserDetail,
      appUserEdit : UserEdit,
    },
    data:function(){
        return{
            title:"Gökhan",
            childData:"",
            personAge:0,
        }
    },
    methods:{
        changeName(){
            this.title="Sefa Ekici";

        },
    }
  }
</script>

<style>
  div.container{
    margin-top: 30px;
    padding: 20px 40px;
    background-color: #6a8d99;
    border: 1px solid #666;
  }
  div.row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
