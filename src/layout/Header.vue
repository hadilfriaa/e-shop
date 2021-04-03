<template>
    <header class="header__main">
        <div class="header__logo">
            <img src="../assets/logo.png" alt="logo">
        </div>
        <div class="header__nav">
            <router-link to="/">Home</router-link> &nbsp;&nbsp;
            <router-link to="/contact">Contact</router-link> &nbsp;&nbsp;
            <router-link to="/about">About</router-link>|
             <router-link to="/shop">Shop</router-link> |
            <router-link to="/account">Mon compte</router-link> |
            <router-link to="/sign">s'inscrire</router-link> |
            <router-link to="/login">Connexion</router-link> |
            <router-link to="/cart">Mon panier</router-link> |
            <router-link to="/dashboard">Dashboard</router-link> |
            <router-link to="/favoris">Favoris</router-link> |


          <!--  <div v-if="user.isAdmin == true">
               
            </div> -->

        </div>
    </header>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>