<template>
    <MainLayout>
      <template v-slot:main>
        <h2>Services Content</h2>
      </template>
  
      <template v-slot:aux>
        <div class="cards">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title">Web Development</h4>
                </div>
                <div class="card-body">
                    <p class="card-text">We provide web development services</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h4 class="card-title">SEO</h4>
                </div>
                <div class="card-body">
                    <p class="card-text">We provide SEO services for your business</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h4 class="card-title">Email Marketing</h4>
                </div>
                <div class="card-body">
                    <p class="card-text">We provide email marketing services</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                </div>
            </div>

        </div>
      </template>
    </MainLayout>
  </template>
  
  <script lang="ts" setup>
  import MainLayout from '@/layouts/MainLayout.vue';
  
  </script>

  <style scoped>
    .cards{
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 1rem;

        @media screen and (min-width: 768px) {
            grid-template-columns: repeat(3, 1fr);
        }
    }
</style>