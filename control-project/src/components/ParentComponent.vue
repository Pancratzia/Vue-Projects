<template>
    <div>
        <ChildComponent ref="percentageComponent"></ChildComponent>

        <button @click="banco">Añadir Cuenta Bancaria</button>
    </div>
</template>

<script lang="ts" setup>
import ChildComponent from './ChildComponent.vue';
import { ref } from 'vue';
const percentageComponent = ref(null);

const banco = () => {

    //Conecta con el Servicio y sube la información
    alert("Se ha añadido una cuenta bancaria");
    percentageComponent.value.recalculate();
}
</script>