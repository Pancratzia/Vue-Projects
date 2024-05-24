<template>
    <div>
        <h1>Card Layout</h1>

        <div class="cards">
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

h1 {
    color: blueviolet;
    margin: 1rem 0;
}

.cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 1rem;
    border: 2px solid blueviolet;
    padding: 10px;
}

</style>