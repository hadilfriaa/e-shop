<template>
    <div class="shopping__cart">
        <table class="shop__table">
            <thead>
                <tr>
                    <th>Titre</th>
                    <th>Quantité</th>
                    <th>Prix</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in favorisArray" :key="item.id">
                    <td>{{item.title}}</td>
                    <td>{{item.qty}}</td>
                    <td>{{item.price}}</td>
                    <td>
                        <button @click="removeFavoris(item)">Supprimer le produit</button>
                    </td>
                    <td>
                        <button @click="addItemToCart(item)">Ajouter au panier</button>
                    </td>

                </tr>
                    <div>
                        <button @click="clearFavoris()">Supprimer les favoris</button>
                    </div>
            </tbody>
        </table>
    </div>
</template>


<script>
    import Cart from "../mixins/Cart";
    import Favoris from '../mixins/Favoris';
    export default {
        mixins:[Favoris, Cart],
        data: function() {
            return {
                favorisArray:[],
            }
        },
        created() {
            this.favorisArray = this.getFavoris();
            console.log("dsvkldsnclqcnw"+this.favorisArray)
        },
        computed:{

        },
        methods: {
            clearFavoris: function () {
                this.clearFavoris()
                this.favorisArray = this.getFavoris();
                console.log(this.favorisArray)
            },
            removeFavoris: function (product) {
                this.removeItemFavoris(product);
                this.favorisArray = this.getFavoris();
            },
            addItemToCart: function(product) {
                // console.log(`Je suis product.title dans productItem = ${product.title}`)
                this.addToCart(product)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
