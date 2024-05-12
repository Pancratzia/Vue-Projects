<template>
    <div>
        <h1>Post List with Option API</h1>
        <ul>
            <li v-for="post in posts.value" :key="post.id">
                <h3>{{ post.title }}</h3>
                <p>{{ post.body }}</p>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import PostService from '@/services/PostService';

export default defineComponent({
    name: 'PostListOption',
    data() {
        const service = new PostService();
        const posts = service.getPosts();
        return { posts, service };
    },
    async mounted() {
        await this.service.fetchAll();
    }
});
</script>

<style scoped></style>