<template>
  <div class="container">
    <PostList />
  </div>
</template>

<script lang="ts" setup>
import PostList from './components/PostList.vue';


</script>

<style>
body {
  min-height: 100vh;
  padding: 0;
  margin: 0;
  background-color: aliceblue;
}

.container{
  width: min(90%, 1200px);
  margin: 0 auto;
  text-align: center;
}
</style>
