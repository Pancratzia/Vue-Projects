<template>

  <button @click="show = !show">Mostrar/Ocultar</button>
  <Transition>
    <h1 v-if="show">Hello World</h1>
  </Transition>
</template>


<script lang="ts" setup>
 import {ref} from 'vue';

 const show = ref(false);

</script>


<style scoped>

.v-enter-active, .v-leave-active{
  transition: opacity 1s ease;
}

.v-enter-from, .v-leave-to {
  opacity: 0;
}

</style>
