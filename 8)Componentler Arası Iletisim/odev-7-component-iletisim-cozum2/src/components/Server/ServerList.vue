<template>
  <div>
    <li class="list-group-item">
      <h3>Server Id:{{server.id}}</h3>
      <p>Server Status: <strong>{{server.status}}</strong> </p>
    </li>
  </div>
</template>


<script>
export  default {
  props:["server"],
}
</script>