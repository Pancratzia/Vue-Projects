<template>
  <div class="container">
    <div class="auxbar">
      <AuxBar />
    </div>

    <div class="main-content-container">
      <div class="menu">
        <MenuSideBar />
      </div>
      <div class="main-content">
        <h1>My Home Content</h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import AuxBar from '../components/AuxBar.vue';
import MenuSideBar from '../components/MenuSideBar.vue';

</script>
