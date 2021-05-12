import Vue from 'vue'
import Vuex from 'vuex'
import { getField, updateField } from 'vuex-map-fields';
Vue.use(Vuex)

const workExperienceModel = {
  occupation: {
    value: '',
    required: true,
    error:'',
    name: 'Ocupația'
  },
  employer: {
    value: '',
    required: true,
    error:'',
    name: 'Angajator'
  },
  period: {
    value: '',
    required: true,
    error:'',
    name: 'Perioada'
  },
  city: {
    value: '',
    required: true,
    error:'',
    name: 'Oraș'
  },
  attributions: {
    value: '',
    required: true,
    error:'',
    name: 'Descriere atribuții (optional)'
  }
}

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
      workExperience: [
        {
          occupation: {
            value: '',
            required: true,
            error:'',
            name: 'Ocupația'
          },
          employer: {
            value: '',
            required: true,
            error:'',
            name: 'Angajator'
          },
          period: {
            value: '',
            required: true,
            error:'',
            name: 'Perioada'
          },
          city: {
            value: '',
            required: true,
            error:'',
            name: 'Oraș'
          },
          attributions: {
            value: '',
            required: true,
            error:'',
            name: 'Descriere atribuții (optional)'
          }
        }
      ],
      education: {

      },
      languages: {

      },
      disabilities: {

      },
      intrests: {

      },
      skills: {

      },
      hobbies: {

      }

    },
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
    addWorkExperience(state) {

      state.cv.workExperience.push(JSON.parse(JSON.stringify(workExperienceModel)))

    }
  },
  actions: {
    addWorkExperienceAction(context) {
      context.commit('addWorkExperience');
    }
  },
  modules: {
  }
})
