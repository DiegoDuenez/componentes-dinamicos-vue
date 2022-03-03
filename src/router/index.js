import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/Home.vue'
import PerfilView from '../views/Perfil.vue'
import  CategoriasView from '../views/Categorias.vue'
import  FavoritosView from '../views/Favoritos.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/categorias',
    name: 'Categorías',
    component: CategoriasView
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component:  PerfilView 
  },
  {
    path: '/favoritos',
    name: 'Favoritos',
    component:  FavoritosView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
