<template>
  <div id="app">
    <navigation-vue></navigation-vue>
  </div>
</template>

<script>
import NavigationVue from './components/navbar/navbar.vue'


export default {
  name: 'App',
  components: {
    NavigationVue
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
