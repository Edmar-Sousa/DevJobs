<template>
    <header class="header">
        <button v-on:click="changeTheme">
            {{ pageLightTheme ? 'DARK' : 'LIGHT' }}
            <i class="fas" v-bind:class="iconThemeClass"></i>
        </button>
    </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name : 'header-component',

    data() {
        return {
            pageLightTheme : true,
            iconThemeClass : 'fa-moon' // 'fa-sun'
        }
    },

    methods : {
        changeTheme : function() {
            this.pageLightTheme = !this.pageLightTheme
            this.iconThemeClass =  this.pageLightTheme ? 'fa-moon' : 'fa-sun'
        }
    }
})
</script>

<style>

header.header {
    width: 100%;
    height: 80px;

    border-bottom-left-radius: 50px;
    background: var(--primary-color);

    display: flex;
    justify-content: right;

    padding: 0 30px;
}

header.header button {
    background: none;
    border: none;
    font-family: Roboto, Arial, Helvetica, sans-serif;
    font-weight: 500;
    color: var(--font-light-color);
}

header.header button i {
    margin-left: 5px;
}

</style>