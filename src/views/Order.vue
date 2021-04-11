<template>
    <div class="page__order">
        <TitlePage title="Mon Commandes"/>
        <div>
           
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
                console.log("Je suis l'id decodé = "+decodedToken.userId);
               fetch(`http://localhost:3030/api/v1/users/${decodedToken.userId}`, {
                   headers: {
                       Authorization: token
                   }
               })
                .then (res => res.json())
                .then((data) => {
                    this.ordersFromApi = data;
                    console.log(`Je suis data dans order.vue ${data.orders}`)
                    console.log(`Je suis ordersFromApi in Orders = ${this.ordersFromApi.orders}`)
                    console.log('Je suis lid de la liste de this.ordersFromApi = '+ this.ordersFromApi.orders[0])
                    for (let index = 0; index < this.ordersFromApi.orders.length; index++) {
                        this.ordersId.push(this.ordersFromApi.orders[index])
                        console.log(`Je suis ordersId = ${this.ordersId}`)
                    }
                })
                .catch((err) => console.log(err));
                }
        },
    }
</script>

<style lang="scss" scoped>

.page__shop{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
}
.product__container{
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    background-color: burlywood;
    width: auto;
    border-radius: 10px;
}
</style>