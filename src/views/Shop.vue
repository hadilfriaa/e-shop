<template>
  <div class="page__shop">
      <div class="search__form">
        <h3> Vous cherchez un article en particulier ?</h3>
        <img class="search__img" src="../assets/search.png" alt="">
        <input class="search__input" type="text" placeholder="Entrez le nom de l'article" v-model="searchValue" @keyup="search">
      </div>
      <!--
      <div class="input__content">
        Résultat de votre recherche = {{searchValue}} <br>
        Résultat de votre recherche precedente = {{oldSearchValue}}
      </div>
      -->

      <div v-if="searchValue"  class="search__content">
        <ProductsGrid :productsArray="filteredShop"/>
      </div>

    <ProductsGrid :productsArray="productsFromApi"/>    
  </div>
</template>

<script>
import ProductsGrid from '../components/product/ProductsGrid';
import ApiProducts from '../mixins/ApiProducts';
export default {
  components: {
    ProductsGrid,
  },
  data: function() {
    return {
      productsFromApi: [],
      searchValue: "",
      oldSearchValue: ""
    };
  },
  watch:{
    searchValue: function (newValue, oldValue) {
      this.oldSearchValue = oldValue
    }
  },
  computed:{
    filteredShop: function () {
      let filter = new RegExp(this.searchValue, "i");
      return this.productsFromApi.filter(item=>item.title.match(filter))
    }
  },
  methods: {
    search: function(){
       console.log(this.searchValue)
    }
  },
  mixins:[ApiProducts],
  created() {
    this.getProducts()
      .then((data) => {
        this.productsFromApi = data;
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style lang="scss" scoped>
.page__shop{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
}
.product__container{
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    background-color: burlywood;
    width: auto;
    border-radius: 10px;
}

.search__input{
    width: 550px;
    height:30px;
    text-align: center;
    color: black;
    background-color: #FFFFFF;
    border: 1px solid #CCCCCC;
    border-radius: 20px;
    margin-bottom: 30px;
}

.search__img{
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom:10px;
}

</style>