<template>
    <div class="category__grid">
        <CategoriesItemAd 
        v-for="category in CategoryArray" 
        :key="category._id"
        :categoryObject="category"/>
    </div>

</template>

<script>
import CategoriesItemAd from './CategoriesItemAd'
    export default {
        name: "CategoriesGridAd",
        components: {
            CategoriesItemAd
        },
        props: {
            CategoryArray: Array,
        },
        created(){
            console.log("je suis category array dans gridAd"+this.CategoryArray);
        }
    }
</script>

<style lang="scss" scoped>

</style>