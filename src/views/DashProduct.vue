<template>
    <div class="dash--admin">
       
        <TitlePage title="Gérer les articles"/>
        <div class="product">
            <router-link class="btn--create" :to="{name: 'NewProduct'}">
                Créer un article
            </router-link>
            <div class="product__content" v-if="productItemAd">
                <ProductsGridAd :productsArray="productsFromApi"/> 
            </div>
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

.btn--create{
  background-color: #B3EEFF;
  color: #fff;
  padding: 8px 20px;
  border: 2px solid ;
  border-radius: 8px;
  transition: all 0.3s ease-out;
  font-weight: bold;
  text-decoration: none;
 
}

.btn--create:hover{
  background-color: #F70000; 
  color: #FFFFFF;
  font-weight: bold;

}
    
</style>