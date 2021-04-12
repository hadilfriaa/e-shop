
<template>
        <div class="category__page">
            <div v-if="show">

                <div class="category__content" v-if="categoriesItemAd">
                    <TitlePage :title="title"/>

                    <p>     {{products}}    </p>

                    <button class="btn--modify" @click="modify">Modifier la catégorie</button>
                    <button class="btn--delete" @click="delet">Supprimer la catégorie</button>
            
                </div>
            </div>

            <div v-if="isclick">
                <form @submit.prevent="update">
                    <div class="form__group">
                        <label htmlFor="title"> title </label>
                        <input class="inpt" type="text" name="title"  v-model="title" />
                    </div>
                   
                    <div class="form__group">
                        <input class="btn--update" type="submit" value="update" />
                    </div>
                </form>
            </div>
    </div>
    
</template>

<script>
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
                categoriesItemAd:{},
                title: "",
                products: []
        

            }
        },
        methods: {
            delet: function() {
               const token = localStorage.getItem('token');
                return fetch(`http://localhost:3030/api/v1/category/delete/${this.$route.params.id}`, {
                
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
                        this.$router.push('/dashCategory');
                    }
                })
                .catch(err => console.log(err));

            },
            modify: function(){
                this.isclick = true;
                this.show = false;
            },
             update: function(){
    
                return fetch(`http://localhost:3030/api/v1/category/update/${this.$route.params.id}`, {
                 method: "POST",
                 headers: {"Content-Type":"Application/json"},
                 body: JSON.stringify( {
                    title: this.title,
                    products: this.products,
                                                       
                })
                })
                .then (res => res.json())
                .then((data) => {
                    this.categoriesItemAd = data;
                    this.title= data.title;
                    this.products= data.products;
                        if(data.error) {
                            console.log(data.error);
                            this.messageError = data.error;
                        } else {
                            this.$router.push('/dashCategory');
                        }
                })
                .catch(err => console.log(err));
            }
        
            
        },
        created() {
            fetch(`http://localhost:3030/api/v1/category/${this.$route.params.id}`)
            .then(res=>res.json())
            .then((data)=>{
                console.log(data);
                this.productItemAd = data;
                this.title= data.title;
                this.products= data.products;
               
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