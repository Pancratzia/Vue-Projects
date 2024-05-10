<template>
    <div>
        <h2>Datos Computados desde OptionAPI</h2>
        <input type="text" v-model="message">
        <h3>{{ message }}</h3>
        <h3>{{ reverseMessage }}</h3>
        <hr>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'ComputedExample',
    data() {
        return {
            message: ""
        }
    },
    computed: {
        reverseMessage(): string {
            return this.message.split('').reverse().join('');
        }
    }
})
</script>

<style scoped>
    input{
        padding: 5px 15px;
        margin: 1rem 0;
    }

    h3{
        margin: 1rem 0;
        color: #2c3e50;
    }
    hr{
        margin: 1rem 0;
    }
</style>