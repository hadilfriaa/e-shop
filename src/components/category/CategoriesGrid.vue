<template>
    <div class="category__grid">
        <CategoriesItem 
        v-for="category in CategoryArray" 
        :key="category._id"
        :categoryObject="category"/>
    </div>

</template>

<script>
import CategoriesItem from './CategoriesItem'
    export default {
        name: "CategoriesGrid",
        components: {
            CategoriesItem
        },
        props: {
            CategoryArray: Array,
        },
        created(){
            console.log("je suis category array"+this.CategoryArray);
        }
    }
</script>

<style lang="scss" scoped>

</style>