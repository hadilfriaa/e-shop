<template>
    <div class="products__grid">
        <ProductsItemAd v-for="product in productsArray" 
        :key="product._id"
        :productsObject="product"
        />
    </div>
</template>

<script>
import ProductsItemAd from './ProductsItemAd'
    export default {
        name: "ProductsGridAd",
        components: {
            ProductsItemAd
        },
        data: function(){
            return{
            }
        },
        props: {
            productsArray: Array
        },
    }
</script>

<style lang="scss" scoped>
</style>