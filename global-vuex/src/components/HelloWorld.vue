<template>
    <div>
      <h3>Counter</h3>
      <h4>El valor del contador es: {{ counter }} </h4>
      <h4>El valor del {{counter}}x2 es: {{ doubleCounter }}</h4>
      <button @click?"increment">Incrementar</button>
    </div>
</template>

<script lang="ts">

import {defineComponent} from 'vue';


export default defineComponent({
  name: 'HelloWorld',
  computed: {
    counter(){
      // TODO: Read counter from store
    },
    doubleCounter(){
      // TODO: Read doubleCounter from store
    }
  },
  methods: {
    increment(){
      // TODO: Call the setCounter mutation from store
    }
  }

})
</script>

<style scoped>
</style>