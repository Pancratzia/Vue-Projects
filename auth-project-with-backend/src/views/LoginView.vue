<template>
  <div class="container col-12 col-md-6 col-lg-4 my-5">
    <p v-if="feedback !== ''" class="text-danger alert alert-danger">{{ feedback }}</p>

    <form>
      <div class="form-group">
        <label for="email">Correo</label>
        <input v-model="email" type="email" class="form-control" id="email" aria-describedby="emailHelp"
          placeholder="Ingresa tu correo">
      </div>
      <div class="form-group">
        <label for="password">Contraseña</label>
        <input v-model="password" type="password" class="form-control" id="password"
          placeholder="Ingresa tu contraseña">
      </div>
      <button type="submit" class="btn btn-primary mt-2" @click.prevent="loginUser">Log In</button>
    </form>

    <p class="mt-3">¿No tienes una cuenta? <router-link :to="{ name: 'register' }">Registrate</router-link></p>

  </div>
</template>

<script lang="ts" setup>
import { ref, Ref } from 'vue';
import useAuth from '@/store/auth';
import router from '@/router';

const email: Ref<string> = ref('');
const password: Ref<string> = ref('');
const feedback: Ref<string> = ref('');

const store = useAuth();

const loginUser = async (): Promise<void> => {
  if (!email.value || !password.value) {
    feedback.value = 'Por favor, rellena todos los campos';
    return;
  }

  if (!email.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
    feedback.value = 'Por favor, ingresa un correo valido';
    return;
  }

  const response = await store.login(email.value, password.value);

  if (response) {
    feedback.value = store.message;
    email.value = '';
    password.value = '';
    router.push({ name: 'noteList' });
  } else if (response === false) {
    feedback.value = store.message;
  }
};
</script>
