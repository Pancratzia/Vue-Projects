<template>
    <tr>
        <td>{{ props.content.name }}</td>
        <td>{{ props.content.age }}</td>
        <td>{{ props.content.position }}</td>
    </tr>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps(['content']);
</script>

<style scoped>

    tr {
        border-bottom: 1px solid #ccc;
    }
</style>