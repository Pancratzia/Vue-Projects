<template>
    <h3 class="counter">{{ counter }}</h3>
    <div class="buttons">
        <button @click="addCounter">+</button>
        <button @click="resetCounter">Reset</button>
        <button @click="subCounter">-</button>
    </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';
export default defineComponent({
    name: 'CounterComposition',
    components: {},
    setup() {
        let counter: Ref<number> = ref(0);
        const addCounter = (): void => {
            counter.value++;
        }
        const resetCounter = (): void => {
            counter.value = 0;
        }
        const subCounter = (): void => {
            counter.value--;
        }
        return {
            counter,
            addCounter,
            resetCounter,
            subCounter
        }
    }
})
</script>

<style scoped>
.counter {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
}

h3{
    font-size: 5rem;
    font-weight: 900;
    color: #2c3e50;
}

.buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row-reverse;
    gap: 10px;
}

button {
    padding: 5px 15px;
    background-color: blueviolet;
    color: white;
    border: 3px solid blueviolet;
    outline: 0;
}

button:hover {
    cursor: pointer;
    background-color: white;
    color: blueviolet;
}
</style>