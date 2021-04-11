<template>
    <div class="dash--admin">
       
        <TitlePage title="Gérer les articles"/>
        <div class="product">
            <div class="product__content" v-if="productItemAd">
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
import ProductsGridAd from '../components/productAdmin/ProductsGridAd'
import ApiProducts from '../mixins/ApiProducts'


    export default {
     name: "Dashboard",
        components: {
            TitlePage,
            Button,
            ProductsGridAd
            
        },
        data: function () {
            return {
                productsFromApi: [],
                productItemAd:{}

            };
        },
        mixins:[ApiProducts],
        created(){
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