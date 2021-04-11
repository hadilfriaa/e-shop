<template>
    <div class="dash--admin">
       
        <TitlePage title="Gérer les catégories"/>
        <div class="categories">
            <div class="categories__content" v-if="categoriesItemAd">
                <CategoriesGridAd :CategoryArray="categoriesFromApi"/> 
            </div>
            <router-link :to="{name: 'NewCategory'}">
            <button class="btn btn-black">
                Créer un catégorie
            </button>
        </router-link>
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
    
</style>