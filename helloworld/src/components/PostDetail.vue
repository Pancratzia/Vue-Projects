<template>
  <div class="post">
    <h3>{{ props.title }}</h3>
    <p>{{ props.content }}</p>
    <input type="text" v-model="msg" placeholder="Escribe algo...">
    <button @click="handleClick">Acceder</button>
  </div>
</template>
  
<script lang="ts" setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
  title: { type: String, required: true },
  content: { type: String, required: false, default: 'Default lorem ipsum dolor sit amet consectetur adipisicing elit.' },
});

const emit = defineEmits(['show-alert']);

const msg = ref('');

const handleClick = (): void => {
  emit('show-alert', msg.value);
  msg.value = '';
};


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
  