<template>
    <div>
        
    <TitlePage title="Page Contact"/>
    <Button buttonClass="btn btn-black" btn__text="Click Me" v-bind:btn__function="clickMe" />
    </div>
</template>

<script>
    import TitlePage from "../components/TitlePage";
    import Button from "../components/Button";

    export default {
    name: "Contact",
        components: {
            TitlePage,
            Button
        },
        data: function() {
            return {
                title: "Page contact",
                btn__text: "Clique ici"
            }
        }
    }
</script>