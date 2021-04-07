<template>
   <div class="shopping__cart">
        <table class="shop__table">
            <thead>
                <tr>
                    <th>Titre</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th></th>
                     <th>Total</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in cartArray" :key="item.id">
                    <td>{{item.title}}</td>
                    <td>{{item.qty}}</td>
                    <td>{{item.price}}</td>
                    <td>
                        <button @click="removeItemCart(item)">-</button>
                        <button @click="addItemCart(item)">+</button>
                    </td>
                    <td>
                        {{item.qty *item.price }} €
                    </td>
                    <td>
                        <button @click="removeProductCart(item)">Supprimer le produit</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div>
            Nombre d'article: {{calcQty}}
        </div>

        <div>
            Totale: {{calcTotal}}
        </div>
        <button @click="clearShopCart()">Supprimer le panier</button>
    </div>
</template>

<script>
import Cart from "../mixins/Cart";
    export default {
        mixins:[Cart],
        data: function() {
            return {
                cartArray:[]
            }
        },
        created() {
            this.cartArray = this.getCart();
        },
           computed: {
            calcQty: function() {
                return this.getCartCount(this.cartArray);
            },
            calcTotal: function() {
                return this.getCartTotal(this.cartArray);
            }
        },
        methods: {
            removeProductCart: function(product) {
                this.removeItemCart(product);
                this.cartArray = this.getCart();
            },
            addItemCart: function(product) {
                this.addOneQty(product);
                this.cartArray = this.getCart();
            },
            removeItemCart: function(product) {
                this.removeOneQty(product);
                this.cartArray = this.getCart();
            },
            clearShopCart: function() {
                this.clearCart();
                this.cartArray = this.getCart();
                window.location.reload();
            }
        
        }
    }
</script>

<style lang="scss" scoped>
</style>