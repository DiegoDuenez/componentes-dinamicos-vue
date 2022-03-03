<template>
    <nav class="navbar">
        <div class="navbar__logo">
            <img src="../../assets/logo.png" alt="logo">
        </div>
        <div class="navbar__links navbar__links--w30">
            <a class="navbar__link" @click="alert(current)">Home</a>
            <a class="navbar__link" @click="current=='PerfilVue'">Perfil</a>
            <a class="navbar__link" @click="current=='CategoriasVue'">Categorías</a>
        </div>
        <div class="navbar__links">
            <input type="search" class="navbar__navigation">
        </div>
        <div class="navbar__links navbar__links--w20 navbar__links--end">
            <i class="fa-solid fa-heart navbar__icon"></i>
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
        background-color: red;
        position: fixed;
    }

    .navbar__links{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        background-color: rgb(51, 255, 0);
        width: 40%;
        justify-content: center;
        gap: 1rem;
    }

    .navbar__links--end{
        justify-content: flex-end;
    }

    .navbar__links--w30{
        width:30%;
        background-color: pink;
    }

    .navbar__links--w20{
        width:20%;
        background-color: rgb(206, 8, 41);
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
        background-color: rgb(38, 0, 255);
        justify-content: center;
        object-fit: contain;
    }

    .navbar__logo img{
        width: 50%;
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
        color: white;
    }

</style>