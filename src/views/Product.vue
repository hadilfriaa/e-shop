
<template>
    <div class="product__page">
        <div class="product__form" v-if="productItem">
            <TitlePage :title="productItem.title"/>

            <img class="image__product" :src="productItem.imageUrl"/>
            <p class="price__product">
                {{productItem.price}} €
            </p>
            <p class="description_product">
                {{productItem.description}}
            </p>

            <div class="align--btn">
                <button class="btn--add" @click="addItemToCart(productsObject)">Ajouter au panier</button>
            </div>
            <div class="align--btn">
                <button class="btn--fav" @click="addItemToFavoris(productsObject)">Ajouter au favoris &#129293; </button>
            </div>
            
        </div>
    </div>
</template>

<script>
    import TitlePage from "../components/TitlePage";
    import Favoris from "../mixins/Favoris";
    export default {
        name:"Product",
        mixins:[Favoris],
        components:{
            TitlePage
        },
        data: function() {
            return {
                productItem:{}
            }
        },
        created() {
            fetch(`http://localhost:3030/api/v1/products/${this.$route.params.id}`)
            .then(res=>res.json())
            .then((data)=>{
                console.log(data);
                this.productItem = data;
            })
            .catch(err=> console.log(err));
        },
         methods:{
            addItemToCart: function(product) {
                this.addToCart(product)
            },
            addItemToFavoris: function(product) {
                this.addToFavoris(product)
            }
        }
    }
</script>

<style lang="scss" scoped>

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

.align--btn{
    display: inline-block;
    margin: 50px;
}

.btn--add{
  background-color: #000000;
  color: #fff;
  padding: 8px 20px;
  border: 2px solid ;
  border-radius: 8px;
  transition: all 0.3s ease-out;
  font-weight: bold;
}

.btn--add:hover{
  background-color: #B3EEFF; 
  color: #292929;
  font-weight: bold;
  

}

.btn--fav{
  background-color: #ffff;
  color: #000000;
  padding: 8px 20px;
  border: 2px solid ;
  border-radius: 8px;
  transition: all 0.3s ease-out;
  font-weight: bold;
}

.btn--fav:hover{
  background-color: #F70000; 
  color: #FFFFFF;
  font-weight: bold;

}

</style>