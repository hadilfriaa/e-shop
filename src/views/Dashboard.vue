<template>
    <div class="dash--admin">
       
        <TitlePage title="Bienvenue sur le dashboard Admin"/>
        <div class="admin__card">
            <router-link class="admin__cont" :to="{name: 'DashUser'}">
                <h2>
                    Gérer les utilisateurs
                </h2>
            </router-link>
        </div>
        <div class="admin__card">
           <router-link class="admin__cont" :to="{name: 'DashProduct'}">
                <h2>
                    Gérer les articles
                </h2>
            </router-link>
        </div>
        <div class="admin__card">
           <router-link class="admin__cont" :to="{name: 'DashCategory'}">
                <h2>
                    Gérer les catégories
                </h2>
            </router-link>
        </div>

        <div class="admin__card">
              <router-link class="admin__cont" :to="{name: 'DashOrder'}">
                <h2>
                    Gérer les commandes
                </h2>
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


.admin__card{
  list-style: none;
  margin: 0;
  overflow: hidden; 
  padding: 0;
  font-family: monospace;

}
.admin__cont{
  background: #eee;
  border-radius: 20px 0 0 20px;
  color: #F70000;
  display: inline-block;
  height: 40px;
  line-height: 2px;
  padding: 0 40px 0 43px;
  position: relative;
  margin: 0 10px 20px 0;
  text-decoration: none;
  font-family: monospace;

}

.admin__cont::before {
  background: #F70000;
  border-radius: 10px;
  box-shadow: inset 0 2px rgba(0, 0, 0, 0.25);
  content: '';
  height: 10px;
  left: 14px;
  position: absolute;
  width: 10px;
  top: 14px;
}

.admin__cont::after {
  background: #F8F8F8;
  border-bottom: 20px solid transparent;
  border-left: 15px solid #eee;
  border-top: 20px solid transparent;
  content: '';
  position: absolute;
  right: 0;
  top: 0;
}

.admin__cont:hover {
  background-color: #B3EEFF;
  color: white;
}

.admin__cont:hover::after {
   border-left-color: #B3EEFF; 
}
</style>