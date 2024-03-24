<template>
    <div class="container-posts">
        <PostDetail />
        <PostDetail />
        <PostDetail />
        <PostDetail />
        <PostDetail />
    </div>
</template>

<script lang="ts" setup>
import PostDetail from './PostDetail.vue';
</script>

<style scoped>
    .container-posts {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        flex-direction: row;
    }
</style>