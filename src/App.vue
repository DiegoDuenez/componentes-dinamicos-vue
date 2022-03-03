
<template>
  <div id="app">
    <navigation-vue></navigation-vue>


    <home-vue v-if="current === 'HomeVue'"></home-vue>
    <categorias-vue v-if="current === 'CategoriasVue'"></categorias-vue>
    <perfil-vue v-if="current === 'PerfilVue'"></perfil-vue>



    <!--<div>
        <keep-alive>
          <component v-bind:is="current"></component>
        </keep-alive>
    </div>-->
  </div>
  
</template>

<script>
import NavigationVue from './components/navbar/navbar.vue'
import HomeVue from './components/home/home.vue'
import CategoriasVue from './components/categorias/categorias.vue'
import PerfilVue from './components/perfil/perfil.vue'



export default {
  name: 'App',
  components: {
    NavigationVue,
    HomeVue,
    CategoriasVue,
    PerfilVue
  },
  data: function(){
    return {current: 'HomeVue'}
  }
}
</script>

<style>

  body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    
  }
</style>
