export default {
  state: {
    str: 'store_a content'
  },
  mutations: {
    setStr(state, s) {
      alert('a');
      state.str = s;
    },
  },
  actions: {
    setStr({commit}, s) {
      commit('setStr', s)
    }
  },
};

