<template>
    <div class="search-container">
        <div class="box-search">
            <i class="fas fa-search"></i>
            <input type="text" placeholder="Filter by title">
        </div>

        <div class="box-search">
            <i class="fas fa-map-marker-alt"></i>

            <select-component 
                title="Filter by localization" 
                v-bind:itemsArray="['CE', 'SP', 'RJ', 'PI']"/>
        </div>

        <div class="box-search">
            <i class="fas fa-clock"></i>

            <select-component 
                title="Filter by time" 
                v-bind:itemsArray="['Full Time', 'Part Time', 'Integral']"/>
            
            <button class="button-search">Search</button>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name : 'search-component'
})

</script>

<style>

div.search-container {
    width: 90%;

    margin: -20px auto;
    border-radius: 5px;

    display: flex;

    background: var(--search-background);
}

div.search-container i {
    color: var(--primary-color);
}

div.search-container input {
    width: 90%;
    height: 35px;
    padding: 0 5px;

    font-family: Roboto, Arial, Helvetica, sans-serif;
    font-size: 12pt;

    border: none;
    outline: none;
}

div.search-container div.box-search {
    flex: 1;
    padding: 20px;
    border-right: 1px solid rgba(59, 59, 59, 0.397);

    display: flex;
    align-items: center;
}

div.search-container div.box-search:last-child {
    border-right: none;
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

</style>