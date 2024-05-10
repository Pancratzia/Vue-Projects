<template>
    <div>
        <input type="text" v-model="message">
        <h3>{{ message }}</h3>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'ComputedExample',
    data() {
        return {
           message: "" 
        }
    },
})
</script>

<style scoped>
</style>