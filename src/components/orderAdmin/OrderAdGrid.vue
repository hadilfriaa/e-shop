<template>
    <div class="order__grid">
        <OrderAdItem 
        v-for="order in ordersArray" 
        :key="order._id"
        :ordersObject="order"
        />
    </div>
</template>

<script>
import OrderAdItem from './OrderAdItem'
    export default {
        name: "OrderAdGrid",
        components: {
            OrderAdItem
        },
        props: {
            ordersArray: Array
        },
        created() {
            console.log(`Je suis ordersArray in OrdersGrid = ${this.ordersArray}`)
        },
    }
</script>

<style lang="scss" scoped>

</style>