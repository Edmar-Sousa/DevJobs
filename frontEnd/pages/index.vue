<template>
    <div>
        <nuxt />
        <search-component
            v-on:filterByTitle="filterByTitle"
            v-on:changeLocal="filterByLocal"
            v-on:changeTime ="filterByTime"
        />

        <div class="linkContainer">
            <nuxt-link to="/newJob" class="newJob">
                <i class="fas fa-plus-circle"></i>
                create a new job
            </nuxt-link>
        </div>

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

interface JobType {
    jobId       : string
    created_at  : string
    description : string
    technology  : string
    time        : string
    title       : string
    location    : string
}

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
                (job : JobType) => job.title.toLowerCase().includes(this.titleFilter.toLowerCase())
            )
        },

        applyLocalFilter : function () {
            return this.applyTimeFilter().filter(
                (job : JobType) => this.localFilter == '' || this.localFilter == 'All' ? job : job.location == this.localFilter
            )
        },

        applyTimeFilter : function () {
            return this.jobsList.filter(
                (job : JobType) => this.timeFilter == '' || this.timeFilter == 'All' ? job : job.time == this.timeFilter
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
        const token = this.$store.state.token

        this.$axios.$get('/jobs', 
            { 
                headers : {
                    'Authorization' : `Bearer ${token}`
                }
            })
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

div.linkContainer {
    width: 90%;
    padding-top: 20px;
    margin: auto;
}

a.newJob {
    color: var(--primary-color);
    text-decoration: none;
}

a.newJob:hover {
    color: var(--hover-color);
}

/* end-jobs */
</style>
