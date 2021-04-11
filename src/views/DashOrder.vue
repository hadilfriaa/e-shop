<template>
    <div class="dash--admin">
       
        <TitlePage title="Gérer les commandes"/>

        <div class="orders">
            <div class="orders__content" v-if="orderAdItem">
                <OrderAdGrid :ordersArray="ordersFromApi"/> 
            </div>
        </div>

    </div>
</template>

<script>
import TitlePage from '../components/TitlePage';
import OrderAdGrid from '../components/orderAdmin/OrderAdGrid';
import ApiOrders from '../mixins/ApiOrders';

    export default {
     name: "Dashboard",
        components: {
            TitlePage,
            OrderAdGrid
        },
        data: function () {
            return {
              
                ordersFromApi:[],
                orderAdItem:{}


            };
        },
        mixins:[ApiOrders],
        created(){
            this.getOrdersAll()
                .then((data) => {
                    this.ordersFromApi = data;
                })
                .catch((err) => console.log(err));
        }
    }
</script>

<style lang="scss" scoped>
    
</style>