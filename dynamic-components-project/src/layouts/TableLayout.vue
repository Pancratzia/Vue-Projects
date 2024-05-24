<template>
    <div>
        <h1>Table Layout</h1>

        <table>

            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Position</th>
                </tr>
            </thead>

            <tbody>
                <UserRow v-for="item in props.content" :key="item.name" :content="item" />

            </tbody>
        </table>
    </div>
</template>

<script lang="ts" setup>

import { defineProps } from 'vue';
import UserRow from '@/components/UserRow.vue';

const props = defineProps(['content']);

</script>

<style scoped></style>