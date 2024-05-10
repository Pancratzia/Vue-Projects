<template>
    <div class="container">

        <h1>Calculadora de IVA</h1>

        <div class="mt">
            <label for="vat">IVA</label>
            <input id="vat" type="number" v-model="vat">
        </div>

        <br>

        <div class="mt">
            <label for="subtotal">Subtotal</label>
            <input id="subtotal" type="number" v-model="subtotal">
        </div>

        <h3>Total Impuestos a Pagar: {{ totalVat }}$ ({{ vat }}%)</h3>

        <h3>Total a Pagar: {{ total }}$</h3>
    </div>
</template>

<script lang="ts" setup>
import { Ref, ref, computed } from 'vue';
let vat = ref(21);
let subtotal: Ref<number> = ref(0);

const totalVat = computed(() => {
    return subtotal.value * vat.value / 100;
})

const total = computed(() => {
    return subtotal.value + totalVat.value
})
</script>

<style scoped>
.container {
    text-align: center
}

h1 {
    color: rgb(247, 246, 241);
}

label {
    font-weight: bold;
    margin-right: .5rem;
}

h3 {
    color: rgb(255, 138, 138);
    text-transform: uppercase;
}

h3:last-child {
    color: rgb(255, 100, 100);
}
</style>