<template>
    <li>{{ props.content.name }} - {{ props.content.age}} años (Posición: {{ props.content.position }})</li>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps(['content']);
</script>

<style scoped></style>