<template>
    <div>
        <h1>Card Layout</h1>

        <div class="container">
            <UserCard v-for="item in props.content" :key="item.name" :content="item" />
        </div>
    </div>
</template>

<script lang="ts" setup>

    import { defineProps } from 'vue';
    import UserCard from '@/components/UserCard.vue';

    const props = defineProps(['content']);

</script>

<style scoped>
</style>