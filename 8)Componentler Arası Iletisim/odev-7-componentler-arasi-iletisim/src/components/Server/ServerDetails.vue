<template>
  <div class="col-xs-12 col-sm-6">
    <p>Server Id:{{currentServer.id}}</p>
    <p>Server Status:{{currentServer.status}}</p>
  </div>
</template>
<script>
export default {
  props:["currentServer"],

}
</script>