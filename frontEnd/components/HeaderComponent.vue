<template>
    <header class="header">
        <button class="header__button">
            <i class="fa fa-sun"></i>
            LIGHT
        </button>
    </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name : 'header-component'
})

</script>

<style>

/* header */
header.header {
    width: 100%;
    height: 80px;

    background: var(--primary-color);
    border-bottom-left-radius: 50px;

    display: flex;
    justify-content: right;

    padding: 10px 10px 0 0;
}

header.header .header__button {
    height: 30px;

    background: none;
    border: none;

    font-family: Roboto, Arial, Helvetica, sans-serif;
    font-weight: 600;

    padding: 5px 10px;
} /* end-header */

</style>