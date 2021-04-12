<template>
    <div>
        <div class="order">
            <div class="order__card" v-if="ordersObject">

                <h2 class="title">
                    Numéro de la commande: {{ordersUser._id}}
                </h2>
                <h3> Commande passée le : </h3> {{ordersUser.date}}
                <h4>Commande est :</h4> <p class="status"> {{ordersUser.status}} </p>

            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name:"OrderItem",
        data: function () {
            return {
                i: Number,
                ordersUser : [] || {},
                productsId : []
            }  
        },
        props:{
            ordersObject: String,
        },
        created() {
            console.log(`Je suis ordersObject in OrdersItem = ${this.ordersObject}`)
            fetch(`http://localhost:3030/api/v1/order/${this.ordersObject}`)
            .then(res=>res.json())
            .then((data) => {
                this.ordersUser = data
            })
            .catch(err=> console.log(err))
        },
        methods:{
        }
    }
</script>

<style lang="scss" scoped>

.order__card{
    width: 500px;
    border: 1px solid #CCCCCC;
    border-radius: 4px;
    background-color: #FFFFFF;
    margin: auto;
}
.title{
    font-family: monospace;
    font-weight: bold;

}
.status{
    font-family: monospace;
    font-weight: bold;

}
.order{
    margin-top: 30px;
    margin-bottom: 30px;
}

</style>