<template>
  <div class="categorias">
    <h2>{{ titulo }}</h2>
  </div>
</template>

<script>

export default {
  name: 'CategoriasView',
  data: function(){
    return {titulo: "Categorías"}
  }
}
</script>

<style scoped>
  .categorias{
    width: 100%;
  }
  h2{
    color:black;
  }
</style>
