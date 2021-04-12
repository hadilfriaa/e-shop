
<template>
        <div class="order__page">
            <div v-if="show">

                <div class="order__content" v-if="orderAdItem">

                    <p> Numéro de la commande: {{id}}   </p>
                    <h3>Date de la commande: {{date}}</h3>
                    <h4>La commande est : {{status}}</h4>

                    <button class="btn--modify" @click="modify">Modifier le status </button>
            
                </div>
            </div>

            <div v-if="isclick">
                <form @submit.prevent="update">
            
                    <div class="form__group">
                        <label htmlFor="status"> status </label>
                        <input class="inpt" type="text" name="status"  v-model="status" />
                    </div>
                   
    
                    <div class="form__group">
                        <input class="btn--update" type="submit" value="update" />
                    </div>
                </form>
            </div>
    </div>
    
</template>

<script>
    import VueJwtDecode from "vue-jwt-decode";
    import TitlePage from "../components/TitlePage";
    export default {
        name:"CategoryAd",
        components:{
            TitlePage
        },
        data: function() {
            return {
                show:true,
                isclick:false,
                orderAdItem:{},
                id:"",
                date:"",
                status:""
        

            }
        },
        methods: {
            modify: function(){
                this.isclick = true;
                this.show = false;
            },
             update: function(){
    
                return fetch(`http://localhost:3030/api/v1/order/update/${this.$route.params.id}`, {
                 method: "POST",
                 headers: {"Content-Type":"Application/json"},
                 body: JSON.stringify( {
                    status: this.status,
                                                       
                })
                })
                .then (res => res.json())
                .then((data) => {
                    this.orderAdItem = data;
                    this.status= data.status;
                        if(data.error) {
                            console.log(data.error);
                            this.messageError = data.error;
                        } else {
                            this.$router.push('/dashOrder');
                        }
                })
                .catch(err => console.log(err));
            }
        
            
        },
        created() {
            fetch(`http://localhost:3030/api/v1/order/${this.$route.params.id}`)
            .then(res=>res.json())
            .then((data)=>{
                console.log(data);
                this.orderAdItem = data;
                this.id= data._id;
                this.date= data.date;
                this.status= data.status;
            })
            .catch(err=> console.log(err));
        }
    }
</script>

<style lang="scss" scoped>



.order__content{
    width: auto;
     font-family: monospace;
    border: 1px solid #CCCCCC;
    border-radius: 4px;
    background-color: #FFFFFF;
    margin: auto;
    margin-top: 50px;
    padding: 20px;
    
}

.Sign__form {
        width: 500px;
        border: 1px solid #CCCCCC;
        border-radius: 4px;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 50px;
        padding: 20px;
    }

.inpt{
    width: 350px;
    height:30px;
    text-align: center;
    color: black;
    background-color: #FFFFFF;
    border: 1px solid #CCCCCC;
    border-radius: .25rem;
    margin-bottom: 30px;
}

.btn--modify{
  background-color: #000000;
  color: #fff;
  padding: 8px 20px;
  border: 2px solid ;
  border-radius: 8px;
  transition: all 0.3s ease-out;
  font-weight: bold;
 
}

.btn--update{
  background-color: #000000;
  color: #fff;
  padding: 8px 20px;
  border: 2px solid ;
  border-radius: 8px;
  transition: all 0.3s ease-out;
  font-weight: bold;
}

</style>