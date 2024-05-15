<template>
    <div class="container">
        <h1 class="text-center my-3">Social Login</h1>
        <h3 class="text-center mb-5">Auth Login Using <a class="link text-decoration-none"
                href="https://firebase.google.com" target="_blank">Firebase</a></h3>

        <button @click="loginWithGoogle" class="text-center text-uppercase btn btn-danger d-block mx-auto my-3">Login
            with
            Google</button>

        <button class="text-center text-uppercase btn btn-primary d-block mx-auto my-3">Login with Facebook</button>

        <button class="text-center text-uppercase btn btn-dark d-block mx-auto my-3">Login with Github</button>

        <button class="text-center text-uppercase btn btn-info d-block mx-auto my-3">Login with Twitter</button>

    </div>
</template>

<script lang="ts" setup>

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

const loginWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
        .then((result) => {
             console.log(result)
            //const credential = GoogleAuthProvider.credentialFromResult(result);
            //const token = credential?.accessToken;
            alert('Login correcto')
        })
        .catch((error) => {
            console.log(error)
            alert('Login incorrecto')
        })
}

</script>

<style scoped></style>