<template>

  <div class="container">

    <ComputedExample />

    <CycleOption />

    <CycleComposition />

    <ModelForm />

    <CounterOption />

    <CounterComposition />

    <ExampleSelective />

    <ExampleFor />

    <ExamplesBind />

    <h1>Listado de Posts:</h1>

    <PostList />

    <PostContainer />
  </div>

</template>

<script lang="ts" setup>
import PostContainer from './components/PostContainer.vue';
import CounterOption from './components/CounterOption.vue';
import CounterComposition from './components/CounterComposition.vue';
import ExampleSelective from './components/ExampleSelective.vue';
import ExampleFor from './components/ExampleFor.vue';
import ExamplesBind from './components/ExamplesBind.vue';
import ModelForm from './components/ModelForm.vue';
import CycleOption from './components/CycleOption.vue';
import CycleComposition from './components/CycleComposition.vue';
import PostList from './components/PostList.vue';
import ComputedExample from './components/ComputedExample.vue';
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
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}

h1 {
  font-size: 5rem;
  font-weight: 900;
  color: #2c3e50;
  margin-top: 2rem;
}

.container {
  text-align: center;
  margin: 0 auto;
  width: min(90%, 1000px);

}
</style>
