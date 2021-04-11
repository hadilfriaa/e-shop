<template>
    <div class="dash--admin">
       
        <TitlePage title="Gérer les utilisateurs"/>
        <div class="user">
            <UsersGrid :usersArray="usersFromApi" />
            <router-link :to="{name: 'NewUserAd'}">
                <button class="btn btn-black">
                    Créer un utilisateur
                </button>
            </router-link>
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
    
</style>