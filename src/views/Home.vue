<template>
  <div class="category__home">
    <TitlePage title="Ma page Home"/>
    <CategoriesGrid :CategoryArray="categoryFromApi"/>
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
        console.log(`Je suis categoryFromApi dans Home ${data}`)
    })
    .catch(err=> console.log(err))
},
  methods: {

    }
  }
</script>

<style>

</style>