<template>
    <div>
        <h1>List Layout</h1>

        <ul>
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

h1 {
    color: blueviolet;
    margin: 1rem 0;
}

ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: .5rem;
    text-align: left;
    justify-content: flex-start;
    width: min(90%, 300px);
    margin: 0 auto;
    flex-wrap: wrap;
}
</style>