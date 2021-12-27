<template>
    <div>
        <nuxt />
        <search-component
            v-on:filterByTitle="filterByTitle"
            v-on:changeLocal="filterByLocal"
            v-on:changeTime ="filterByTime"
        />

        <main class="jobs">
            <component 
                v-for="(job, index) in filteredJobs"
                v-bind:key="index"
                v-bind:is="'card-component'"

                v-bind:jobId      ="job.jobId"
                v-bind:createdAt  ="job.created_at"
                v-bind:description="job.description"
                v-bind:technology ="job.technology"
                v-bind:time       ="job.time"
                v-bind:title      ="job.title"
                v-bind:location   ="job.location"
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
            titleFilter : '',
            localFilter : '',
            timeFilter  : '',
            jobsList : [],
        }
    },

    computed : {
        filteredJobs : function () : any {
            return this.applyFilter()
        }
    },

    methods : {
        applyFilter : function () {
            return this.applyTitleFilter()
        },

        applyTitleFilter : function () {
            return this.applyLocalFilter().filter(
                job => job.title.toLowerCase().includes(this.titleFilter.toLowerCase())
            )
        },

        applyLocalFilter : function () {
            return this.applyTimeFilter().filter(
                job => this.localFilter == '' ? job : job.location == this.localFilter
            )
        },

        applyTimeFilter : function () {
            return this.jobsList.filter(
                job => this.timeFilter == '' ? job : job.time == this.timeFilter
            )
        },


        filterByLocal : function (value : string) {
            this.localFilter = value
        },

        filterByTime : function (value : string) {
            this.timeFilter = value
        },

        filterByTitle : function (value : string) {
            this.titleFilter = value
        },
    },

    created() {
        this.$axios.$get('/jobs')
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
