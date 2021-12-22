<template>
    <div>
        <nuxt />
        <search-component />

        <main class="jobs">
            <component 
                v-for="(job, index) in jobsList"
                v-bind:key="index"
                v-bind:is="'card-component'"

                v-bind:jobId      ="job.jobId"
                v-bind:createdAt  ="job.created_at"
                v-bind:description="job.description"
                v-bind:technology ="job.technology"
                v-bind:time       ="job.time"
                v-bind:title      ="job.title"
            />
        </main> 

    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name : 'index',

    data() {
        return {
            jobsList : []
        }
    },

    created() {
        this.$axios.$get('http://localhost:8000/jobs')
            .then((response : any) => this.jobsList = response)
            .catch((err : any) => {
                console.log(err)
            })
    }
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
