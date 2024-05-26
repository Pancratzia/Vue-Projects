<template>

  <div class="container mx-auto text-center my-3">
    <h1>Counter: {{ store.counter }} </h1>

    <div class="d-flex justify-content-center align-items-center my-3 gap-3">
      <button class="btn btn-primary" @click="store.setCounter('increment')">Increment</button>
      <button class="btn btn-danger" @click="store.setCounter('decrement')">Decrement</button>
      <button class="btn btn-warning" @click="store.setCounter('reset')">Reset</button>
    </div>
  </div>
</template>



<script lang="ts" setup>
import { useExample } from './store/useExample';

const store = useExample();
</script>
