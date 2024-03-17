<template>
  <h1>Listado de Posts:</h1>

  <PostContainer />

</template>

<script lang="ts" setup>
import PostContainer from './components/PostContainer.vue';
</script>

<style>
/*Estilos Generales del proyecto*/

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*::after,
*::before {
  box-sizing: inherit;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

h1 {
  font-size: 5rem;
  font-weight: 900;
  color: #2c3e50;
}
</style>
