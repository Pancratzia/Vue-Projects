<template>

  <div class="container">
    <h1>Formulario de Profesores</h1>
    <TeacherForm />
  </div>
  
</template>

<script lang="ts" setup>
import TeacherForm from './components/TeacherForm.vue';
</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    & ::before, & ::after {
        box-sizing: inherit;
    }
}

html {
    font-size: 62.5%;
}

body {
    font-size: 1.6rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

h1, h2, h3, h4, h5, h6, p {
    margin: 0;
}

ul, ol {
    list-style: none;
    padding: 0;
    margin: 0;
}

a {
    text-decoration: none;
}

button {
    cursor: pointer;
    border: 0;
    outline: 0;
    text-transform: uppercase;
    padding: 1rem 2rem;
    font-weight: 700;
    background-color: #2c3e50;
    color: white;
    border-radius: 1rem;
    font-size: 1.6rem;
    transition: all .3s ease-in-out;

    &:hover {
        background-color: #34495e;
    }

}

h1{
    text-align: center;
    margin-bottom: 2rem;
    color: #34495e;
    text-transform: uppercase;
    text-decoration: underline;
}

.container{
    width: min(90%, 1200px);
    margin: 2rem auto;
    border: .5rem solid #34495e;
    border-radius: 1rem;
    padding: 2rem;
}
</style>
