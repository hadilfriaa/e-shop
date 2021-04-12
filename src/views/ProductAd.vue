
<template>
    <div class="product__page">
        <div v-if="show">
            <div class="product__form" v-if="productItemAd">
                <TitlePage :title="productItemAd.title"/>

                <img class="image__product" :src="productItemAd.imageUrl"/>
                <p class="price__product">
                    {{productItemAd.price}} €
                </p>
                <p class="description_product">
                    {{productItemAd.description}}
                </p>
                <button class="btn--modify" @click="modify">Modifier le produit</button>
                <button class="btn--delete" @click="delet">Supprimer le produit</button>
                
            </div>
        </div>
        <div v-if="isclick">
                <form @submit.prevent="update">
                    <div class="form__group">
                        <label htmlFor="title"> title </label>
                        <input class="inpt" type="text" name="title"  v-model="title" />
                    </div>
                    <div class="form__group">
                        <label htmlFor="description"> description </label>
                        <input class="inpt" type="text" name="description"  v-model="description" />
                    </div>
                    <div class="form__group">
                        <label htmlFor="imageUrl"> imageUrl </label>
                        <input class="inpt" type="text" name="telephone" v-model="imageUrl"> <br>
                    </div>
                    
                     <div class="form__group">
                        <label htmlFor="price"> price </label>
                        <input class="inpt" type="text" name="price"  v-model="price" />
                    </div>
                    <div class="form__group">
                        <label htmlFor="category"> category </label>
                        <input class="inpt" type="text" name="category"  v-model="category" />
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
        name:"ProductAd",
        components:{
            TitlePage
        },
        data: function() {
            return {
                show:true,
                isclick:false,
                productItemAd:{},
                title: "",
                description: "",
                imageUrl: "",
                price: "",
                category : ""  

            }
        },
        methods: {
           delet: function() {
               const token = localStorage.getItem('token');
                const decodedToken = VueJwtDecode.decode(token);
                return fetch(`http://localhost:3030/api/v1/products/delete/${this.$route.params.id}`, {
                
                   headers: {
                       Authorization: token
                   }
                })
                .then (res => res.json())
                .then((data) => {
                    if(data.error) {
                        console.log(data.error);
                        this.messageError = data.error;
                    } else {
                        this.$router.push('/dashboard');
                    }
                })
                .catch(err => console.log(err));

            },
            modify: function(){
                this.isclick = true;
                this.show = false;
            },
            
            update: function(){
    
                return fetch(`http://localhost:3030/api/v1/products/update/${this.$route.params.id}`, {
                 method: "POST",
                 headers: {"Content-Type":"Application/json"},
                 body: JSON.stringify( {
                    title: this.title,
                    description: this.description,
                    imageUrl: this.imageUrl,
                    price: this.price,
                    category : this.category                                      
                })
                })
                .then (res => res.json())
                .then((data) => {
                    this.productItemAd = data;
                    this.title= data.title;
                    this.description= data.description;
                    this.imageUrl= data.imageUrl;
                    this.price= data.price;
                    this.category= data.category;
                        if(data.error) {
                            console.log(data.error);
                            this.messageError = data.error;
                        } else {
                            this.$router.push('/dashProduct');
                        }
                })
                .catch(err => console.log(err));
            }
        },
        created() {
            fetch(`http://localhost:3030/api/v1/products/${this.$route.params.id}`)
            .then(res=>res.json())
            .then((data)=>{
                console.log(data);
                this.productItemAd = data;
                this.title= data.title;
                this.description= data.description;
                this.imageUrl= data.imageUrl;
                this.price= data.price;
                this.category= data.category;
            })
            .catch(err=> console.log(err));
        }
    }
</script>

<style lang="scss" scoped>
.Sign__form {
    width: 500px;
    border: 1px solid #CCCCCC;
    border-radius: 4px;
    background-color: #FFFFFF;
    margin: auto;
    margin-top: 50px;
    padding: 20px;
}

.form__group{
    font-family: monospace;

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
    font-family: monospace;
}

.product__form{
    width: 600px;
    height: auto;
    border: 2px solid #c4c4c4c4;
    border-radius: 8px;
    background-color: #FFFFFF;
    margin: auto;
    margin-top: 50px;
    padding: 20px;
    box-shadow: 5px 5px 5px #c4c4c4c4;
    font-family: monospace;

}
.image__product{
    width: 400px;
    height: auto;
    border-radius: 8px;
}

.price__product {
  text-align: right;
  margin-right: 100px;
  font-weight: bold;

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

.btn--delete{
 background-color: #F70000;
  color: #fff;
  padding: 8px 20px;
  border: 2px solid ;
  border-radius: 8px;
  transition: all 0.3s ease-out;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 20px;
 
}

</style>