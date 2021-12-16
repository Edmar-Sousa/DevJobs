<template>
    <div class="container">
        <header class="header">
            <button class="header__button">
                <i class="fa fa-sun"></i>
                LIGHT
            </button>
        </header>

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
                    <div class="select">
                        <i class="fas fa-map-marker-alt"></i>
                        <p>Filter by local</p>
                    </div>
                </div>

                <div class="search__card">
                    <div class="select">
                        <i class="fas fa-clock"></i>
                        <p>Filter by time</p>
                    </div>
                </div>
            </div>
            
        </section>

        <main class="jobs">
            <div class="jobs__card">
                <div class="jobs__card--icon">
                    <i class="fab fa-python"></i>
                </div>

                <h2>Python software developer</h2>
            </div>

        </main>

    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name : 'index',
})
</script>


<style>

div.container {
    width: 100vw;
    min-height: 100vh;

    background: var(--background-dark-color);
    font-family: Roboto, Arial, Helvetica, sans-serif;
}

/* header */
header.header {
    width: 100%;
    height: 80px;

    background: var(--primary-color);
    border-bottom-left-radius: 50px;

    display: flex;
    justify-content: right;

    padding: 10px 10px 0;
}

header.header .header__button {
    height: 30px;

    background: none;
    border: none;

    font-family: Roboto, Arial, Helvetica, sans-serif;
    font-weight: 600;

    padding: 5px 10px;
} /* end-header */

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
    color: rgb(43, 40, 226);
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
}
/* end-search */

/* select */
div.select {
    display: flex;
    padding: 7px 5px;

    color: var(--text-dark-theme-color);
}

div.select p {
    margin-left: 5px;
}

/* end-select */

/* jobs */

main.jobs {
    width: 90%;
    padding: 20px 0;

    margin: 20px auto;
    border-radius: 5px;
}

main.jobs .jobs__card {
    width: 100%;
    padding: 10px;

    border-radius: 5px;

    background: var(--background-dark-color2);
}

main.jobs .jobs__card--icon {
    width: 45px;
    height: 45px;

    padding: 5px 7px;

    background: rgb(197, 132, 10);
    border-radius: 10px;
}

main.jobs .jobs__card--icon i {
    font-size: 35px;
}

/* end-jobs */
</style>
