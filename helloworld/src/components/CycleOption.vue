<template>
  <h6>Hola Mundo from Option API</h6>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CycleOption',
  created() {
    console.log('Componente Creado');
  },
  mounted() {
    console.log('Componente Montado');
  },
  updated() {
    console.log('Componente Actualizado');
  },
  unmounted() {
    console.log('Componente Desmontado');
  }
})
</script>
  
<style scoped>
</style>
  