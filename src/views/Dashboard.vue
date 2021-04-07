<template>
    <div class="dash--admin">
       
        <TitlePage title="Bienvenue sur le dashboard Admin"/>
        <div class="user">
            <UsersGrid :usersArray="usersFromApi" />
            <router-link :to="{name: 'SignAd'}">
                <button class="btn btn-black">
                    Créer un utilisateur
                </button>
            </router-link>
        </div>
        <div class="product">
            <div class="product__content" v-if="productItem">
                <ProductsGridAd :productsArray="productsFromApi"/> 
            </div>
            <router-link :to="{name: 'NewProduct'}">
            <button class="btn btn-black">
                Créer un article
            </button>
        </router-link>
        </div>

    </div>
</template>

<script>
import Button from '../components/Button.vue';
import TitlePage from '../components/TitlePage';
import UsersGrid from '../components/user/UsersGrid';
import ApiUsers from '../mixins/ApiUsers'
import ProductsGridAd from '../components/productAdmin/ProductsGridAd'
import ApiProducts from '../mixins/ApiProducts'

    export default {
     name: "Dashboard",
        components: {
            TitlePage,
            UsersGrid,
            Button,
            ProductsGridAd
        },
        data: function () {
            return {
                usersFromApi: [],
                productsFromApi: [],
                 productItem:{}

            };
        },
        mixins:[ApiUsers, ApiProducts],
        created(){
            this.getAllUser()
                .then((data) => {
                    this.usersFromApi = data;
                })
                .catch((err) => console.log(err));

            this.getProducts()
            .then((data) => {
                this.productsFromApi = data;
            })
            .catch((err) => console.log(err));
        }
    }
</script>

<style lang="scss" scoped>
    
</style>