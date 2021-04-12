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
        }
    }
</script>

<style lang="scss" scoped>

.category__grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px 0em;
}


</style>