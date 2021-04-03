<template>
    <div>
        <div class="product__card" v-if="productsObject">
            <router-link :to="{name: 'Product', params:{id:this.productsObject._id}}">
                <h2>
                    {{productsObject.title}}
                </h2>
            </router-link>
            <p>            
                {{productsObject.price}}
            </p>
            <p>
                <button @click="addItemToCart(productsObject)">Ajouter au panier</button>
            </p>
            <p>
                <button @click="addItemToFavoris(productsObject)">Ajouter au favoris</button>
            </p>
        </div>
    </div>
</template>

<script>
    import Cart from "../../mixins/Cart";
    import Favoris from "../../mixins/Favoris";

    export default {
        name:"ProductsItem",
        mixins:[Cart, Favoris],
        props:{
            productsObject: Object,
        },
        created() {
        },
        methods:{
            addItemToCart: function(product) {
                this.addToCart(product)
            },
            addItemToFavoris: function(product) {
                this.addToFavoris(product)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>