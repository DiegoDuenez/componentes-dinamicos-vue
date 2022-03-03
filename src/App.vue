<!--<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-link to="/profile">Profile</router-link>
  </div>
  <router-view/>
</template>-->
<template>
  <!--<div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>-->
  <div> 
    <navigation-vue></navigation-vue>
    <div id="app">
      <router-view />
    </div>
  </div>
  
</template>


<script>
import NavigationVue from './components/navbar/navbar.vue'
export default {
  name: 'App',
  components: {
    NavigationVue,
  },
  data: function(){
  }
}

</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
</style>
