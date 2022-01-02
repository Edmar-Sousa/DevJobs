<template>
    <div>
        <div class="view__details" v-bind:class="{ 'light' : lightThemeActive }">
            <div class="view__header">
                <span v-on:click="backPage" class="goBack">
                    <i class="fas fa-arrow-left"></i> Back to previous page
                </span>
            </div>

            <div>
                <button class="trash">
                    <i class="fas fa-trash"></i>
                </button>
            </div>

            <div class="header__details">
                <h2 class="title">{{ title }}</h2>
                <p>{{ create_at }}</p>
            </div>

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

            <div class="user__details">
                <h4>Created: {{ createdByUser }}</h4>
            </div>
        </div>

        <coment-component v-bind:theme="lightThemeActive" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name : 'job-details',

    data() {
        return {
            lightThemeActive : false,

            create_at   : '',
            description : '',
            location    : '',
            technology  : '',
            time        : '',
            title       : '',

            createdByUser : ''
        }
    },

    methods : {
        backPage : function () {
            if (window.history.length > 1)
                 this.$router.go(-1)
        },
    },

    created() {
        this.$nuxt.$on('changeTheme', (data : boolean) => {
            this.lightThemeActive = data
        })

        this.createdByUser = this.$store.state.userName

        const job_id = this.$route.params.id
        const token  = this.$store.state.token

        this.$axios.$get(`/jobs/${job_id}`, { 
                headers : {
                    'Authorization' : `Bearer ${token}`
                }
            })
            .then(response => {
                this.create_at   = response[0].created_at
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

    transition: background 400ms;
}

div.view__details.light {
    background: var(--background-light-color2);
    color: var(--text-light-theme-color);
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

button.trash {
    padding: 5px;
    padding-left: 10px;

    border-radius: 3px;
    cursor: pointer;

    background: none;
    color: rgb(216, 25, 25);

    border: 1px solid #0000;

    text-align: center;
}

button.trash:hover {
    border: 1px solid rgb(216, 25, 25);
    box-shadow: 0 0 6px rgb(216, 25, 25);
}

div.view__details div.user__details {
    width: 100%;
    margin-top: 30px;
}

div.header__details {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

div.header__details p {
    color: rgb(139, 139, 139);
}

</style>