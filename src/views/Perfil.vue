<template>
  <div class="perfil">
    <h2>{{ titulo }}</h2>
  </div>
</template>

<script>

export default {
  name: 'PerfilView',
  data: function(){
    return {titulo: "Perfil"}
  }
}
</script>

<style scoped>
  .perfil{
    width: 100%;
  }
  h2{
    color:black;
  }
</style>
