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

<style scoped>

h1 {
    color: blueviolet;
    margin: 1rem 0;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 2rem;
    border: .5rem solid #34495e;
    
    & thead {
        background-color: #34495e;
        color: white;

        & th {
            padding: .5rem;
        }
    }
}

</style>