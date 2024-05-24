<template>
    <li>{{ props.content.name }} - {{ props.content.age}} años <span>(Posición: {{ props.content.position }})</span></li>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps(['content']);
</script>

<style scoped>

    li {
        list-style: none;
        border-bottom: 1px solid #ccc;
        

        & span{
            font-size: .8rem;
            font-weight: 700;
            color: #666;
        }
    }
</style>