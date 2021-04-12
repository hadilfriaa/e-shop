<template>
    <div class="page__order">
        
        <div class="order__container">
           <TitlePage title="Mes Commandes"/>

            <OrderGrid :ordersArray="ordersId"/>

        </div>
    </div>
</template>

<script>
import TitlePage from '../components/TitlePage'
import OrderGrid from '../components/order/OrderGrid'
import ApiOrders from '../mixins/ApiOrders'
import VueJwtDecode from "vue-jwt-decode";

export default {
        name: "Order",
        components: {
            TitlePage,
            OrderGrid
        },
        data: function(){
            return{
                ordersFromApi: [],
                ordersId:[]
            }
        },
        methods: {
        },
        mixins:[ApiOrders],
        created() {
            const token = localStorage.getItem('token');
            if(token) {
                const decodedToken = VueJwtDecode.decode(token);
               fetch(`http://localhost:3030/api/v1/users/${decodedToken.userId}`, {
                   headers: {
                       Authorization: token
                   }
               })
                .then (res => res.json())
                .then((data) => {
                    this.ordersFromApi = data;
                    for (let index = 0; index < this.ordersFromApi.orders.length; index++) {
                        this.ordersId.push(this.ordersFromApi.orders[index])
                    }
                })
                .catch((err) => console.log(err));
                }
        },
    }
</script>

<style lang="scss" scoped>

.order__container{
    background-image: url(../assets/bgadd.png);;
    width: auto;
     font-family: monospace;
    border: 1px solid #CCCCCC;
    border-radius: 4px;
    background-color: #FFFFFF;
    margin: auto;
    margin-top: 50px;
    padding: 20px;
    
}


</style>