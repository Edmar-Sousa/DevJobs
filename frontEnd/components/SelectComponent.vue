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
            <div class="options__container">
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
    display: grid;

    grid-template-rows: repeat(auto-fit, 40px);
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

    height: 100%;
    
    list-style: none;
}

div.select ul li {
    padding: 5px;
    line-height: 35px;
    transition: background 400ms;
}


div.select ul li:hover {
    background: var(--primary-color);
}


div.select__options {
    position: fixed;
    width: 100%;

    top:    0;
    left:   0;
    right:  0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--background-dark-color2);

    border-bottom-left-radius:  5px;
    border-bottom-right-radius: 5px;
}

div.select div.options__container {
    width: 90%;
    height: 90%;

    overflow-y: auto;
}

div.select.light .select__options {
    background: var(--background-light-color2);
}

/* end-select */

</style>