<template>
    <section class="search" v-bind:class="{ 'light' : this.lightThemeActive }">
        <div class="search__row">
            <div class="search__card">
                <i class="fas fa-search"></i>
                <input type="text" class="search__field" placeholder="Filter by title">
            </div>

            <div class="search__card">
                <button class="search__button">Search</button>
            </div>
        </div>

        <div class="search__row">
            <div class="search__card">
                <select-component 
                    title="Filter by local" 
                    icon="fa-map-marker-alt"
                    v-bind:items="['Ocara', 'Fortaleza', 'São Paulo']" />
            </div>

            <div class="search__card">
                <select-component 
                    title="Filter by Time" 
                    icon="fa-clock"
                    v-bind:items="['Part Time', 'Full time', 'Integral']"/>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name : 'search-component',

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

/* search */
section.search {
    width: 90%;
    padding: 20px 10px;
    margin: -30px auto 0;

    border-radius: 5px;

    background: var(--background-dark-color2);
    transition: background 400ms;
}

section.search.light {
    background: var(--background-light-color2);
}

section.search .search__row {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-top: 5px;
}

section.search input.search__field {
    font-size: 11pt;
    padding: 5px;
    font-family: Roboto, Arial, Helvetica, sans-serif;

    color: var(--text-dark-theme-color);

    background: none;
    border: none;
    outline: none;
}

section.search.light input.search__field {
    color: var(--text-light-theme-color);
}

section.search .search__card i {
    color: var(--icons-color);
}

input.search__field::placeholder {
    color: var(--text-dark-theme-color);
}

section.search.light input.search__field::placeholder {
    color: var(--text-light-theme-color);
}

section.search .search__button {
    padding: 7px 10px;

    background: var(--primary-color);
    color: rgb(0, 0, 0);

    font-weight: 600;
    font-family: Roboto, Arial, Helvetica, sans-serif;

    letter-spacing: 1px;

    border-radius: 5px;
    border: none;
}/* end-search */

</style>