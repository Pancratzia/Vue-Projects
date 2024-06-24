<template>

    <h4>Estado de la tarea: <span>{{ percentage }}%</span></h4>

</template>

<script lang="ts" setup>
import { ref, Ref, defineExpose } from 'vue';

const percentage: Ref<number> = ref(0);


const recalculate = (value) => {
    percentage.value = value;

    if (percentage.value >= 100) {
        alert('Tarea completada');
    }
}

defineExpose({ recalculate });
</script>

<style scoped>
h4 {
    color: #2c3e50;

    span {
        color: #42b983;
        font-weight: 700;
    }
}
</style>