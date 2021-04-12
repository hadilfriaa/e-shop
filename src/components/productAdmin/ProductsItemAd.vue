<template>
    <div>
        <div class="cards__item" v-if="productsObject">
            <div class="cards__item__link" >
                <router-link class="link" :to="{name: 'ProductAd', params:{id:this.productsObject._id}}">
                    <h2>
                        {{productsObject.title}}
                    </h2>
                </router-link>
                <img class="snakers__img" :src="productsObject.imageUrl"/>

                <div class="cards__item__info">
                    <p class="cards__item__text">            
                    {{productsObject.price}} €
                    </p>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>

    export default {
        name:"ProductsItemAd",
        props:{
            productsObject: Object,
        },
        created() {
        },
        methods:{

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

</style>