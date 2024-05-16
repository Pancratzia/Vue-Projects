<template>
  <div>
    <h3>Counter</h3>
    <h4>El valor del contador es: {{ counter }} </h4>
    <h4>El valor del {{ counter }}x2 es: {{ doubleCounter }}</h4>
    <button @click="handleCounterAction('increment')">Incrementar</button>
    <button @click="handleCounterAction('decrement')">Decrementar</button>
    <button @click="handleCounterAction('reset')">Reset</button>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const counter = computed(() => store.state.counter);
const doubleCounter = computed(() => store.getters.doubleCounter);
const handleCounterAction = (action: string) => {
  store.commit('setCounter', action === 'increment' ? counter.value + 1 : action === 'decrement' ? counter.value - 1 : 0);
};


</script>

<style scoped></style>