<template>
    <div>
        <ChildComponent ref="percentageComponent"></ChildComponent>

        <button id="cuenta-bancaria" @click="finishTask('cuenta bancaria', 'cuenta-bancaria')">Añadir Cuenta Bancaria</button>
        <button id="foto" @click="finishTask('foto', 'foto')">Añadir Foto</button>
        <button id="huella-dactilar" @click="finishTask('huella dactilar', 'huella-dactilar')">Añadir huella dactilar</button>
        <button id="direccion" @click="finishTask('dirección', 'direccion')">Añadir dirección</button>

    </div>
</template>

<script lang="ts" setup>
import ChildComponent from './ChildComponent.vue';
import { ref, onMounted } from 'vue';
const percentageComponent = ref(null);
const percentage = ref(0);
const tasksCompleted = ref(0);

onMounted(() => {
    percentageComponent.value.recalculate(percentage.value);
});

const finishTask = (type: string, buttonToDisable: string) => {
    //Conecta con el Servicio y sube la información
    alert('Se ha añadido la ' + type);
    updatePercentage();
    disableButton(buttonToDisable);
}

const disableButton = (buttonToDisable: string) => {
    document.getElementById(buttonToDisable).disabled = true;
}

const updatePercentage = () => {
    tasksCompleted.value++;
    percentage.value = Math.round((tasksCompleted.value / 4) * 100);
    percentageComponent.value.recalculate(percentage.value);
}
</script>