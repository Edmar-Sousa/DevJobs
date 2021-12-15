<template>
    <div class="custom-select" v-on:click="activate = !activate">
        <p>{{ selected == '' ? title : selected }}</p>

        <div class="select-items" v-if="activate">
            <div class="option" 
                v-bind:class="{ 'dark' : theme }"
                v-for="(value, index) in itemsArray"
                v-bind:key="index"
                v-on:click="changeValue(value)"

            >
                <p>{{ value }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name : 'select-component',

    props : {
        title : String,
        itemsArray : [],
        theme : Boolean
    },

    data() {
        return {
            activate : false,
            selected : '',
        }
    },

    methods : {
        changeValue : function (value : string) {
            this.selected = value
        }
    }
})

</script>

<style>

div.custom-select {
    width: 90%;
    height: 35px;

    cursor: pointer;

    font-family: Roboto, Arial, Helvetica, sans-serif;

    flex-direction: column;
    position: relative;

    line-height: 35px;
}

div.custom-select p {
    padding: 0 10px;
    font-size: max(12px, 1.2vw);
}

div.select-items {
    width: 100%;
    position: absolute;

    border-bottom-left-radius:  5px;
    border-bottom-right-radius: 5px;

    display: flex;
    flex-direction: column;
}

div.option {
    width: 100%;
    padding: 3px 10px;

    transition: background 400ms;

    z-index: 5;
    background: var(--search-light-background);
}

div.option.dark {
    background: var(--search-dark-background);
}

div.option:last-child {
    border-bottom-left-radius:  5px;
    border-bottom-right-radius: 5px;
}

div.option:hover {
    background: var(--primary-color);
}

</style>