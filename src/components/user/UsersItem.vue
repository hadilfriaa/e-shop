<template>
    <div class="user__card">
        <div class="cards__item">
            <div class="cards__item__link" >
                <router-link class="link" :to="{name: 'UserAd', params:{id:usersObject._id}}">
                    <h2>
                        {{usersObject.firstName}}
                    </h2>
                </router-link>
                <div class="cards__item__info">
                    <p  class="cards__item__text"> Nom: {{usersObject.lastName}} </p>
                    <p  class="cards__item__text"> Prenom: {{usersObject.firstName}} </p>
                    <p  class="cards__item__text"> Mail: {{usersObject.email}} </p>
                    <p  class="cards__item__text"> Telephone: {{usersObject.telephone}} </p>
                </div>
            </div>

        </div>
        
    </div>
</template>

<script>
    export default {
        name: "UsersItem",
        components: {
        },
        data: function(){
            return{
            }
        },
        props: {
            usersObject: Object
        },
         methods:{
          
            
        }
    }
</script>

<style lang="scss" scoped>
.cards__item {
    height: auto;
    width: 300px;
    display: flex;
    flex: 1;
    margin: auto;
    border-radius: 10px;
    font-family: monospace;

}
.cards__item__link {
    background-color: #FFFFFF;
  display: flex;
  flex-flow: column;
  width: 100%;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
  -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
  filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
  border-radius: 10px;
  overflow: hidden;
  text-decoration: none;
font-family: monospace;

}
.link{
    color: #2C3E50;
    text-align: center ;
    text-decoration: none;
    padding: 20px;
    font-family: monospace;

}

.cards__item__info {
  padding: 20px 30px 30px;
}

.cards__item__text {
  color: #000000;
  font-size: 18px;
  line-height: 24px;
  font-weight: bold;
  font-family: monospace;

}
</style>