<template>
    <div>
        <nuxt />
        <search-component />

        <main class="jobs">
            <card-component />
            <card-component />
            <card-component />
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

/* jobs */

main.jobs {
    width: 90%;
    padding: 20px 0;

    margin: auto;
    border-radius: 5px;

    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
}

/* end-jobs */
</style>
