<template>
  <div>
    <li class="list-group-item">
     <h4>Server ID:{{server.id}}</h4>
      <p>Server Durumu:{{server.status}}</p>
    </li>

  </div>

</template>


<script>


export default {
props:["server"],

}
</script>


