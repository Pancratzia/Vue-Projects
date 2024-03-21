<template>
    <div class="mensajes">
        <p :class="{ danger: hasError, success: !hasError }">{{ message }}</p>
    </div>
</template>

<script lang="ts" setup>
let hasError = Math.random() > 0.5;
const message = hasError ? 'Se ha producido un error' : 'El mensaje se ha enviado satisfactoriamente';
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
    background-color: rgba(255, 0, 0, 0.4);
}

.success {
    color: green;
    background-color: rgba(0, 255, 0, 0.4);
}
</style>