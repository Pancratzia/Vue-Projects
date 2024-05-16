<template>
    <div>
      <h3>Counter</h3>
      <h4>El valor del contador es: {{ counter }} </h4>
      <h4>El valor del {{counter}}x2 es: {{ doubleCounter }}</h4>
      <button @click="increment">Incrementar</button>
    </div>
</template>

<script lang="ts">

import {defineComponent} from 'vue';


export default defineComponent({
  name: 'HelloWorld',
  computed: {
    counter(){
      return this.$store.state.counter;
    },
    doubleCounter(){
      return this.$store.getters.doubleCounter;
    }
  },
  methods: {
    increment(){
      this.$store.commit('setCounter',this.counter+1);
    }
  }

})
</script>

<style scoped>
</style>