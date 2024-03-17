<template>
    <div class="counter">
        <h3>{{ counter }}</h3>
        <div class="buttons">
        <button @click="addCounter">+</button>
        <button @click="resetCounter">Reset</button>
        <button @click="subCounter">-</button>
    </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'CounterOption',
    components: {},
    data() {
        let counter = 0;
        return {
            counter
        }
    },
    methods: {
        addCounter() {
            this.counter++;
        },
        subCounter() {
            this.counter--;
        },
        resetCounter() {
            this.counter = 0
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