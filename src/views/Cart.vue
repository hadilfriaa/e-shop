<template>
   <div class="shopping__cart">
    <TitlePage title="Votre panier"/>

        <table class="shop__table">
            <thead>
                <tr>
                    <th>Titre</th>
                    <th>Quantité</th>
                    <th>Prix</th>
                    <th></th>
                     <th>Totale</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in cartArray" :key="item.id">
                    <td>{{item.title}}</td>
                    <td>{{item.qty}}</td>
                    <td>{{item.price}}</td>
                    <td>
                        <button class="btn--rem" @click="removeItemCart(item)">-</button>
                        <button  class="btn--add" @click="addItemCart(item)">+</button>
                    </td>
                    <td>
                        {{item.qty *item.price }} €
                    </td>
                    <td>
                        <button class="btn--delete" @click="removeProductCart(item)">Supprimer le produit</button>
                    </td>
                   
                </tr>
            </tbody>
        </table>
        <div class="calc">
            Nombre d'article: {{calcQty}}
        </div>

        <div class="calc">
            Totale: {{calcTotal}}
        </div>
        <button class="btn--delete" @click="clearShopCart()">Supprimer le panier</button>
        <button class="btn--pay" @click="getOrder(cartArray)">Payer</button>

    </div>
</template>

<script>
import Cart from "../mixins/Cart";
import VueJwtDecode from "vue-jwt-decode";
import TitlePage from "../components/TitlePage";

    export default {
        components: {
            TitlePage
        },
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

                this.idProducts.push(parseObj[this.i].id)
                

            }

            const token = localStorage.getItem('token');
            if(token) {
                const decodedToken = VueJwtDecode.decode(token);
                
                this.idUser = decodedToken.userId
                
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
                    
                    this.messageError = data.error;
                } else {
                    this.$router.push('/order');
                    
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

.shopping__cart{
    width: 800px;
    border: 1px solid #CCCCCC;
    border-radius: 4px;
    background-color: #FFFFFF;
    margin: auto;
    margin-top: 50px;
    padding: 20px;
    
        
}

table {
width: 100%;
box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
border-radius: 5px;
margin-bottom: 30px;

}
th {
font-family: monospace;
font-weight: bold;
width: 50%;
padding: 5px;
background-color: #B3EEFF;
}
td {
font-family: monospace;
font-weight: bold;
width: 50%;
padding: 5px;
text-align: center;
background-color: #ffffff;
}

.btn--rem{
  background-color: #F70000;
  color: #fff;
  padding: 8px 20px;
  border: 2px solid ;
  border-radius: 8px;
  transition: all 0.3s ease-out;
  font-weight: bold;
}

.btn--add{
  background-color: #B3EEFF;
  color: #fff;
  padding: 8px 20px;
  border: 2px solid ;
  border-radius: 8px;
  transition: all 0.3s ease-out;
  font-family: monospace;
  font-weight: bold;
}

.btn--delete{
  background-color: #F70000;
  color: #fff;
  padding: 8px 20px;
  border: 2px solid ;
  border-radius: 8px;
  transition: all 0.3s ease-out;
  font-size: 10px;
  font-family: monospace;
  font-weight: bold;
}

.btn--pay{
  background-color: #000000;
  color: #fff;
  padding: 8px 20px;
  border: 2px solid ;
  border-radius: 8px;
  transition: all 0.3s ease-out;
  font-size: 10px;
  font-family: monospace;
  font-weight: bold;
}

.calc{
    font-family: monospace;
    font-weight: bold;
}

</style>