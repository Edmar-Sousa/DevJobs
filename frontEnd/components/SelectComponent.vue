<template>
    <div class="custom-select" v-on:click="activate = !activate">
        <p>{{ selected == '' ? title : selected }}</p>

        <div class="select-items" v-if="activate">
            <div class="option" 
                v-for="(value, index) in itemsArray"
                v-bind:key="index"
                v-on:click="changeValue(value)"
            >
                {{ value }}
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

    background: var(--search-background);
}

div.option:last-child {
    border-bottom-left-radius:  5px;
    border-bottom-right-radius: 5px;
}

div.option:hover {
    background: var(--primary-color);
}

</style>