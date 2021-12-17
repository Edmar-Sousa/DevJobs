<template>
    <div class="select">
        <i class="fas fa-map-marker-alt"></i>
        <p>{{ title }}</p>
    </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
    name : 'select-component',

    props : ['title']
})

</script>

<style>

/* select */
div.select {
    display: flex;
    padding: 7px 5px;

    color: var(--text-dark-theme-color);
}

div.select p {
    margin-left: 5px;
} /* end-select */

</style>