<template>
  <div class="container col-12 col-md-6 col-lg-4 my-5">
    <form>
      <div class="form-group">
        <label for="username">Nombre de usuario</label>
        <input type="text" class="form-control" id="username" placeholder="Ingresa tu nombre de usuario" v-model="name">
      </div>
      <div class="form-group">
        <label for="email">Correo</label>
        <input type="email" class="form-control" id="email" aria-describedby="emailHelp"
          placeholder="Ingresa tu correo" v-model="email">
      </div>
      <div class="form-group">
        <label for="password">Contraseña</label>
        <input type="password" class="form-control" id="password" placeholder="Ingresa tu contraseña" v-model="password">
      </div>
      <button @click="createUser" type="submit" class="btn btn-primary mt-2">Sign Up</button>
    </form>

    <p class="mt-3">¿Ya tienes una cuenta? <router-link :to="{ name: 'login' }">Inicia Sesion</router-link></p>
  </div>
</template>

<script lang="ts" setup>
import {ref, Ref } from 'vue';
import useAuth from '@/store/auth';

const store = useAuth();
const name = ref('');
const email = ref('');
const password = ref('');

const createUser = () => {
  store.register(name.value, email.value, password.value);
}


</script>