<template>
    <div>
        <div class="cards__item" v-if="productsObject">
            <div class="cards__item__link" >

                <router-link class="link"  :to="{name: 'Product', params:{id:this.productsObject._id}}">
                    <h2 class="product__title">
                        {{productsObject.title}}
                    </h2>
                </router-link>

                   <img class="snakers__img" :src="productsObject.imageUrl"/>

            <div class="cards__item__info">
                <p class="cards__item__text">            
                {{productsObject.price}} €
                </p>
            </div>
                <p>
                    <button class="btn--add" @click="addItemToCart(productsObject)">Ajouter au panier</button>
                </p>
                <p>
                    <button class="btn--fav" @click="addItemToFavoris(productsObject)">Ajouter au favoris &#129293; </button>
                </p>
            </div>
            
        </div>
    </div>
</template>

<script>
    import Cart from "../../mixins/Cart";
    import Favoris from "../../mixins/Favoris";

    export default {
        name:"ProductsItem",
        mixins:[Cart, Favoris],
        props:{
            productsObject: Object,
        },
        created() {
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
.cards__item {
  display: flex;
  flex: 1;
  margin: 0 1rem;
  border-radius: 10px;
  margin-bottom: 50px;
  font-family: monospace;

}
.cards__item__link {
    background-color: #FFFFFF;
  display: flex;
  flex-flow: column;
  width: 100%;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
  -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
  filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
  border-radius: 10px;
  overflow: hidden;
  text-decoration: none;
}

.cards__item__info {
  padding: 20px 30px 30px;
}

.cards__item__text {
  color: #252e48;
  font-size: 18px;
  line-height: 24px;
  font-weight: bold;
}

.link{
    color: #2C3E50;
    text-align: center ;
    text-decoration: none;
    padding: 20px;
}

.snakers__img{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: auto;
    height: 200px;
    border-radius: 6px;
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