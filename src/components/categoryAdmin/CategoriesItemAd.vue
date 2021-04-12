<template>
    <div class="category__card" v-if="categoryObject">
        <router-link class="category__cont" :to="{name:'CategoryAd', params:{id:categoryObject._id}}">
            <h2>
                {{categoryObject.title}}
            </h2>
        </router-link>
    </div>
</template>

<script>
    export default {
        name:"CategoriesItemAd",
        created() {
            },
        props:{
            categoryObject: Object,
        }
    }
</script>

<style lang="scss" scoped>
.category__card{
  list-style: none;
  margin: 0;
  overflow: hidden; 
  padding: 0;
  font-family: monospace;

}
.category__cont{
  background: #eee;
  border-radius: 20px 0 0 20px;
  color: #999;
  display: inline-block;
  height: 40px;
  line-height: 2px;
  padding: 0 40px 0 43px;
  position: relative;
  margin: 0 10px 20px 0;
  text-decoration: none;
}
.category__cont::before {
  background: #fff;
  border-radius: 10px;
  box-shadow: inset 0 2px rgba(0, 0, 0, 0.25);
  content: '';
  height: 10px;
  left: 14px;
  position: absolute;
  width: 10px;
  top: 14px;
}

.category__cont::after {
  background: #F8F8F8;
  border-bottom: 20px solid transparent;
  border-left: 15px solid #eee;
  border-top: 20px solid transparent;
  content: '';
  position: absolute;
  right: 0;
  top: 0;
}

.category__cont:hover {
  background-color: #B3EEFF;
  color: white;
}

.category__cont:hover::after {
   border-left-color: #B3EEFF; 
}

</style>
