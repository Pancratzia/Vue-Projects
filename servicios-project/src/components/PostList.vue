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

<script lang="ts">

import { defineComponent, onMounted } from 'vue';
import PostService from '@/services/PostService';

export default defineComponent({
    name: 'PostList',
    setup() {
        const service = new PostService();
        const posts = service.getPosts();

        onMounted(async () => {
            await service.fetchAll();
        });

        return { posts };
    }
});
</script>

<style scoped></style>