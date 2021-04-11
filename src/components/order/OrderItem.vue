<template>
    <div>
        <div class="order__card" v-if="ordersObject">
                <h2>
                    Votre numéro de commande est : {{ordersUser._id}}
                </h2>
                <h3>Votre commande à été réalisé le : {{ordersUser.date}}</h3>
                <h4>Votre commande est : {{ordersUser.status}}</h4>
               
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
            // for (this.i = 0; this.i < this.ordersUser.products.length; this.i++) {
            //     console.log(this.i)                
            // }
            console.log(`Je suis ordersObject in OrdersItem = ${this.ordersObject}`)
            fetch(`http://localhost:3030/api/v1/order/${this.ordersObject}`)
            .then(res=>res.json())
            .then((data) => {
                console.log("Je suis data dans orderItem =",data)
                this.ordersUser = data
                console.log("Je suis ordersUser dans orderItem = ",this.ordersUser)
            })
            .catch(err=> console.log(err))
        },
        methods:{
        }
    }
</script>

<style lang="scss" scoped>

</style>