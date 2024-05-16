import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 0
  },
  getters: {
    doubleCounter(state) {
      return state.counter * 2
    }
  },
  mutations: {
    setCounter(state, payload) {
      state.counter = payload;
    }
  },
})
