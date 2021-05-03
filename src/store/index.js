import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:{
      id:null,
      name: null
    }
  },
  mutations: {
    login(state, user) {
      state.user = user;
    },
    logout(state) {
      state.user.id = null;
    }
  },
  actions: {
  },
  modules: {
  }
})
