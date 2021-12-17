<template>
    <section class="search">
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
                <select-component title="Filter by local" />
            </div>

            <div class="search__card">
                <select-component title="Filter by Time" />
            </div>
        </div>
    </section>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
    name : 'search-component'    
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
}

section.search .search__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
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

section.search .search__card i {
    color: var(--icons-color);
}

input.search__field::placeholder {
    color: rgb(238, 238, 238);
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