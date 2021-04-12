<template>
    <div class="dash--admin">
       
        <TitlePage title="Gérer les catégories"/>
        <div class="categories">
            <router-link class="btn--create" :to="{name: 'NewCategory'}">
                Créer un catégorie
            </router-link>
            <div class="categories__content" v-if="categoriesItemAd">
                <CategoriesGridAd :CategoryArray="categoriesFromApi"/> 
            </div>
        </div>

    </div>
</template>

<script>
import TitlePage from '../components/TitlePage';
import CategoriesGridAd from '../components/categoryAdmin/CategoriesGridAd.vue';
import ApiCategories from '../mixins/ApiCategories';

    export default {
     name: "DashCategory",
        components: {
            TitlePage,
            CategoriesGridAd
        },
        data: function () {
            return {
                categoriesFromApi:[],
                categoriesItemAd:{}
            };
        },
        mixins:[ApiCategories],
        created(){
           this.getCategoryAll()
                .then((data) => {
                    this.categoriesFromApi = data;
                })
                .catch((err) => console.log(err));
        }
    }
</script>

<style lang="scss" scoped>

.btn--create{
  background-color: #B3EEFF;
  color: #fff;
  padding: 8px 20px;
  border: 2px solid ;
  border-radius: 8px;
  transition: all 0.3s ease-out;
  font-weight: bold;
  
  text-decoration: none;
 
}

.btn--create:hover{
  background-color: #F70000; 
  color: #FFFFFF;
  font-weight: bold;

}
    
</style>