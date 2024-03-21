<template>
    <div>
        <h1 v-if="age >= 18" class="title">Eres mayor de edad</h1>
        <h1 v-else class="title">Eres menor de edad</h1>
        <h2 class="subtitle">Edad: {{ age }}</h2>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'ExampleSelective',
        setup() {
            let age = Math.floor(Math.random() * 100) + 1;

            return { age };
        }
    })
</script>

<style scoped>

.title {
    color: #2c3e50;
}

.subtitle {
    color: blueviolet;
    margin-top: 1rem;
}
</style>