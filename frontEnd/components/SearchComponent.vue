<template>
    <section class="search" v-bind:class="{ 'light' : this.lightThemeActive }">
        <div class="search__row">
            <div class="search__card">
                <i class="fas fa-search"></i>
                <input type="text" class="search__field" v-model="searchValue" placeholder="Filter by title">
            </div>

            <div class="search__card">
                <button class="search__button" v-on:click="filterByTitle">Search</button>
            </div>
        </div>

        <div class="search__row">
            <div class="search__card">
                <select-component 
                    title="Filter by local" 
                    icon="fa-map-marker-alt"
                    v-bind:items="statesOfBrazil"
                    v-on:changeSelect="changeLocal" />
            </div>

            <div class="search__card">
                <select-component 
                    title="Filter by Time" 
                    icon="fa-clock"
                    v-bind:items="['Part time', 'Full time', 'Integral']"
                    v-on:changeSelect="changeTime" />
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
            searchValue : '',
            statesOfBrazil : []
        }
    },

    created : function () {
        this.lightThemeActive = this.$store.state.lightThemeActive

        this.$nuxt.$on('changeTheme', (data : boolean) => {
            this.lightThemeActive = data
        })

        this.$axios.$get('http://www.geonames.org/childrenJSON?geonameId=3469034').then(statesReponse => {
            this.statesOfBrazil = statesReponse.geonames.map((state : any) => {
                return state.adminCodes1.ISO3166_2
            })
        })
    },

    methods : {
        changeLocal : function (value : string) {
            this.$emit('changeLocal', value)
        },

        changeTime : function (value : string) {
            this.$emit('changeTime', value)
        },

        filterByTitle : function () {
            this.$emit('filterByTitle', this.searchValue)
        }
    }
})

</script>

<style>

/* search */
section.search {
    width: 90%;
    padding: 20px 10px;
    margin: -30px auto;
    margin-bottom: 0;

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
}

@media (min-width: 760px) {
    section.search {
        display: flex;
        justify-content: space-around;
    }

    div.search__row {
        width: 40%;
    }

    div.search__row:last-child {
        margin-left: 20px;
    }
}

/* end-search */

</style>