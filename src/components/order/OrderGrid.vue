<template>
    <div class="order__grid">
        <OrderItem 
        v-for="order in ordersArray" 
        :key="order._id"
        :ordersObject="order"
        />
    </div>
</template>

<script>
import OrderItem from './OrderItem'
    export default {
        name: "OrderGrid",
        components: {
            OrderItem
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