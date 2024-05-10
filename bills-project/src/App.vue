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
</style>
