<template>
    <div class="container" v-bind:class="{ 'light' : this.lightThemeActive }">
        <header-component />
        <nuxt />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    data() {
        return {
            lightThemeActive: false,
        }
    },

    created : function () {
        this.$nuxt.$on('changeTheme', (data : boolean) => {
            this.lightThemeActive = data
        })
    } 
})

</script>

<style>

div.container {
    width: 100vw;
    min-height: 100vh;

    background: var(--background-dark-color);
    font-family: Roboto, Arial, Helvetica, sans-serif;

    transition: background 400ms;
}

div.container.light {
    background: var(--background-light-color);
}

</style>
