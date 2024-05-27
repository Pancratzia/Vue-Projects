<template>

  <div class="container mx-auto text-center my-3">
    <h1>Counter: {{ store.counter }} </h1>

    <div class="d-flex justify-content-center align-items-center my-3 gap-3">
      <button class="btn btn-primary" @click="store.setCounter('increment')">Increment</button>
      <button class="btn btn-danger" @click="store.setCounter('decrement')">Decrement</button>
      <button class="btn btn-warning" @click="store.setCounter('reset')">Reset</button>
    </div>
  </div>

  <div class="container my-5">
    <h1 class="text-center">Notes</h1>
    <h2>My note: {{ note }} </h2>
    
    <input class="form-control" type="text" v-model="note" placeholder="Write your note">

    <h2>My age: {{ age }} </h2>
    <input class="form-control" type="number" v-model="age" placeholder="Write your age">
  </div>
</template>



<script lang="ts" setup>
import { ref, Ref, watchEffect, watch } from 'vue';
import { useExample } from './store/useExample';

const store = useExample();
store.init();

const note: Ref<string> = ref<string>(localStorage.getItem('note') || '');
  const age: Ref<number> = ref<number>(parseInt(localStorage.getItem('age') || '0'));


watch(age, () => {
  localStorage.setItem('age', age.value.toString());
});

watchEffect(() => {
  if (note.value !== '') {
    localStorage.setItem('note', note.value.toString());
  } else {
    localStorage.removeItem('note');
  }
});

</script>
