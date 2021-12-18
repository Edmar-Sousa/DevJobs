<template>
    <div class="select" 
        v-bind:class="{ 'light' : lightThemeActive }"
        v-on:click="selectedActive = !selectedActive"
    >
        <div class="select__header">
            <i class="fas" v-bind:class="icon"></i>
            <p>{{ textOfSelectedItem == '' ? title : textOfSelectedItem }}</p>
        </div>

        <div class="select__options" v-if="selectedActive">
            <ul>
                <li 
                    v-for="(item, index) in items" 
                    v-bind:key="index"
                    v-on:click="seletedItem(item)">
                    {{ item }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name : 'select-component',
    props : ['title', 'icon', 'items'],

    data() {
        return {
            lightThemeActive: false,
            selectedActive : false,
            textOfSelectedItem : ''
        }
    },

    created : function () {
        this.$nuxt.$on('changeTheme', (data : boolean) => {
            this.lightThemeActive = data
        })
    },

    methods : {
        seletedItem : function (item : string) {
            this.textOfSelectedItem = item
        }
    }
})

</script>

<style>

/* select */
div.select {
    position: relative;

    min-width: 110px;

    color: var(--text-dark-theme-color);
    cursor: pointer;
}

div.select__header {
    padding: 7px 5px;
    display: flex;
}

div.select.light {
    color: var(--text-light-theme-color);
}

div.select p {
    margin-left: 5px;
} 

div.select ul {
    list-style: none;
}

div.select ul li {
    padding: 5px;
    transition: background 400ms;
}

div.select ul li:last-child{
    border-bottom-left-radius:  5px;
    border-bottom-right-radius: 5px;
}

div.select ul li:hover {
    background: var(--primary-color);
}


div.select__options {
    position: absolute;
    width: 100%;

    background: var(--background-dark-color2);
    border-bottom-left-radius:  5px;
    border-bottom-right-radius: 5px;
}

div.select.light .select__options {
    background: var(--background-light-color2);
}

/* end-select */

</style>