<template>
    <div class="contact__form">
    <TitlePage title="Contactez nous par mail !"/>

        <h4 class="service"> Service Client : </h4>
        <h5 class="service"> service-client@hx.fr</h5>

        <h4> Support : </h4>
        <h5> support@hx.fr</h5>
    </div>
</template>

<script>
    import TitlePage from "../components/TitlePage";

    export default {
    name: "Contact",
        components: {
            TitlePage,
        },
        data: function() {
            return {
                title: "Page contact",
            }
        }
    }
</script>
<style lang="scss" scoped>
.contact__form {
    width: 500px;
    height: 400px;
    border: 2px solid #c4c4c4c4;
    border-radius: 8px;
    background-color: #FFFFFF;
    margin: auto;
    margin-top: 50px;
    padding: 20px;
    box-shadow: 5px 5px 5px #c4c4c4c4;
}

</style>