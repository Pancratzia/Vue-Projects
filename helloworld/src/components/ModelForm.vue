<template>
    <h1>Formulario</h1>
    <form class="form">
        <input class="input" type="text" v-model="inputText" placeholder="Escribe algo...">
        <div class="checkbox">
            <input type="checkbox" name="checkbox" id="checkbox" v-model="agree">
            <label for="checkbox">Acepto los términos y condiciones</label>
        </div>
    </form>
    <p class="text">Texto: {{ inputText }}</p>
</template>

<script lang="ts" setup>
import { ref, Ref } from 'vue';
let inputText: Ref<string> = ref('');
let agree: Ref<boolean> = ref(false);
</script>

<style scoped>
.form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
}

.input {
    padding: 5px 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: 0;
    font-size: 26px;
    margin-bottom: 10px;
    width: min(90%, 500px);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 700;
}

.text {
    font-size: 1.5rem;
    color: #2c3e50;
    margin-top: 1rem;
    font-weight: 900;
    text-align: center;
    width: 100%;
    margin-bottom: 1rem;
}

.checkbox {
    display: flex;
    align-items: center;
    justify-content: center;
    width: min(90%, 500px);
    gap: 5px;

    & label {
        font-size: 1rem;
        font-weight: 500;
        color: #2c3e50;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    & input {
        width: 20px;
        height: 20px;
        accent-color: #2c3e50;
        cursor: pointer;
    }
}


</style>