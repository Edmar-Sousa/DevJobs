<template>
    <div class="jobs__card" v-bind:class="{ 'light' : this.lightThemeActive }">
        <div class="jobs__card--icon">
            <i class="fab fa-python"></i>
        </div>

        <div>
            <p class="jobs__card--date">
                {{ createdAt }} - {{ time }}
            </p>

            <h2>{{ title }}</h2>
            <p>{{ description }}</p>

            <p class="jobs__card--local">{{ location }}</p>

            <div class="right-align">
                <button class="jobs__button">Details</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name : 'card-component',

    props : [
        'jobId', 'createdAt', 'description', 
        'technology', 'time', 'title', 'location'
    ],

    data() {
        return {
            lightThemeActive: false,
        }
    },

    created : function () {
        this.$nuxt.$on('changeTheme', (data : boolean) => {
            this.lightThemeActive = data
        })
    } 
})

</script>

<style>

div.jobs__card {
    width: 100%;
    padding: 10px;

    margin: 10px 0;

    border-radius: 5px;

    background: var(--background-dark-color2);
    color: var(--text-dark-theme-color);

    transition: background 400ms;
}

div.jobs__card.light {
    background: var(--background-light-color2);
    color: var(--text-light-theme-color);
}

div.jobs__card h2 {
    margin-top: 10px;
    font-size: 2.1rem;
}

div.jobs__card p {
    margin-top: 10px;
    font-size: 1.5rem;
}

p.jobs__card--info {
    font-size: 1.1rem;
}

.jobs__card--date {
    color: rgb(121, 121, 121);
}

.jobs__card--local {
    font-size: 1.1rem;
    color: var(--icons-color);
}

.jobs__button {
    margin-top: 10px;
    padding: 5px 20px;
    border-radius: 5px;
    border: none;
    background: var(--primary-color);
}

.right-align {
    width: 100%;
    display: flex;
    justify-content: right;
}

.jobs__card--icon {
    width: 45px;
    height: 45px;

    padding: 5px 7px;

    background: rgb(197, 132, 10);
    border-radius: 10px;
}

.jobs__card--icon i {
    font-size: 35px;
}

</style>