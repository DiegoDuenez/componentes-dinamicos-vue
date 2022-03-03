<template>
  <div class="favoritos">
    <h2>{{ titulo }}</h2>
  </div>
</template>

<script>

export default {
  name: 'FavoritosView',
  data: function(){
    return {titulo: "Favoritos"}
  }
}
</script>

<style scoped>
  .favoritos{
    width: 100%;
  }
  h2{
    color:black;
  }
</style>
