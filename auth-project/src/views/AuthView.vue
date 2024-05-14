<template>
    <div class="container">
        <h1 class="text-center my-3">Login</h1>
        <form>
            <div class="mb-3">
                <label for="email" class="form-label">Correo</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" v-model="email">
                <p class="bg-danger text-white px-1 error mt-1" v-if="errors.email">{{ errors.email }}</p>
                <div id="emailHelp" class="form-text">No compartiremos tu correo con nadie.</div>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Contraseña</label>
                <input type="password" class="form-control" id="password" v-model="password">
                <p class="bg-danger text-white px-1 error mt-1" v-if="errors.password">{{ errors.password }}</p>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const initialErrors = {
    email: '',
    password: ''
}

let email = ref('')
let password = ref('')
let errors = ref(initialErrors);




</script>

<style scoped>
.error{
    font-size: 12px;
}
</style>