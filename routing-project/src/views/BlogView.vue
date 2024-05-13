<template>
    <div>
        <h1>
            Blog View
        </h1>

        <ul v-for="post in postsIds" :key="post">
            <li> <router-link :to="{ name: 'post', params: { id: post } }">Post {{ post }}</router-link> </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
const postsIds = Math.floor(Math.random() * 10) + 5;

</script>

<style scoped></style>