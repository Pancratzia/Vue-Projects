<template>
    <h1>Formulario</h1>
    <form class="form">
        <input class="input" type="text" v-model="inputText" placeholder="Escribe algo...">
        <p class="text">Texto: {{ inputText }}</p>
        <div class="checkbox">
            <input type="checkbox" name="checkbox" id="checkbox" v-model="agree">
            <label for="checkbox">Acepto los términos y condiciones</label>
        </div>

        <select class="select" name="signoz" id="signoz" v-model="signoz">
            <option value="Capricornio">Capricornio</option>
            <option value="Acuario">Acuario</option>
            <option value="Piscis">Piscis</option>
            <option value="Aries">Aries</option>
            <option value="Tauro">Tauro</option>
            <option value="Géminis">Géminis</option>
            <option value="Cáncer">Cáncer</option>
            <option value="Leo">Leo</option>
            <option value="Virgo">Virgo</option>
            <option value="Libra">Libra</option>
            <option value="Escorpio">Escorpio</option>
            <option value="Sagitario">Sagitario</option>
        </select>
    </form>

</template>

<script lang="ts" setup>
import { ref, Ref } from 'vue';
let inputText: Ref<string> = ref('');
let agree: Ref<boolean> = ref(false);

const singnoz:Array<string> = ['Capricornio', 'Acuario', 'Piscis', 'Aries', 'Tauro', 'Géminis', 'Cáncer', 'Leo', 'Virgo', 'Libra', 'Escorpio', 'Sagitario'];

let signoz:Ref<string> = ref(singnoz[Math.floor(Math.random() * singnoz.length)]);

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

.select {
    padding: 5px 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: 0;
    font-size: 16px;
    margin-bottom: 10px;
    width: min(90%, 500px);
    margin-top: 1rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>