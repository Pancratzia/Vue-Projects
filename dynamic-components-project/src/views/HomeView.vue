<template>
  <div class="container main">
    <h1>Listado de Usuarios</h1>

    <input type="text" placeholder="Filtrar por Usuarios" v-model="search" @keyup="handleSearch">

    <div class="buttons">
      <button @click="handleLayout(ListLayout)">Ver en Lista</button>
      <button @click="handleLayout(CardLayout)">Ver en Tarjeta</button>
      <button @click="handleLayout(TableLayout)">Ver en Tabla</button>
    </div>

    <component :is="layout" :content="filteredUsers"></component>
  </div>
</template>

<script lang="ts" setup>
import { Ref, ref, defineAsyncComponent, Component } from 'vue';
const ListLayout = defineAsyncComponent(() => import("@/layouts/ListLayout.vue"));
const CardLayout = defineAsyncComponent(() => import("@/layouts/CardLayout.vue"));
const TableLayout = defineAsyncComponent(() => import("@/layouts/TableLayout.vue"));

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


const search = ref('');

const layout: Ref<Component> = ref(ListLayout);

const handleLayout = (cmp: Component) => layout.value = cmp;

const filteredUsers = ref(users.value);

const handleSearch = () => {
  if(search.value.length > 0){
    filteredUsers.value = users.value.filter(user => user.name.toLowerCase().includes(search.value.toLowerCase()));
  } else {
    filteredUsers.value = users.value;
  }
}



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

input{
  padding: 5px 15px;
  margin: 1rem 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: 0;
  font-size: 16px;
  width: min(90%, 500px);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>
