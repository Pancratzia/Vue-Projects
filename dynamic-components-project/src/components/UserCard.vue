<template>
    <div class="card">
        <h3>{{ props.content.name }} - {{ props.content.age}} años</h3>
        <p>{{ props.content.position }}</p>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps(['content']);
</script>

<style scoped></style>