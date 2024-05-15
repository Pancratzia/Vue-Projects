<template>
    <div class="container">
        <h1 class="text-center my-3">Social Login</h1>
        <h3 class="text-center mb-5">Auth Login Using <a class="link text-decoration-none"
                href="https://firebase.google.com" target="_blank">Firebase</a></h3>

        <button @click="loginWithGoogle" class="text-center text-uppercase btn btn-danger d-block mx-auto my-3">Login
            with
            Google</button>

        <button @click="loginWithFacebook" class="text-center text-uppercase btn btn-primary d-block mx-auto my-3">Login
            with Facebook</button>

        <button @click="loginWithGithub" class="text-center text-uppercase btn btn-dark d-block mx-auto my-3">Login with Github</button>

        <button @click="loginWithTwitter" class="text-center text-uppercase btn btn-info d-block mx-auto my-3">Login with Twitter</button>

    </div>
</template>

<script lang="ts" setup>

import { getAuth, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const twitterProvider = new TwitterAuthProvider();
const githubProvider = new GithubAuthProvider();
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

const loginWithFacebook = () => {

    signInWithPopup(auth, facebookProvider)
        .then((result) => {
            console.log(result)
            //const credential = FacebookAuthProvider.credentialFromResult(result);
            //const token = credential?.accessToken;
            alert('Login correcto')
        })
        .catch((error) => {
            console.log(error)
            alert('Login incorrecto')
        })
}

const loginWithTwitter = () => {

    signInWithPopup(auth, twitterProvider)
        .then((result) => {
            console.log(result)
            //const credential = TwitterAuthProvider.credentialFromResult(result);
            //const token = credential?.accessToken;
            alert('Login correcto')
        })
        .catch((error) => {
            console.log(error)
            alert('Login incorrecto')
        })
}

const loginWithGithub = () => {

    signInWithPopup(auth, githubProvider)
        .then((result) => {
            console.log(result)
            //const credential = GithubAuthProvider.credentialFromResult(result);
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