import { createStore } from 'vuex';

export default createStore({
  state: {
    value: 0,
  },
  mutations: {
    updateValue(state) {
      state.value += 1;
    },
  },
  actions: {
  },
  modules: {
  },
});
