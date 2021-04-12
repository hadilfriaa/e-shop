<template>
    <div class="dash--admin">
       
        <TitlePage title="Gérer les utilisateurs"/>
        <div class="user">
            <router-link class="btn--create" :to="{name: 'NewUserAd'}">
                    Créer un utilisateur
            </router-link>

            <UsersGrid :usersArray="usersFromApi" />
            
        </div>
       
    </div>
</template>

<script>
import Button from '../components/Button.vue';
import TitlePage from '../components/TitlePage';
import UsersGrid from '../components/user/UsersGrid';
import ApiUsers from '../mixins/ApiUsers'

    export default {
     name: "DashUser",
        components: {
            TitlePage,
            UsersGrid,
            Button,
            
        },
        data: function () {
            return {
                usersFromApi: [],
               


            };
        },
        mixins:[ApiUsers],
        created(){
            this.getAllUser()
                .then((data) => {
                    this.usersFromApi = data;
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