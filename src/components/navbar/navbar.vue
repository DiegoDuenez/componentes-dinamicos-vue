<template>
    <nav class="navbar">
        <div class="navbar__logo">
            <img src="../../assets/Iteravia.png" alt="logo">
        </div>
        <div class="navbar__links navbar__links--w30">
            <router-link class="navbar__link" to="/">Home</router-link> 
            <router-link class="navbar__link" to="/categorias">About</router-link>
            <router-link class="navbar__link" to="/perfil">Profile</router-link>
            
        </div>
        <div class="navbar__links">
            <input type="search" class="navbar__navigation">
        </div>
        <div class="navbar__links navbar__links--w20 navbar__links--end">
            <router-link to="/favoritos"> <i class="fa-solid fa-heart navbar__icon"></i></router-link>
        </div>
    </nav>    
</template>


<script>
export default {
  name: 'NavigationVue'
}
</script>


<style scoped>

    .navbar{
        display: flex;
        width: 100%;
        height: 5rem;
        background-color: rgb(243, 243, 243);
        padding: 1rem 0 1rem 0;
    }

    .navbar__links{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 40%;
        justify-content: center;
        gap: 1rem;
    }

    .navbar__links--end{
        justify-content: flex-end;
    }

    .navbar__links--w30{
        width:30%;
    }

    .navbar__links--w20{
        width:20%;
        padding-right: 3rem;
    }

    .navbar__navigation{
        background-color: white;
        width: 100%;
        height: 3rem;
        border: 1px solid gray;
        border-radius: 0.5rem;
        padding-left: 10px;
    }
    
    .navbar__logo{
        display: flex;
        width: 10%;
        height: 100%;
        justify-content: center;
        object-fit: contain;
    }

    .navbar__logo img{
        width: 70%;
    }

    .navbar__link{
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1.5rem;
        outline: none;
        color: black;
        text-decoration: none;
    }

    .navbar__icon{
        font-size: 1.5rem;
        color: rgb(158, 158, 158);
    }

</style>