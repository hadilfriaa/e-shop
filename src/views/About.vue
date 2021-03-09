<template>
  <div class="about">
    <TitlePage title="Page about"/>
    <Button buttonClass="btn btn-black" btn__text="Click Me" v-bind:btn__function="clickMe" />
    <!-- <ProductCard :ProductObject="myObject"/> -->
  </div>
</template>
<script>
import TitlePage from "../components/TitlePage";
import Button from "../components/Button";
import ProductsItem from "../components/product/ProductsItem";
export default {
  name:"About",
  components:{
    TitlePage, Button,ProductsItem
  },
  data: function() {
    return {
      myObject:{title:"dsdsd", price:"20"}
    }
  },
  methods: {
    clickMe: function() {
      console.log("its clicked");
    }
  }
}



</script>