<template>
    <div>

        <label for="vat">IVA</label>
        <input id="vat" type="number" v-model="vat">

        <br>

        <label for="subtotal">Subtotal</label>
        <input id="subtotal" type="number" v-model="subtotal">

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

<style scoped></style>