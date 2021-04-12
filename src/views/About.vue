<template>
  <div class="about__form">
    <TitlePage title="À propos"/>
  <h3>Notre mission est de fournir l’accès aux articles les plus convoités du monde de la manière la plus intelligente possible.</h3>
  <img class="sneakers__img" src="../assets/fondsneak.png" alt="">

  </div>
</template>
<script>
import TitlePage from "../components/TitlePage";
export default {
  name:"About",
  components:{
    TitlePage
  },
  methods: {
    
  }
}

</script>
<style lang="scss" scoped>
.about__form {
    width: 500px;
    height: auto;
    border: 2px solid #c4c4c4c4;
    border-radius: 8px;
    background-color: #FFFFFF;
    margin: auto;
    margin-top: 50px;
    padding: 20px;
    box-shadow: 5px 5px 5px #c4c4c4c4;
    font-family: monospace;

}
.sneakers__img{
  width: 400px;
	height: 400px;
  border-radius: 6px;
  margin-bottom: 20px;
}
</style>