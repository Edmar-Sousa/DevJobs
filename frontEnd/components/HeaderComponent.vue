<template>
    <header class="header">
        <h1>DevJobs</h1>

        <button class="header__button" v-on:click="changeTheme" >
            <i class="fa" v-bind:class="classFromIcon"></i>
            {{ this.lightThemeActive ? 'DARK' : 'LIGHT' }}
        </button>
    </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name : 'header-component',

    data() {
        return {
            classFromIcon : 'fa-sun',
            lightThemeActive: false,
        }
    },

    methods : {
        changeTheme : function () {
            this.lightThemeActive = !this.lightThemeActive
            this.classFromIcon = this.lightThemeActive ? 'fa-moon' : 'fa-sun'

            this.$store.commit('setTheme', this.lightThemeActive)
            this.$nuxt.$emit('changeTheme', this.lightThemeActive)
        }
    }
})

</script>

<style>

/* header */
header.header {
    width: 100%;
    height: 80px;

    background: var(--primary-color);
    border-bottom-left-radius: 50px;

    display: flex;
    justify-content: space-between;

    padding: 20px;
}

header.header h1 {
    font-size: 2rem;
}

header.header .header__button {
    height: 30px;

    background: none;
    border: none;

    font-family: Roboto, Arial, Helvetica, sans-serif;
    font-weight: 600;

    padding: 5px 10px;
} /* end-header */

</style>