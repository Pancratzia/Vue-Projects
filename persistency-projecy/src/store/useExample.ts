import { defineStore } from 'pinia';

export const useExample = defineStore('example', {
    state: () => ({
        counter: 0,
    }),
    actions: {
        init(){
            const initCount = localStorage.getItem('counter');

            if(initCount){
                this.counter = JSON.parse(initCount);
            }
        },
        setCounter(action: string) {
            action === 'increment' ? this.counter++ : action === 'decrement' ? this.counter-- : (this.counter = 0);

            localStorage.setItem('counter', JSON.stringify(this.counter));
        },
    },
    persist: {
        storage: sessionStorage,
        paths: ['counter'],
    }

})