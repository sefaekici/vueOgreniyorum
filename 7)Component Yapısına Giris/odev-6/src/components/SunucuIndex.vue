<template>
  <div class="row">
    <div class="col-xs-12 col-sm-6">
      <ul class="list-group">
        <li
          class="list-group-item"
          v-for="index in 5">
          Sunucu #{{ index }}
        </li>
      </ul>
    </div>
    <div class="col-xs-12 col-sm-6">
      <p>Sunucu Bilgisi güncel değil!!</p>
    </div>
  </div>
</template>


<script>

  export default {
    name: "SunucuIndex.vue"
  }
</script>
