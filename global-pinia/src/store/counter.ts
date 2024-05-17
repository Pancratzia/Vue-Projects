//STATES - Datos
//GETTERS - Computados
//ACTIONS - Metodos

import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => {
    return {
      count: 0,
    };
  },
  getters: {
    doubleCounter: (state) => state.count * 2,
  },
  actions: {
    setCounterValue(action: string) {
      action === "increment"
        ? this.count++
        : action === "decrement"
        ? this.count--
        : (this.count = 0);
    },
  },
});
