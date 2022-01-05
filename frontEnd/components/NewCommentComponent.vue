<template>
    <div class="newComment__container" v-bind:class="{ 'light' : lightThemeActive }">
        <h5>New comment:</h5>
        <textarea class="comment__body" v-model="body"></textarea>
        <button class="AddComment" v-on:click="addComment">Add Comment</button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name : 'newComment-component',

    props : ['jobId'],

    data() {
        return {
            lightThemeActive : false,
            body : ''
        }
    },

    created() {
        this.$nuxt.$on('changeTheme', (data : boolean) => {
            this.lightThemeActive = data
        })
    },

    methods : {
        addComment : function () {
            const userId = this.$store.state.userId,
                  jobId  = this.jobId,
                  body   = this.body,
                  token  = this.$store.state.token

            this.$axios.$post('/comment', { jobId, userId, body }, {
                headers : {
                    'Authorization' : `Bearer ${token}`
                }
            })
            .then(response => {

                const comment = {
                    userName : this.$store.state.userName,
                    userId,
                    jobId,
                    body
                }

                
                this.$emit('newComment', comment)
            })
            .catch(err => {
                console.log(err)
            })
        }
    }
})

</script>

<style>

div.newComment__container h5 {
    margin: 10px 0;
}

div.newComment__container {
    width: 100%;
}

div.newComment__container textarea {
    width: 100%;
    height: 200px;
    resize: none;
    background: none;
    padding: 5px;
    outline: none;

    color: var(--text-dark-theme-color);

    border: 1px solid rgba(0, 0, 0, 0.493);
    border-radius: 5px;
}

div.newComment__container.light textarea {
    color: var(--text-light-theme-color);
}

div.newComment__container button.AddComment {
    padding: 10px;
    border: none;
    border-radius: 5px;

    cursor: pointer;

    background: var(--primary-color);
}

div.newComment__container button.AddComment:hover {
    transform: scale(0.95);
}

</style>