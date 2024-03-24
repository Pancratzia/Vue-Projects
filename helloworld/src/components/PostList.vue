<template>
    <div class="container-posts">
        <PostDetail v-for="post in info" :key="post.title" :title= "post.title" :content= "post.content" @show-alert="showAlert" />
    </div>
</template>

<script lang="ts" setup>
import PostDetail from './PostDetail.vue';

interface Post {
    title: string;
    content?: string;
}

let info: Array<Post> = [
    { 
        title: "Post 1",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, maiores. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, maiores." 
    },
    {
        title: "Post 2",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, maiores. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, maiores."
    },
    {
        title: "Post 3",
    },
    {
        title: "Post 4",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, maiores. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, maiores."
    },
    {
        title: "Post 5",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, maiores. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, maiores."
    }
]

function showAlert(msg: string) {
    alert(`Mi hijo dice: ${msg}`);
}
</script>

<style scoped>
    .container-posts {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        flex-direction: row;
    }
</style>