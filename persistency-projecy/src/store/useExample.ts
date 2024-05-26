import { defineStore } from 'pinia';

export const useExample = defineStore('example', {
    state: () => ({
        counter: 0,
    }),
    actions: {
        setCounter(action: string) {
            action === 'increment' ? this.counter++ : action === 'decrement' ? this.counter-- : (this.counter = 0);
        },
    },
    persist: true,

})