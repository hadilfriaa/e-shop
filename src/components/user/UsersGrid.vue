<template>
    <div class="users__grid">
        <UsersItem v-for="user in usersArray" 
        :key="user._id"
        :usersObject="user"
        />
    </div>
</template>

<script>
import UsersItem from './UsersItem'
    export default {
        name: "UsersGrid",
        components: {
            UsersItem
        },
        data: function(){
            return{
            }
        },
        props: {
            usersArray: Array
        },
    }
</script>

<style lang="scss" scoped>
.users__grid{
    margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px 0em;

}
</style>