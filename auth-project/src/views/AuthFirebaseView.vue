<template>
    <div class="container">
        <h1 class="text-center my-3">Login</h1>
        <h3 class="text-center">Auth Login Using <a class="link text-decoration-none" href="https://firebase.google.com"
                target="_blank">Firebase</a></h3>
                <h6 class="text-center opacity-75 text-sm">
                    email: "email@test.com" | password: "12345678"
                </h6>
        <form>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" aria-describedby="email" v-model="email">
                <p class="bg-danger text-white px-1 error mt-1" v-if="fe_errors.email">{{ fe_errors.email }}</p>
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
    email: '',
    password: ''
}

let email = ref('')
let password = ref('')
let fe_errors = ref(initialErrors);


const authUser = async () => {

    if (email.value === '') {
        fe_errors.value.email = 'El email es requerido';
    } else {
        fe_errors.value.email = '';
    }

    if (password.value === '') {
        fe_errors.value.password = 'La contraseña es requerida';
    } else {
        fe_errors.value.password = '';
    }

    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regex.test(email.value) && email.value !== '') {
        fe_errors.value.email = 'El email no es valido';
    }

    if (fe_errors.value.email === '' && fe_errors.value.password === '') {

        const auth = new AuthService();
        const success = await auth.login(email.value, password.value);

        if (success) {
            alert('Login correcto')
            email.value = '';
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