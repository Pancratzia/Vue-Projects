<template>
    <div>

        <img alt="Lorem picsum big picture to understand how v-lazy works" width="500" height="auto" v-lazy="{
            src: 'https://picsum.photos/4000/2000',
            error: 'notfound.png',
            loading: 'loading.gif',
            delay: 500
        }">

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

<style scoped>


img[lazy=loading] {
    width: 50px;
    height: 50px;
    margin: 0 auto;
}

img[lazy=error] {
    width: 150px;
    height: 150px;
    margin: 0 auto;
}

</style>