<template>

    <nav class="navbar">

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
        justify-content: space-between;
    }

    .navbar__links{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(51, 255, 0);

    }
    
    .navbar__logo{
        display: flex;
        width: 30%;
        height: 100%;
        background-color: rgb(38, 0, 255);
    }

</style>