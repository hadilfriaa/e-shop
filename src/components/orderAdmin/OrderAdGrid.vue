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
        },
    }
</script>

<style lang="scss" scoped>

.order__grid{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px 0em;
  margin-top: 20px;
}

</style>