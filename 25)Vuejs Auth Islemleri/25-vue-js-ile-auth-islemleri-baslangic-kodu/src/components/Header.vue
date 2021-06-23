<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow mb-5">
    <router-link class="navbar-brand" to="/auth">Auth İşlemleri</router-link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" tag="li">
          <router-link to="/" class="nav-link">Anasayfa</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">Hakkımda</router-link>
        </li>
      </ul>
      <ul class="navbar-nav my-2 my-lg-0" :class="logoutClass">
        <li class="nav-item">
          <a @click.prevent="logout" class="nav-link" href="#">Çıkış Yap</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
  export default {
    methods: {
      logout() {
        this.$store.dispatch("logout");
        
      }
    },
    computed: {
      logoutClass() {
        return {
          //kullanıcı giriş yaptığı anda çıkış yap butonu görünür olur.
          'd-none': !this.$store.getters.isAuthenticated
        }
      }
    }
  }
</script>
