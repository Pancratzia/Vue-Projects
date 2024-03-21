<template>
    <h1 class="title">Paises que comienzan con V:</h1>
    <ul class="subtitle">
        <li v-for="(country, index) in countries" :key="index"  :class="country==='Venezuela' ? 'item-venezuela item' : 'item'" >{{ country }}</li>
    </ul>
</template>

<script lang="ts" setup>
import { ref, Ref } from 'vue';

//Countries that start with V
let countries:Ref<Array<string>> =ref(['Venezuela', 'Vatican City', 'Vietnam', 'Vanuatu']);
</script>

<style scoped>
    .title{
        font-size: 3rem;
        margin-bottom: 1rem;
    }

    .subtitle{
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: .5rem;
        align-items: center;
    }

    .item{
        font-size: 1.5rem;
        font-weight: bold;
        display: block;
        color: blueviolet;
        width: max-content;
        text-transform: uppercase;
    }

    .item-venezuela{
        background: linear-gradient(to right, yellow, blue, red);
        background-size:  100% 100%;
        color: transparent;
        background-clip: text;
    }


</style>