<template>
    <div class="mensajes">
        <p :class="{ danger: hasError, success: !hasError }"
            v-bind:style="{ backgroundColor: hasError ? 'rgba(255, 0, 0, 0.4)' : 'rgba(0, 255, 0, 0.4)' }">{{ hasError ?
            'Se ha producido un error' : 'El mensaje se ha enviado satisfactoriamente' }}</p>
        <button @click="handleClick">Cambiar Mensaje</button>
    </div>
</template>

<script lang="ts" setup>
import { ref, Ref } from 'vue';
let hasError: Ref<boolean> = ref(Math.random() > 0.5);

const handleClick = (): void => {
    hasError.value = !hasError.value;
}


</script>

<style scoped>
.mensajes {
    margin: 2rem auto;

    & p {
        padding: .5rem;
    }
}

.danger {
    color: red;
}

.success {
    color: green;
}

button {
    padding: .5rem;
    background-color: #2c3e50;
    color: white;
    border: 0;
    outline: 0;
    margin-top: 1rem;
    cursor: pointer;
}
</style>