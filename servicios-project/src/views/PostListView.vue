<template>
    <div class="row card-deck">
        <div v-for="post in posts" :key="post.id" class="card col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 g-3">
            <div class="card-body">
                <h5 class="card-title">{{ post.title }}</h5>
                <router-link :to="{ name: 'Post', params: { id: post.id } }" class="btn btn-secondary">Ver Detalle</router-link>
            </div>
            <div class="card-footer">
                <small class="text-muted">Este post tiene el Id #{{ post.id }}</small>
            </div>
        </div>
        
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
</style>