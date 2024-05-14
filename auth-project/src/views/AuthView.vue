<template>
    <div class="container">
        <h1 class="text-center my-3">Login</h1>
        <h3 class="text-center">Auth Data Obtained from <a class="link text-decoration-none"
                href="https://dummyjson.com/docs/auth" target="_blank">dummyJson</a></h3>
        <form>
            <div class="mb-3">
                <label for="username" class="form-label">Usuario</label>
                <input type="text" class="form-control" id="username" aria-describedby="username" v-model="username">
                <p class="bg-danger text-white px-1 error mt-1" v-if="fe_errors.username">{{ fe_errors.username }}</p>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Contraseña</label>
                <input type="password" class="form-control" id="password" v-model="password">
                <p class="bg-danger text-white px-1 error mt-1" v-if="fe_errors.password">{{ fe_errors.password }}</p>
            </div>
            <button type="submit" class="btn btn-primary" @click.prevent="authUser">Submit</button>
        </form>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import AuthService from '@/services/AuthService';

const initialErrors = {
    username: '',
    password: ''
}

let username = ref('')
let password = ref('')
let fe_errors = ref(initialErrors);


const authUser = async () => {

    if (username.value === '') {
        fe_errors.value.username = 'El usuario es requerido';
    } else {
        fe_errors.value.username = '';
    }

    if (password.value === '') {
        fe_errors.value.password = 'La contraseña es requerida';
    } else {
        fe_errors.value.password = '';
    }


    if (fe_errors.value.username === '' && fe_errors.value.password === '') {

        const auth = new AuthService();
        const success = await auth.login(username.value, password.value);

        if (success) {
            alert('Login correcto')
            username.value = '';
            password.value = '';
        } else {
            alert('Login incorrecto')
        }
    }
}

</script>

<style scoped>
.error {
    font-size: 12px;
}
</style>