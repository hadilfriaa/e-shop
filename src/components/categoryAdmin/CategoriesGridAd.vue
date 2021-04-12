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
        }
    }
</script>

<style lang="scss" scoped>
.category__grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px 0em;
  margin-top: 20px;
}

</style>