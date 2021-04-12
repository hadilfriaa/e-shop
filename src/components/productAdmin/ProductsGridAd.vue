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
.products__grid{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px 0em;
  margin-top: 20px;
}
</style>