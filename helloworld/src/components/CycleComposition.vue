<template>
    <h6>Hola Mundo from Composition API</h6>
  </template>
    
  <script lang="ts" setup>

  import { onMounted, onUpdated, onBeforeMount } from 'vue';
  
  onBeforeMount(() => {
    console.log('Componente Creado');
  });

  onMounted(() => {
    console.log('Componente Montado');
  });

  onUpdated(() => {
    console.log('Componente Actualizado');
  });

  </script>
    
  <style scoped>
  </style>
    