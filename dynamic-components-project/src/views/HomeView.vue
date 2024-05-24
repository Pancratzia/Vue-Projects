<template>
  <div class="container main">
    <h1>Listado de Usuarios</h1>

    <div class="buttons">
      <button @click="handleLayout(ListLayout)">Ver en Lista</button>
      <button @click="handleLayout(CardLayout)">Ver en Tarjeta</button>
      <button @click="handleLayout(TableLayout)">Ver en Tabla</button>
    </div>

    <component :is="layout" :content="users"></component>
  </div>
</template>

<script lang="ts" setup>
import { Ref, ref, defineAsyncComponent, Component } from 'vue';
const ListLayout = defineAsyncComponent(() => import("@/layouts/ListLayout.vue"));
const CardLayout = defineAsyncComponent(() => import("@/layouts/CardLayout.vue"));
const TableLayout = defineAsyncComponent(() => import("@/layouts/TableLayout.vue"));


const layout: Ref<Component> = ref(ListLayout);

const handleLayout = (cmp: Component) => layout.value = cmp;


const users = ref([
  { name: "Pancratzia", age: 24, position: "frontend" },
  { name: "Arthuro", age: 25, position: "backend" },
  { name: "Jorge", age: 26, position: "fullstack" },
  { name: "Cristian", age: 27, position: "backend" },
  { name: "Thalia", age: 27, position: "frontend" },
  { name: "Mariana", age: 28, position: "fullstack" },
  { name: "Giovanni", age: 29, position: "fullstack" },
  { name: "Eduardo", age: 30, position: "frontend" },
  { name: "Paola", age: 31, position: "backend" },
]);
</script>

<style scoped>

.main{
  text-align: center;
  margin-top: 20px;
}

.buttons{
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 10px 0;

  & button{
    padding: 5px 15px;
    background-color: blueviolet;
    color: white;
    border: 3px solid blueviolet;
    outline: 0;
    border-radius: 5px;
    font-weight: bold;

    &:hover{
      background-color: white;
      color: blueviolet;
      cursor: pointer;
    }
  }
}
</style>
