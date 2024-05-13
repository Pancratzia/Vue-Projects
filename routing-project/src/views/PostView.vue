<template>
    <div>
        Post View

        <h1>Post {{ postId }}</h1>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam exercitationem illo autem ipsum! Facilis illo
            nesciunt eum hic, est quae dignissimos animi doloremque soluta totam dolorem minus consequuntur esse cumque
            numquam, iure alias accusamus. Est, aliquam? Id repudiandae deserunt commodi aperiam earum impedit quasi nam
            quod. Consectetur, modi voluptatum illum aut impedit quasi dolor recusandae!</p>
        <router-link :to="{ name: 'blog' }">Back</router-link>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';


let postId = ref('');

onMounted(() => {
    const route = useRoute();
    postId.value = route.params.id as string;
});
</script>

<style scoped></style>