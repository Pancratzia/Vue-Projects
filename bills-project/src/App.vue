<template>
  <BillComponent />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import BillComponent from './components/BillComponent.vue';

export default defineComponent({
  name: 'App',
  components: {
    BillComponent
  }
});
</script>

<style>
body {
  background-color: #2c3e50;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(247, 246, 241);
}
</style>
