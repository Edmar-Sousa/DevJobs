<template>
    <div>
        <div class="view__details" v-bind:class="{ 'light' : lightThemeActive }">
            <back-button-component />

            <div v-if="userId == idUserLogin">
                <button class="trash" v-on:click="deleteJob">
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

            jobId       : 0,
            create_at   : '',
            description : '',
            location    : '',
            technology  : '',
            time        : '',
            title       : '',
            userId      : '',

            createdByUser : '',
            idUserLogin : 0
        }
    },

    methods : {
        backPage : function () {
            if (window.history.length > 1)
                 this.$router.go(-1)
        },

        deleteJob : function () {
            const token  = this.$store.state.token

            this.$axios.$delete(`/jobs/${this.jobId}`, {
                headers : {
                    'Authorization' : `Bearer ${token}`
                }
            })
            .then(response => {
                this.$router.replace('/')
            })
            .catch(err => {
                console.log(err)
            })
        }
    },

    created() {
        this.$nuxt.$on('changeTheme', (data : boolean) => {
            this.lightThemeActive = data
        })

        const job_id = this.$route.params.id
        const token  = this.$store.state.token

        this.idUserLogin = this.$store.state.userId

        this.$axios.$get(`/jobs/${job_id}`, { 
                headers : {
                    'Authorization' : `Bearer ${token}`
                }
            })
            .then(response => {
                this.jobId         = response[0].jobId
                this.userId        = response[0].userId
                this.create_at     = response[0].created_at
                this.description   = response[0].description
                this.location      = response[0].location
                this.technology    = response[0].technology
                this.time          = response[0].time
                this.title         = response[0].title
                this.createdByUser = response[0].userName
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