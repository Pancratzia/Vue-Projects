<template>
  <div class="main-layout bg-light">
    <div class="auxbar">
      <AuxBar />
    </div>

    <div class="container mx-auto">
      <div class="main-content-container row">
        <div class="menu col-12 col-md-4">
          <MenuSideBar />
        </div>
        <div class="main-content col-12 col-md-8">
          <slot name="main"></slot>
        </div>
      </div>

      <div class="aux-content">
        <slot name="aux"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import AuxBar from '@/components/AuxBar.vue';
import MenuSideBar from '@/components/MenuSideBar.vue';

</script>

<style scoped>
.main-layout {
  min-height: 100vh;
}
</style>