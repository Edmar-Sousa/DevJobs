<template>
    <div class="page-container">
        <header-component />
        <search-component />

        <div class="job-container">
            <card-component />
            <card-component />
            <card-component />
        </div>

    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name : 'index'
})
</script>


<style>

div.page-container {
    width: 100vw;
    min-height: 100vh;
    background: var(--background-light-color);
}

div.job-container {
    max-width: 1200px;
    width: 100%;

    margin: 30px auto;
    padding: 30px 10px;

    display: flex;
}

</style>
