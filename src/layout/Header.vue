<template>
    <header class="header__main">
        <nav class="navbar">
            <div class="navbar-container">
                <img src="../assets/logo.png" alt="logo">
                
                <ul class="nav-menu">
                    <li class="nav-item">
                        <router-link class="nav-router" to="/">Home</router-link> 
                    </li>

                    <li class="nav-item">
                        <router-link class="nav-router" to="/contact">Contact</router-link> 
                    </li>

                    <li class="nav-item">
                        <router-link class="nav-router" to="/about">About</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link class="nav-router" to="/shop">Shop</router-link> 
                    </li>
                    <li class="nav-item" v-if="IsAdmin == true">
                        <router-link class="nav-router" to="/dashboard">Dashboard</router-link> 
                    </li>

                    <li class="nav-item" v-if="isLogged == true">
                        <router-link class="nav-router" to="/account">Mon compte</router-link> 
                    </li>

                    <li class="nav-item" v-if="isLogged == false">
                        <router-link class="nav-router" to="/login">Connexion</router-link> 
                    </li>
                        
                    <li class="nav-item">
                        <router-link class="nav-router" to="/cart">Mon panier</router-link> 
                    </li>

                    <li class="nav-item" v-if="isLogged == true">
                        <router-link class="nav-router" to="/favoris">Favoris</router-link> 
                    </li>

                    <li class="nav-item" v-if="isLogged == true">
                        <router-link class="nav-router" to="/order">Commande</router-link> 
                    </li>
                </ul>
            </div>
        </nav>

    </header>
</template>

<script>
import ApiUsers from '../mixins/ApiUsers';

export default {
    
    components: {
        },
        data: function() {
            return {
                user:{},
                isLogged:false,
                decodedToken: "",
                IsAdmin:false
            }
        },
    mixins:[ApiUsers],
    methods: {
      

    },
     created() {
            const token = localStorage.getItem('token');
            if(token) {
                this.getUser()
                .then(data=>{
                    this.isLogged = true;
                    this.user = data;
                    this.IsAdmin = data.IsAdmin;
                })
                .catch(err => console.log(err))
                console.log("je suis dataaaa "+this.data);
            }
        }
}
</script>

<style lang="scss" scoped>

.navbar {
  background-color: #292929;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
}
.navbar-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 100%;
}
.nav-menu {
  display: grid;
  grid-template-columns: repeat(9, auto);
  grid-gap: 10px;
  list-style: none;
  text-align: center;
  width: 60vw;
  justify-content: end;
  margin-right: 2rem;
}
.nav-item {
  height: 60px;
}

.nav-router {
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 0.5rem;
  height: 100%;
}

.nav-item:hover {
  border-bottom: 4px solid #B3EEFF;
  transition: all 0.2s ease-out;
}



</style>