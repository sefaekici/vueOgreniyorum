<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Vue-Resource</h3>
        <div class="form-group">
          <input type="text" class="form-control" v-model="userName">
          <br>
          <button class="btn btn-primary" @click="submitUserName">Kaydet</button>
          <button class="btn btn-success" @click="getUsersFromFirebase">Getir</button>
        </div>

        <ul class="list-group">
          <li class="list-group-item" v-for="(value,key) in users">
            <span :key="key">{{value.userName}} <button class="btn btn-xs btn-danger" @click="deleteItem(key)">X</button></span>
          </li>

        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
//https://github.com/pagekit/vue-resource -vueresource:custom resource için creating resource bölümüne bakabilirsin.
  data(){
    return{
      userName:null,
      users:[],
      resource:{},
    }
  },
  methods:{
    //post metodu
    submitUserName(){
        this.$http.post("https://vuejs-vue-resource-3a466-default-rtdb.firebaseio.com/users.json",{userName:this.userName})
          .then((response)=>{

          })
        this.userName="";

        //this.resource.kaydet({},{userName:this.userName});

    },
    //get methodu:verileri veri tabanından getirir.
    getUsersFromFirebase(){
      this.$http.get("https://vuejs-vue-resource-3a466-default-rtdb.firebaseio.com/users.json")
          .then(response=>{
            return response.json();
          })
          .then(data=>{
              this.users=data;
              console.log(data);
              console.log("Users:",this.users);
          })
    },
    deleteItem(key){
        this.$http.delete("https://vuejs-vue-resource-3a466-default-rtdb.firebaseio.com/users/"+key+".json")
          .then(response=>{
            console.log(response);
          });

    },
    created() {
      const customActions={
        kaydet:{method:"POST",url:"users.json"}
      };
      //burada yer alan resource direkt kaydet ismi ile kullanılabilir submit işlemini yapan fonksiyona bakılabilir.
      this.resource=this.$resource("users.json",{},customActions)

    }


  },


}
</script>

<style>
</style>
