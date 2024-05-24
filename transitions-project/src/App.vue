<template>

  <ul>
    <TransitionGroup name="list" tag="ul">
      <li v-for="note in notes" :key="note"><v-icon name="bi-file-code-fill" scale="1.3" color="green" animation="pulse" title="my-icon" /> {{ note }}</li>
    </TransitionGroup>
  </ul>

  <input v-model="note" type="text" placeholder="Escribe algo...">
  <button @click="handleNote">Save Note</button>

</template>


<script lang="ts" setup>

import { ref, Ref } from 'vue';

const notes: Ref<string[]> = ref([]);
const note: Ref<string> = ref<string>('');

const handleNote = (): void => {
  notes.value.push(note.value);
  note.value = '';
}

</script>


<style scoped>

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

</style>
