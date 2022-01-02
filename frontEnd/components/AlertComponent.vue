<template>
    <div class="alert__container">
        <i class="fas fa-exclamation-circle"></i> {{ message }}
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name : 'alert-component',

    props : ['message']
})

</script>

<style>

div.alert__container {
    max-width: 600px;
    width: 90%;

    position: absolute;
    padding: 7px 10px;

    border: 1px solid rgb(112, 1, 1);
    border-radius: 3px;

    color: rgb(230, 230, 230);
    top: 100px;

    animation: animation-enter 3s forwards;
    background: rgb(192, 4, 4);
}


@keyframes animation-enter {
    0% {
        opacity: 0.5;
        top: -100px;
    }

    30% {
        opacity: 1;
        top: 100px;
    }

    70% {
        opacity: 1;
        top: 100px;
    }

    100% {
        opacity: 0.5;
        top: -100px;
    }
}

</style>