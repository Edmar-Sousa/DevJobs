<template>
    <div>
        <div class="view__details">
            <div class="view__header">
                <span v-on:click="backPage" class="goBack"><i class="fas fa-arrow-left"></i> Back to previous page</span>
            </div>

            <h2 class="title">
                {{ title }}
            </h2>

            <p>
                {{ create_at }}
            </p>

            <p class="description">
                {{ description }}
            </p>

            <p class="local">
                <i class="fa fa-map-marker-alt"></i> {{ location }}
            </p>

            <p class="technology">
                <i class="fab fa-node-js"></i> {{ technology }}
            </p>

            <p class="time">
                <i class="fa fa-clock"></i> {{ time }}
            </p>
        </div>

        <coment-component />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name : 'job-details',

    data() {
        return {
            create_at   : '',
            description : '',
            location    : '',
            technology  : '',
            time        : '',
            title       : ''
        }
    },

    methods : {
        backPage : function () {
            if (window.history.length > 1)
                 this.$router.go(-1)
        },
    },

    created() {
        const job_id = this.$route.params.id

        this.$axios.$get(`/jobs/${job_id}`)
            .then(response => {
                this.create_at   = response[0].create_at
                this.description = response[0].description
                this.location    = response[0].location
                this.technology  = response[0].technology
                this.time        = response[0].time
                this.title       = response[0].title
            })
            .catch(err => {
                console.log(err)
            })
    }
})
</script>

<style>

div.view__details {
    width: 90%;
    margin: 20px auto;

    background: var(--background-dark-color2);
    color: var(--text-dark-theme-color);

    padding: 10px;
    border-radius: 10px;
}

div.view__header {
    width: 100%;

    display: flex;
    justify-content: right;
}

div.view__details span.goBack {
    cursor: pointer;
    color: var(--primary-color);
}

div.view__details p {
    margin: 10px;
}

div.view__details i {
    margin-right: 5px;
}

div.view__details h2 {
    margin: 20px 0;
}

div.view__details p.description {
    text-align: justify;
    margin-bottom: 20px;
    margin-left: 0;
}

</style>