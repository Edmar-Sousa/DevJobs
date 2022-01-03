<template>
    <div class="alignButton">
        <span v-on:click="backPage" class="goBack">
            <i class="fas fa-arrow-left"></i> Back to previous page
        </span>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name : 'back-button-component',

    methods : {
        backPage : function () {
            this.$router.go(-1)
        }
    }
})

</script>

<style>

div.alignButton {
    width: 100%;
    display: flex;
    justify-content: right;
}

div.alignButton span.goBack {
    cursor: pointer;
    color: var(--primary-color);
}

div.alignButton span.goBack:hover {
    color: var(--hover-color);
}

</style>