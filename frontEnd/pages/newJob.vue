<template>
    <div class="form__container" v-bind:class="{ 'light' : lightThemeActive }">
        <form>
            <div class="form__fieldGroup">
                <p>Title:</p>
                <input type="text">
            </div>

            <div class="form__fieldGroup">
                <p>Description:</p>
                <textarea></textarea>
            </div>

            <div class="form__fieldGroup form__fieldGroup--selects">
                <select-component 
                    title="Select Technology"
                    icon="fa-microchip"
                    v-bind:items="['python', 'java', 'C/C++', 'Rust']"/>

                <select-component 
                    title="Select by Time" 
                    icon="fa-clock"
                    v-bind:items="['Part time', 'Full time', 'Integral']" />

                <select-component 
                    title="Select by Local"
                    icon="fa-map-marker-alt"
                    v-bind:items="statesOfBrazil"/>
            </div>

            <div class="form__fieldGroup">
                <button class="search__button">Search</button>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name : 'job-form',

    data() {
        return {
            lightThemeActive: false,
            statesOfBrazil : []
        }
    },

    created : function () {
        this.$nuxt.$on('changeTheme', (data : boolean) => {
            this.lightThemeActive = data
        })

        this.$axios.$get("http://www.geonames.org/childrenJSON?geonameId=3469034").then(statesReponse => {
            this.statesOfBrazil = statesReponse.geonames.map((state : any) => {
                return state.adminCodes1.ISO3166_2
            })
        })
    },
})
</script>

<style>

div.form__container {
    width: 90%;

    padding: 30px 10px;
    margin: 20px auto;
    margin-bottom: 0;

    border-radius: 5px;

    background: var(--background-dark-color2);
}

div.form__container.light {
    background: var(--background-light-color2);
}

div.form__container div.form__fieldGroup {
    margin: 20px 0;
}

div.form__fieldGroup p {
    color: var(--text-dark-theme-color);
    margin-bottom: 10px;
}

div.form__container.light div.form__fieldGroup p {
    color: var(--text-light-theme-color);
}

div.form__fieldGroup input {
    width: 100%;
    height: 30px;

    outline: none;
    font-size: 12pt;
    padding: 0 5px;

    background: none;
    border: 1px solid rgba(0, 0, 0, 0.493);
    border-radius: 5px;

    color: var(--text-dark-theme-color);
}

div.form__fieldGroup textarea {
    width: 100%;
    height: 200px;
    resize: none;

    outline: none;
    color: var(--text-dark-theme-color);

    padding: 5px;

    font-size: 12pt;

    background: none;
    border: 1px solid rgba(0, 0, 0, 0.493);
    border-radius: 5px;
}

div.form__container.light :is(textarea, input) {
    color: var(--text-light-theme-color);
}

div.form__fieldGroup .search__button {
    padding: 7px 10px;

    background: var(--primary-color);
    color: rgb(0, 0, 0);

    font-weight: 600;
    font-family: Roboto, Arial, Helvetica, sans-serif;

    letter-spacing: 1px;

    cursor: pointer;

    border-radius: 5px;
    border: none;
}

div.form__fieldGroup .search__button:hover {
    transform: scale(0.95);
}

@media (min-width: 560px) {
    .form__fieldGroup--selects {
        display: flex;
        justify-content: space-around;
    }
}

</style>