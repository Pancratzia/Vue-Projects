<template>
    <div>
        <h1>Post List with Composition API</h1>

        <ul>
            <li v-for="post in posts" :key="post.id">
                <h3>{{ post.title }}</h3>
                <p>{{ post.body }}</p>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import PostService from '@/services/PostService';
import { onMounted } from 'vue';

const service = new PostService();
const posts = service.getPosts();

onMounted(async () => {
    await service.fetchAll();
});
</script>

<style scoped></style>