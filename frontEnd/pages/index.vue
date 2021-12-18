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
}

/* end-jobs */
</style>
