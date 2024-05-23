<template>
  <MainLayout>
    <template v-slot:main>
      <h2>About Content</h2>
    </template>

    <template v-slot:aux>
      <div class="card">
        <p>Position X: {{ x }} </p>
        <p>Position Y: {{ y }} </p>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda officia laborum illum velit, dolor libero magni aut dolore quibusdam adipisci est veritatis quod praesentium autem necessitatibus obcaecati alias reprehenderit pariatur nostrum quia magnam suscipit. Molestias consectetur voluptatum labore ut. Quas consequuntur nostrum doloremque odio, ut laborum accusamus suscipit harum dolor! Eius voluptate necessitatibus culpa modi repellendus asperiores sunt consequatur incidunt molestias, perspiciatis sed earum! Alias rerum at quo temporibus quis aut ut expedita omnis adipisci reiciendis hic quibusdam tempora ex iusto amet eligendi odio cumque dolorum, modi enim illum soluta voluptatem ratione. Magnam atque accusamus sapiente dicta. Voluptates illum ipsum optio deserunt saepe! Exercitationem fugiat molestias ab sed quam! Aspernatur minima nemo pariatur et deserunt dolore corrupti reprehenderit cum laborum consectetur impedit magni fuga, itaque fugit totam sint fugiat praesentium, aliquam facilis! Aliquam, similique quasi! Incidunt nobis ut quisquam eum consequatur perferendis, placeat eos quis eveniet dolores repudiandae id repellendus enim, modi in voluptatem ipsa dolore exercitationem eligendi, deserunt fugiat magnam odio. Cum voluptatibus tempora dolores ab, animi non laborum repudiandae at, nam totam aliquam quidem, labore porro?</p>
    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';
import { useMouse } from '@/composables/useMouse';

const { x, y } = useMouse();

</script>