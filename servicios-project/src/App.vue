<template>
  <div class="container-personal">
    <PostList />
  </div>
</template>

<script lang="ts" setup>
import PostList from './components/PostList.vue';


</script>

<style lang="scss">
body {
  min-height: 100vh;
  padding: 0;
  margin: 0;
  background-color: $bg-color;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.container-personal{
  width: min(90%, 1200px);
  margin: 0 auto;
}
</style>
