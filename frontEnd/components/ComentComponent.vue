<template>
    <div class="coment__container" v-bind:class="{ 'light' : theme }">
        <h3>Usuario tal</h3>
        <p class="createdAt">15:36 - 28/12/2021</p>

        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Quo soluta animi fugiat et accusantium ullam quibusdam eaque reprehenderit ab 
            impedit odio totam odit incidunt architecto, asperiores officiis nostrum ut facere.
        </p>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name : 'coment-component',
    props : ['theme']
})

</script>

<style>

div.coment__container {
    width: 90%;
    padding: 10px;
    border-radius: 10px;

    margin: 10px auto;

    background: var(--background-dark-color2);
    color: var(--text-dark-theme-color);

    transition: background 400ms;
}

div.coment__container.light {
    background: var(--background-light-color2);
    color: var(--text-light-theme-color);
}

div.coment__container p.createdAt {
    font-size: 11pt;
    margin: 5px 10px;

    color: rgb(126, 126, 126);
}

</style>