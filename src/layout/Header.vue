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
            <router-link to="/favoris">Favoris</router-link> |
            <router-link to="/order">Commande</router-link> |
            <router-link to="/dashboard">Dashboard</router-link> |


        </div>
    </header>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";

export default {
    
    setup () {
        

        return {
            user:{},
        }
    },
    methods: {
      

    }
}
</script>

<style lang="scss" scoped>

</style>