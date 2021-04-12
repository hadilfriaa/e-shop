<template>
  <div class="category__home">
    <TitlePage title="Ma page Home"/>

      <h3 class="title"> Découvrez les artciles de chaque catégorie</h3>
      <CategoriesGrid :CategoryArray="categoryFromApi"/>

      <h3 class="title"> Quelques paires à AVOIR !</h3>
        <div class="grid">
            <img class="image__product" src="../assets/af1.png"/>

            <img class="image__product" src="../assets/j11.png"/>

            <img class="image__product" src="../assets/ozz.png"/>


        </div>
  </div>


</template>

<script>
import CategoriesGrid from '../components/category/CategoriesGrid'
import ApiCategories from '../mixins/ApiCategories';
import TitlePage from '../components/product/ProductsItem'

export default {
  name: 'Home',
   components:{
          TitlePage,
          CategoriesGrid
        },
  data: function () {
    return{
      categoryFromApi: []
    }
  },
  mixins:[ApiCategories],
  created(){

    console.log(this.categoryFromApi);
    this.getCategoryAll()
    .then((data) => {
        this.categoryFromApi = data;
    })
    .catch(err=> console.log(err))
},
  methods: {

    }
  }
</script>

<style ang="scss" scoped>
.title{
    font-family: monospace;
}
.grid{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px 0em;
  margin-top: 20px;
}
img{
  border-radius: 5px;
}
</style>