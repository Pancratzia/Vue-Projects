<template>
    <h1>Post Detail #{{ post.id }}</h1>
    <div class="card mb-2">

        <div class="card-header">
            <h3>{{ post.title }}</h3>
        </div>
        <div class="card-body">
            <p>{{ post.body }}</p>
        </div>

    </div>

    <router-link :to="{ name: 'PostList' }" class="btn btn-secondary">Back</router-link>
</template>

<script lang="ts" setup>
import PostService from '@/services/PostService';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const service = new PostService();
const post = service.getPost();

onMounted(async () => {
    const route = useRoute();
    let elm = route.params.id;
    await service.fetchOne(elm);
});

</script>

<style scoped></style>