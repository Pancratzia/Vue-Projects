<template>
  <h1>{{ store.count }}</h1>

  <h3>{{ store.count }} x 2 = {{ store.doubleCount }}</h3>

  <button @click="handleAction('increment')">Increment</button>
  <button @click="handleAction('decrement')">Decrement</button>
  <button @click="handleAction('reset')">Reset</button>
</template>

<script lang="ts" setup>
import { useCounterStore } from '@/store/counter';
const store = useCounterStore();

const handleAction = (action: string) => {
  store.setCounterValue(action);
};

</script>

<style scoped></style>
