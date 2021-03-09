<template>
    <div>
        <TitlePage title="Mon compte"/>
    </div>
</template>

<script>
    import TitlePage from "../components/TitlePage";
    import VueJwtDecode from "vue-jwt-decode";

    export default {
        components: {
            TitlePage
        },
        created(){
            const token = localStorage.getItem('token');
            if(token){
                const decodedToken= VueJwtDecode.decode(token)
                fetch(`http://localhost:3030/api/v1/users`)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>