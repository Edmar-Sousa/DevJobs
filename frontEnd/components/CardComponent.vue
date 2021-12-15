<template>
    <div class="card-container" v-bind:class="{ 'dark' : theme }">
        <i class="fab fa-python"></i>

        <p>12/12/2021 10:40 - Full Time</p>
        <h2>Python Senior Developer</h2>

        <p class="local">Ceará</p>

        <button>
            More Details
        </button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name : 'card-component',
    props : ['theme']
})

</script>

<style>

div.card-container {
    flex: 1;
    margin: 20px;

    background: var(--card-background-color);
    position: relative;

    font-family: Roboto, Arial, Helvetica, sans-serif;
    border-radius: 5px;

    transition: background 400ms;
    padding: 0 20px 20px;
}

div.card-container.dark {
    background: var(--card-dark-background);
}

div.card-container  i {
    font-size: 40px;
    padding: 5px 10px;
    border-radius: 10px;

    margin-top: -20px;

    color: rgb(223, 223, 223);
    background: rgb(190, 137, 21);
}

div.card-container h2 {
    font-size: max(20px, 2vw);
}

div.card-container p {
    margin: 10px 0;
    color: rgb(161, 161, 161);
    font-size: 10pt;

    font-size: max(15px, 1vw);
}

div.card-container p.local {
    margin: 20px 0;
    color: var(--primary-color);
}

div.card-container button {
    padding: 5px 10px;
    border: none;
    background: var(--primary-color);
    border-radius: 3px;
    font-family: Roboto, Arial, Helvetica, sans-serif;
    cursor: pointer;
}

div.card-container button:hover {
    transform: scale(0.95);
}
</style>