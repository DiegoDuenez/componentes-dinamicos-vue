<template>
  <div class="home">
    <h2>{{ titulo }}</h2>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  data: function(){
    return {titulo: "Home"}
  }
}
</script>

<style scoped>
  .home{
    width: 100%;
  }
  h2{
    color:black;
  }
</style>
