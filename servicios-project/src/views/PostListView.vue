<template>
    <div>
        <h1 class="title">Post List with Composition API</h1>

        <ul class="post-list">
            <li v-for="post in posts" :key="post.id">
                <h3>{{ post.id }} - {{ post.title }}</h3>
                <a href="#" class="btn btn-secondary">Read more</a>
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

<style scoped lang="scss">

.title {
    text-transform: uppercase;
    text-align: center;
    color: $primary-color;
    text-decoration: underline;
}

.post-list {
    list-style: none;
    display: grid;
    margin: 0;
    padding: 0;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;

    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (min-width: 1440px) {
        grid-template-columns: repeat(4, 1fr);
    }

    li {
        text-align: center;
        border: 5px solid $primary-color;
        padding: .5rem;
        background-color: lighten($primary-color, 40%);

        h3 {
            margin-bottom: .5rem;
            text-transform: uppercase;
            color: $secondary-color;
        }

        p {
            text-align: justify;
            color: $secondary-color;
        }
    }
}
</style>