<template>
    <div>
        <h1>List Layout</h1>

        <ul class="container">
            <UserList v-for="item in props.content" :key="item.name" :content="item" />
        </ul>
    </div>
</template>

<script lang="ts" setup>

    import { defineProps } from 'vue';
    import UserList from '@/components/UserList.vue';

    const props = defineProps(['content']);

</script>

<style scoped>
</style>