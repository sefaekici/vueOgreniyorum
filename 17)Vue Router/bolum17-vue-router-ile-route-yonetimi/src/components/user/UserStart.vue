<template>
  <div class="container">
    <h3>User Start Component</h3>
    <hr>
    <ul class="list-group">
      <router-link
      tag="li"
      class="list-group-item"
      to="/user/1"
      >
        <a>User1</a>
      </router-link>

      <router-link
          tag="li"
          class="list-group-item"
          to="/user/2"
      >
        <a>User2</a>
      </router-link>
      <router-link
          tag="li"
          class="list-group-item"
          to="/user/3"
      >
        <a>User3</a>
      </router-link>
      <router-link
          tag="li"
          class="list-group-item"
          to="/user/4"
      >
        <a>User4</a>
      </router-link>


    </ul>

  </div>
</template>
<script>

  export default {
    //Component Seviyesinde Route Guard
    beforeRouteEnter(to,from,next){
      console.log("User Starta Girildi...");
      console.log("Componenet Seviyesinde Route Guard");
      next();
    }
  }
</script>
