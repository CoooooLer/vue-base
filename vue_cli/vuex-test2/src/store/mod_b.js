export default {
  state: {
    str: 'store_b content'
  },
  mutations: {
    setStr(state, s) {
      alert('b');
      state.str = s;
    },
  },
  actions: {
    setStr({commit}, s) {
      commit('setStr', s);
    }
  },
};
