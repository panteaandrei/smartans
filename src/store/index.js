import Vue from 'vue'
import Vuex from 'vuex'
import { getField, updateField } from 'vuex-map-fields';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:{
      id:null,
      name: null
    },

    activeStep: 0,
    cv: {
      personal: {
        last_name: {
          value: '',
          required: true,
          error:'',
          name: 'Nume'
        },
        first_name: {
          value: '',
          required: true,
          error:'',
          name: 'Prenume'
        },
        email: {
          value: '',
          required: true,
          error:'',
          name: 'Email'
        },
        phone: {
          value: '',
          required: true,
          error:'',
          name: 'Telefon'
        },
        location: {
          value: '',
          required: true,
          error:'',
          name: 'Locatia actuala'
        },
        birth_date: {
          value: '',
          required: false,
          error:'',
          name: 'Data nasterii (optional)'
        },
      },
      workExperience: {

      },
      stepThree: {

      }

    }
  },
  getters: {
    // Add the `getField` getter to the
    // `getters` of your Vuex store instance.
    getField,
  },
  mutations: {
    login(state, user) {
      state.user = user;
    },
    logout(state) {
      state.user.id = null;
    },
    updateField,
  },
  actions: {
  },
  modules: {
  }
})
