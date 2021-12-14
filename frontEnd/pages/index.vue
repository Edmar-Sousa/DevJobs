<template>
    <div class="page-container" v-bind:class="{ 'dark' : pageLightTheme }">
        <header-component v-on:changeTheme="changeTheme" />
        <search-component v-bind:theme="pageLightTheme" />

        <div class="job-container">
            <card-component v-bind:theme="pageLightTheme" />
            <card-component v-bind:theme="pageLightTheme" />
            <card-component v-bind:theme="pageLightTheme" />
        </div>

    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name : 'index',

    data() {
        return {
            pageLightTheme : true
        }
    },

    methods : {
        changeTheme : function (lightTheme : boolean) {
            this.pageLightTheme = lightTheme
        }
    }
})
</script>


<style>

div.page-container {
    width: 100vw;
    min-height: 100vh;

    transition: background 400ms;

    background: var(--background-light-color);
    color: var(--font-dark-color);
}

div.page-container.dark {
    background: var(--background-dark-color);
    color: var(--font-light-color);
}

div.job-container {
    max-width: 1200px;
    width: 100%;

    margin: 30px auto;
    padding: 30px 10px;

    display: flex;
}

</style>
