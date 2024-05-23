<template>
    <div class="d-flex flex-column flex-shrink-0 p-3 bg-light">
        <router-link :to="{ name: 'home' }">Home</router-link>
        <router-link :to="{ name: 'about' }">About</router-link>
        <router-link :to="{ name: 'services' }">Services</router-link>
        <router-link :to="{ name: 'contact' }">Contact</router-link>
    </div>
</template>

<script lang="ts" setup>
</script>

<style>

.router-link-active {
    font-weight: bold;
}
</style>