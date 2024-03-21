<template>
    <div class="mensajes">
        <p :class="{ danger: hasError, success: !hasError }" v-bind:style="{ backgroundColor: hasError ? 'rgba(255, 0, 0, 0.4)' : 'rgba(0, 255, 0, 0.4)'}">{{ message }}</p>
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
}

.success {
    color: green;
}
</style>