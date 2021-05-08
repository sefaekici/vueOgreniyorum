<template>
  <ul class="nav nav-pills">
    <!--
    active-class attiributesi llink aktif olduğunda çalışıcak olan classları belirler
    exact sayesinde ise path tam uyuştuğu halde active-class daki classlar dahil edilirler.
    -->
    <router-link
        active-class="active"
        exact
        to="/"
        tag="li">
      <a>Home</a>
    </router-link>
    <router-link
        active-class="active"
        to="/user"
        tag="li">
      <a>User</a>
    </router-link>


  </ul>
</template>

<script></script>

<style scoped>
ul{
  margin-top: 2rem;
}
li{
  display: flex;
}
</style>