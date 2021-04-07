<template>
    <div class="user__card">
        <router-link :to="{name: 'UserAd', params:{id:usersObject._id}}">
            <h2>
                {{usersObject.firstName}}
            </h2>
        </router-link>
        <div>
          <p> Nom: {{usersObject.lastName}} </p>
          <p> Mail: {{usersObject.email}} </p>
          <p> Telephone: {{usersObject.telephone}} </p>
          <p> Adresse: {{usersObject.rue}}
                    {{usersObject.cp}}
                    {{usersObject.ville}}
            </p>
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
</style>