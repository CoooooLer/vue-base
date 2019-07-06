import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    a: 11,
    b: 12,
  },
  mutations: {
    add(state, n) {
      state.a += n ;
    }
  },
  actions: {
    add(context, n) {
      context.commit('add', n);  // 调用mutation的add方法
    },
  }
})
