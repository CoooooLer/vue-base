import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import ModA from './mod_a'
import ModB from './mod_b'

export default new Vuex.Store({
  state: {
    a: 11,
    b: 12,
    users: [],
  },
  mutations: {
    add(state, n) {
      state.a += n ;
    },
    addA(state, n) {
      state.a += n;
    },
    addB(state, n) {
      state.b += n;
    },
    setOnline(state, id) {
      state.users.forEach(user => {
        if(user.id == id) {
          user.online = true;
        }
      })
    },
    setUser(state, users) {
      state.users = users;
    }
  },
  actions: {
    add(context, n) {
      context.commit('add', n);  // 调用mutation的add方法
    },
    addA({commit}, n) { // commit同上面的context.commit
      commit('addA', n);
    },
    addB({commit}, n) {
      commit('addB', n);
    },
    setOnline({commit}, id) {
      commit('setOnline', id);
    },
    async readUser({commit}) {
      // await fetch('static/user.txt').then(res => {
      //   console.log(res.json().then(data => {
      //     console.log(data);
      //   }))
      // });

      let res = await fetch('http://192.168.0.119:8081/user.txt');
      let users = await res.json();
      commit('setUser', users);
      console.log(users);
    }
  },
  getters: {
    count(state) {
      return state.a + state.b;
    },
    online(state) {
      return state.users.filter(user => user.online);
    }
  },
  modules: {
    mod_a: ModA,
    mod_b: ModB,
  }
})
