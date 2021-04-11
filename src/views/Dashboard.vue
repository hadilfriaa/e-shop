<template>
    <div class="dash--admin">
       
        <TitlePage title="Bienvenue sur le dashboard Admin"/>
        <div class="user">
            <router-link :to="{name: 'DashUser'}">
                <button class="btn btn-black">
                    gérer les utilisateurs
                </button>
            </router-link>
        </div>
        <div class="product">
           <router-link :to="{name: 'DashProduct'}">
                <button class="btn btn-black">
                    gérer les articles
                </button>
            </router-link>
        </div>
        <div class="categories">
           <router-link :to="{name: 'DashCategory'}">
                <button class="btn btn-black">
                    gérer les catégories
                </button>
            </router-link>
        </div>

        <div class="orders">
              <router-link :to="{name: 'DashOrder'}">
                <button class="btn btn-black">
                    gérer les commandes
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
import CategoriesGridAd from '../components/categoryAdmin/CategoriesGridAd.vue';
import ApiCategories from '../mixins/ApiCategories';
import OrderAdGrid from '../components/orderAdmin/OrderAdGrid';
import ApiOrders from '../mixins/ApiOrders';

    export default {
     name: "Dashboard",
        components: {
            TitlePage,
            UsersGrid,
            Button,
            ProductsGridAd,
            CategoriesGridAd,
            OrderAdGrid
        },
        data: function () {
            return {
                usersFromApi: [],
                productsFromApi: [],
                productItemAd:{},
                categoriesFromApi:[],
                categoriesItemAd:{},
                ordersFromApi:[],
                orderAdItem:{}


            };
        },
        mixins:[ApiUsers, ApiProducts, ApiCategories,ApiOrders],
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

            this.getCategoryAll()
                .then((data) => {
                    this.categoriesFromApi = data;
                })
                .catch((err) => console.log(err));

            this.getOrdersAll()
                .then((data) => {
                    this.ordersFromApi = data;
                })
                .catch((err) => console.log(err));
        }
    }
</script>

<style lang="scss" scoped>
    
</style>