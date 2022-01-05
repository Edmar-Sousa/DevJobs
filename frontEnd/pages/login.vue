<template>
    <div class="form__container" v-bind:class="{ 'light' : lightThemeActive }">
        <div class="modal" v-if="showModal">
            <h3><i class="far fa-check-circle"></i> Registro registred with success</h3>
        </div>

        <alert-component v-if="showMessage" v-bind:message="message" />

        <h2>DevJob - {{ loginOrRegister ? 'Login' : 'Register' }}</h2>

        <form v-on:submit.prevent>
            <fieldset v-if="loginOrRegister">
                <div class="form__group">
                    <p>Email:</p>
                    <input type="text" v-model="email">
                </div>

                <div class="form__group">
                    <p>Password:</p>
                    <input type="password" v-model="password">
                </div>

                <div class="form__group">
                    <a href="#" v-on:click="changeForm">Create account.</a>
                </div>

                <div class="form__group--right">
                    <button v-on:click="loginAndRedirect">Login</button>
                </div>
            </fieldset>

            <fieldset v-else>
                <div class="form__group">
                    <p>User Name:</p>
                    <input type="text" v-model="userName">
                </div>

                <div class="form__group">
                    <p>Email:</p>
                    <input type="text" v-model="email">
                </div>

                <div class="form__group">
                    <p>Password:</p>
                    <input type="password" v-model="password">
                </div>

                <div class="form__group">
                    <a href="#" v-on:click="changeForm">Account Login.</a>
                </div>

                <div class="form__group--right">
                    <button v-on:click="registerUserAndChangeForm">
                        Register
                    </button>
                </div>
            </fieldset>
        </form>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name : 'login',

    data() {
        return {
            userName : '',
            password : '',
            email    : '',

            message     : '',
            showMessage : false,

            lightThemeActive: false,

            showModal : false,
            loginOrRegister : true
        }
    },

    created() {
        this.lightThemeActive = this.$store.state.lightThemeActive

        this.$nuxt.$on('changeTheme', (data : boolean) => {
            this.lightThemeActive = data
        })
    },

    methods : {
        changeForm : function () {
            this.loginOrRegister = !this.loginOrRegister

            this.userName = ''
            this.password = ''
            this.email    = ''
        },

        showErrorMessage : function () {
            setTimeout(() => {
                this.showMessage = false
            }, 3000)
        },

        loginAndRedirect : function () {
            const email    = this.email,
                  password = this.password

            this.$axios.$post('/login', { email, password })
                .then((response) => {
                    this.$store.commit('login', response)
                    this.$router.replace('/')
                })
                .catch(err => {
                    this.message = 'User or Password invalid!'
                    this.showMessage = true
                    this.showErrorMessage()
                })
        },

        registerUserAndChangeForm : function () {
            this.showModal = true

            const userName = this.userName,
                  password = this.password,
                  email    = this.email

            this.$axios.$post('/register', { userName, password, email })
                .then((response) => {
                    setTimeout(() => {
                        this.changeForm()
                        this.showModal = false
                    }, 1000)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }
})

</script>

<style>

div.modal {
    position: fixed;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    color: var(--primary-color);
    
    background: rgba(0, 0, 0, 0.705);
}

div.form__container {
    max-width: 600px;
    width: 90%;
    margin: 20px auto 0;

    padding-top: 20px;
    border-radius: 10px;

    color: var(--text-dark-theme-color);
    background: var(--background-dark-color2);

    border: 1px solid rgba(0, 0, 0, 0.575);
}

div.form__container.light {
    color: var(--text-light-theme-color);
    background: var(--background-light-color2);
}

div.form__container h2 {
    text-align: center;
}

div.form__container .form__group {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
}

div.form__group input {
    width: 100%;
    height: 30px;

    border-radius: 10px;
    margin-top: 10px;
    padding-left: 10px;

    color: var(--text-dark-theme-color);

    outline: none;

    background: none;
    border: 1px solid rgba(0, 0, 0, 0.575);
}

div.form__container.light div.form__group input {
    color: var(--text-light-theme-color);
}

div.form__container fieldset {
    border: none;
}

div.form__group--right {
    display: flex;
    justify-content: right;
    
    padding-right: 10px;
    padding-bottom: 15px;
}

div.form__group--right button {
    padding: 5px 20px;
    border: none;

    font-weight: 600;
    border-radius: 5px;

    background: var(--primary-color);
}

div.form__group a {
    text-decoration: none;
    color: var(--primary-color);
}

</style>