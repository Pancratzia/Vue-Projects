<template>
  <div class="container col-12 col-md-6 col-lg-4 my-5">
    <p v-if="feedback!==''" class="text-danger alert alert-danger">{{ feedback }}</p>
    <form>
      <div class="form-group">
        <label for="username">Nombre de usuario</label>
        <input type="text" class="form-control" id="username" placeholder="Ingresa tu nombre de usuario" v-model="name">
      </div>
      <div class="form-group">
        <label for="email">Correo</label>
        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Ingresa tu correo"
          v-model="email">
      </div>
      <div class="form-group">
        <label for="password">Contraseña</label>
        <input type="password" class="form-control" id="password" placeholder="Ingresa tu contraseña"
          v-model="password">
      </div>
      <button type="submit" class="btn btn-primary mt-2" @click.prevent="createUser">Sign Up</button>
    </form>

    <p class="mt-3">¿Ya tienes una cuenta? <router-link :to="{ name: 'login' }">Inicia Sesion</router-link></p>
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref } from 'vue';
import useAuth from '@/store/auth';
import router from '@/router';

const store = useAuth();
const name: Ref<string> = ref('');
const email: Ref<string> = ref('');
const password: Ref<string> = ref('');
const feedback: Ref<string> = ref('');

const createUser = async (): Promise<void> => {

  if (!name.value || !email.value || !password.value) {
    alert('Por favor, rellena todos los campos');
    return;
  }

  if (password.value.length < 6) {
    alert('La contraseña debe tener al menos 6 caracteres');
    return;
  }

  if (!email.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
    alert('Por favor, ingresa un correo valido');
    return;
  }
  const response = await store.register(name.value, email.value, password.value);

  if (response) {
    alert(store.message);
    name.value = '';
    email.value = '';
    password.value = '';
    feedback.value = '';
    router.push({ name: 'noteList' });
  } else if (response === false) {
    feedback.value = store.message;
  }
}


</script>