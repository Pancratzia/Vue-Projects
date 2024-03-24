<template>
  <div class="post">
    <h3>{{ props.title }}</h3>
    <p>{{ props.content }}</p>
    <input type="text" v-model="msg" placeholder="Escribe algo...">
    <button @click="handleClick">Acceder</button>
  </div>
</template>
  
<script lang="ts">

import { defineComponent, ref, Ref } from 'vue';

export default defineComponent({
  name: 'PostDetail',
  props: {
    title: {type: String, required: true},
    content: {type: String, required: false, default: 'Default lorem ipsum dolor sit amet consectetur adipisicing elit. Totam rem id pariatur explicabo doloribus non, architecto aperiam iste quibusdam eos quasi sint labore, consequatur ipsam vitae minus inventore?'},
  },
  emits: ['show-alert'],
  setup(props, {emit}) {
    const handleClick = (): void => {
        emit('show-alert', msg.value);
        msg.value = '';
    }

    let msg: Ref<string> = ref('');

      return {
          props,
          handleClick,
          msg
      }
  }
})
</script>
  
<style scoped>

.post{
    width: 300px;
    height: 200px;
    background-color: antiquewhite;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
}
</style>
  