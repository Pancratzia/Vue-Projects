<template>
  <input type="text" placeholder="Información de la nota" v-model="note" />
  <button @click="sendToServer">Enviar Nota</button>
</template>

<script lang="ts" setup>

import { ref, Ref } from 'vue';

let note: Ref<string> = ref('');

const sendToServer = async () => {
  if (note.value === '') {
    alert('La nota no puede estar vacía');
    return;
  }

  try {
    const rawResponse = await fetch('http://XXXXXXXXXX', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer jwtxxxxxxxxxxxx',
      },
      body: JSON.stringify({ note: note.value }),
    });

    const response = await rawResponse.json();

    if (response.error) {
      alert(response.error);
    } else {
      alert('Nota enviada correctamente');
    }
  } catch (error) {
    alert(error);
  }
}
</script>
