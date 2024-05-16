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

<script lang="ts">

import { defineComponent } from 'vue';
import { mapMutations, mapGetters, mapState } from 'vuex';



export default defineComponent({
  name: 'HelloWorld',
  computed: {
    ...mapState(['counter']),
    ...mapGetters(['doubleCounter'])
  },
  methods: {

    ...mapMutations(['setCounter']),
    handleCounterAction(action: 'increment' | 'decrement' | 'reset') {
      this.setCounter(
        action === 'increment' ? this.counter + 1 :
          action === 'decrement' ? this.counter - 1 :
            0
      );
    }
  }

})
</script>

<style scoped></style>