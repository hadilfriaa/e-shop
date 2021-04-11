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
        <button @click="getOrder(cartArray)">Payer</button>

    </div>
</template>

<script>
import Cart from "../mixins/Cart";
import VueJwtDecode from "vue-jwt-decode";
    export default {
        mixins:[Cart],
        data: function() {
            return {
                cartArray:[],
                i: Number,
                idProducts: [],
                idUser : Array,
                dateActuel: String
            }
        },
         created() {
            this.cartArray = this.getCart();
            console.log("je suis cartarray"+this.cartArray)
            const parseObj = JSON.parse(JSON.stringify(this.cartArray))
            for (this.i = 0; this.i < parseObj.length; this.i++) {
            console.log("jesuis this i"+ this.i);
                console.log(`Je suis les ids parse ${parseObj[this.i].id}`)

                this.idProducts.push(parseObj[this.i].id)
                 console.log(`Je suis parseObj : ${parseObj[this.i].id}`)
                console.log(`Je suis idProducts: ${this.idProducts}`)

            }

            const token = localStorage.getItem('token');
            if(token) {
                const decodedToken = VueJwtDecode.decode(token);
                console.log(`Je suis le token ${token}`)
                this.idUser = decodedToken.userId
                console.log(`Je suis this.idUser ${this.idUser}`)
            }
            else{
                console.log(`Je ne decode pas le token`)
            }
                var today = new Date();
                var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear()
                var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

                this.dateActuel = date+' à '+time;
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

             getOrder: async function(){
                const mySelf = this
                return fetch("http://localhost:3030/api/v1/orders", {
                method: "POST",
                headers: {
                    // Authorization: token,
                    "Content-Type":"Application/json"
                    },
                body: JSON.stringify( {
                    total:  1000,
                    status: "En cours",
                    date: this.dateActuel,
                    user: mySelf.idUser,
                    products: mySelf.idProducts,
                })
            })
            .then (res => res.json())
            .then((data) => {
                if(data.error) {
                    console.log(data.error);
                    console.log(`Je suis l'erreur : ${data}`)
                    this.messageError = data.error;
                } else {
                    this.$router.push('/order');
                    console.log("Je suis la date actuelle = "+this.dateActuel)
                }
            })
            .catch(err => console.log(err));
                
            },

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