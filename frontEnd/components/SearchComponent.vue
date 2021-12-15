<template>
    <div class="search-container" v-bind:class="{ 'dark' : theme }">
        <div class="box-search">
            <i class="fas fa-search"></i>
            <input type="text" placeholder="Filter by title">
        </div>

        <div class="box-search">
            <i class="fas fa-map-marker-alt"></i>

            <select-component 
                v-bind:theme="theme"
                title="Filter by localization" 
                v-bind:itemsArray="['CE', 'SP', 'RJ', 'PI']"/>
        </div>

        <div class="box-search">
            <i class="fas fa-clock"></i>

            <select-component 
                v-bind:theme="theme"
                title="Filter by time" 
                v-bind:itemsArray="['Full Time', 'Part Time', 'Integral']"/>
        </div>
        
        <div class="box-search">
            <button class="button-search">Search</button>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name : 'search-component',

    props : ['theme']
})

</script>

<style>

div.search-container {
    width: 90%;

    margin: -20px auto;
    border-radius: 5px;
    transition: background 400ms;

    display: flex;
    background: var(--search-light-background);
}

div.search-container.dark  {
    background: var(--search-dark-background);
}

div.search-container i {
    color: var(--primary-color);
}

div.search-container input {
    width: 90%;
    height: 35px;
    padding: 0 10px;

    font-family: Roboto, Arial, Helvetica, sans-serif;
    font-size: 12pt;

    transition: background 400ms;

    border: none;
    outline: none;
}

div.search-container.dark input {
    background: var(--search-dark-background);
    color: var(--font-light-color);
}

div.search-container div.box-search {
    flex: 1;
    padding: 20px;
    border-left: 1px solid rgba(59, 59, 59, 0.397);

    display: flex;
    align-items: center;
}

div.search-container div.box-search:first-child {
    border-left: none;
}

div.search-container div.box-search:last-child  {
    flex: none;
    border-left: none;
    justify-content: right;
}

div.search-container button.button-search {
    border: none;

    padding: 10px 20px;
    border-radius: 5px;

    font-weight: 500;
    font-family: Roboto, Arial, Helvetica, sans-serif;

    color: var(--font-light-color);
    background: var(--primary-color);

    cursor: pointer;
}

button.button-search:hover {
    transform: scale(0.95);
}

@media (max-width: 738px) {
    div.search-container {
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr;
        grid-template-areas: "input button"
                             "card1 card2";

        /** */
    }

    div.search-container div.box-search {
        border: none;
    }

    div.search-container div.box-search:nth-child(1) {
        grid-area: input;
    }

    div.search-container div.box-search:nth-child(4) {
        grid-area: button;
    }
}

</style>