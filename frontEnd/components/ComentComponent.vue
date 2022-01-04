<template>
    <div class="coment__container" v-bind:class="{ 'light' : theme }">
        <div class="comment__header">
            <h3>{{ userName }}</h3>

            <div v-if="userId == userIdLogin">
                <button class="trash" v-on:click="deleteComment">
                    <i class="fas fa-trash"></i>
                </button>
            </div>

        </div>
        <p class="createdAt">{{created_at }}</p>

        <p>
            {{ body }}
        </p>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name : 'coment-component',
    props : ['theme', 'body', 'userId','commentId', 'userName', 'created_at'],

    data() {
        return {
            userIdLogin : 0
        }
    },

    methods : {
        deleteComment : function () {
            const token  = this.$store.state.token

            this.$axios.$delete(`/comment/${this.commentId}`, {
                headers : {
                    'Authorization' : `Bearer ${token}`
                } 
            })
            .then(response => {
                this.$router.replace('/')
            })
            .catch(err => {
                
            })
        }
    },

    created() {
        this.userIdLogin = this.$nuxt.$store.state.userId
    }
})

</script>

<style>

div.coment__container {
    width: 90%;
    padding: 10px;
    border-radius: 10px;

    margin: 10px auto;

    background: var(--background-dark-color2);
    color: var(--text-dark-theme-color);

    transition: background 400ms;
}

div.comment__header {
    width: 100%;

    display: flex;
    justify-content: space-between;
}

div.coment__container.light {
    background: var(--background-light-color2);
    color: var(--text-light-theme-color);
}

div.coment__container p.createdAt {
    font-size: 11pt;
    margin: 5px 10px;

    color: rgb(126, 126, 126);
}

div.coment__container button.trash {
    padding: 5px;

    border-radius: 3px;
    cursor: pointer;

    background: none;
    color: rgb(216, 25, 25);

    border: 1px solid #0000;

    text-align: center;
}

div.coment__container button.trash:hover {
    border: 1px solid rgb(216, 25, 25);
    box-shadow: 0 0 6px rgb(216, 25, 25);
}

</style>