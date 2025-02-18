import { defineStore } from 'pinia';

export const useCounterStore =
defineStore({
  id: 'counter',
  state: () => ({
    count: 10,
  }),
  actions: {
    increaseCount() {
      this.count++
    },
    decreaseCount () {
      this.count--
    }
  },
  getters: {
    oddOrEven: (state) => {
      return state.count % 2 === 0 ? 'Even' : 'Odd'
    }
  }
});