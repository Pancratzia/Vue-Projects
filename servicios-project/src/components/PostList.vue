<template>
    <div>
        <h1>Post List with Composition API</h1>

        <ul>
            <li v-for="post in posts" :key="post.id">
                <h3>{{ post.id }} - {{ post.title }}</h3>
                <p>{{ post.body }}</p>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import PostService from '@/services/PostService';
import IPost from '@/interfaces/IPost';
import { onMounted, Ref } from 'vue';

const service = new PostService();
const posts: Ref<Array<IPost>> = service.getPosts();

onMounted(async () => {
    await service.fetchAll();
});
</script>

<style scoped>

    h1{
        text-transform: uppercase;
    }

    ul{
        list-style: none;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 1rem;

        @media screen and (min-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media screen and (min-width: 1024px) {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    li{
        border: 5px solid #ccc;
        padding: .5rem;
        background-color: #eee;

        & h3{
            margin-bottom: .5rem;
            text-transform: uppercase;
        }
    }

</style>