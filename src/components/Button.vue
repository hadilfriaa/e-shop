<template>
    <div>
        <button @click="btn__function" :class="buttonClass"> {{ btn__text }} </button>
    </div>
</template>

<script>
export default {
    name: "Button",
    props: {
        btn__text: {
            required: true,
            type: String
        },
        btn__function: {
            type: Function,
            required: true
        },
        buttonClass: {
            type: String
        }
    }
}
</script>

<style lang="scss" scoped>
    .btn__about {
        padding: 1em 2em;
        background: #fff;
        border: 2px solid #35495E;
        border-radius: 3px;
        color: #35495E;
        font-family: "Quicksand", sans-serif;
        font-size: 1em;
        font-weight: 700;
        letter-spacing: 0.02em;
        line-height: 1;
        text-decoration: none;
        text-transform: uppercase;
        cursor: pointer;
        transition: 0.3s;
    }
    .btn__about:hover {
    background: #35495E;
    color: #fff;
  }


</style>