import Vue from 'vue'
import Vuex from 'vuex'
import { getField, updateField } from 'vuex-map-fields';

import axios from 'axios'
import VueAxios from 'vue-axios'
import router from "@/router";
import moment from "moment";


Vue.use(VueAxios, axios)
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
  description: {
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
        phone_number: {
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
        birthdate: {
          value: '',
          required: false,
          error:'',
          name: 'Data nasterii (optional)'
        },
      },
      workExperience: [
        {
          position: {
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
          description: {
            value: '',
            required: false,
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
    doLogin(state, token) {

      console.log(token)
      state.user.token = token;

      router.push('/create')
    },
    logout(state) {
      state.user.id = null;
    },
    updateField,
    addWorkExperience(state) {

      state.cv.workExperience.push(JSON.parse(JSON.stringify(workExperienceModel)))
    },
    switchWorkExperience(state, data) {

      if (data.type === 'no-experience') {
        state.cv.workExperience = [{
          noExperience: {
            value: '',
            required: true,
            error:'',
            name: 'Nu am experienta'
          }
        }]
      } else {
        state.cv.workExperience = [workExperienceModel]
      }

    },
    addPersonalinfo() {

    }
  },
  actions: {
    doLogin(context, data) {

      let postPayload = new FormData;
      postPayload.set('username', data.username);
      postPayload.set('password', data.password);
      axios.post('https://dev-imable.herokuapp.com/auth/jwt/login',
          postPayload,
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }
      ).then(response => {

        context.commit('doLogin', response.data.access_token)
      })
    },

    doRegister(context, data) {

      return new Promise((resolve, reject) => {
        axios.post('https://dev-imable.herokuapp.com/auth/register', data).then(response => {
          if (response) {

            context.dispatch('doLogin', {username: response.data.email, password: data.password})
            resolve(true)
          }

        }).catch(error =>  {
          reject('something went wrong', error)
        })
      })

    },
    addWorkExperienceAction(context) {
      context.commit('addWorkExperience');
    },
    switchWorkExperienceAction(context, data) {

      context.commit('switchWorkExperience', {type: data.type});
    },
    savePersonalInfoAction(context) {

      let data = {}
      Object.keys(context.state.cv.personal).forEach(item => {
        data[item] = context.state.cv.personal[item].value
      })

      axios.patch('https://dev-imable.herokuapp.com/users/me', {
        data
      }, {
        headers: { Authorization: `Bearer ` +  context.state.user.token}
      }).then(response => {
        console.log(response)
      }).catch(err => {
        console.log(err)
      })

    },
    saveWorkExperienceAction(context) {

      context.state.cv.workExperience.forEach( experience => {

        let data = {}

        Object.keys(experience).forEach(item => {

          // get start date / end date
          if (item === 'period') {
            data['start_date'] =  moment().format(experience[item].value[0], 'YYYY-MM-DD')
            data['end_date'] =  moment().format(experience[item].value[1], 'YYYY-MM-DD')
            console.log(data)
          } else {
            data[item] = experience[item].value
          }
        })

        axios.post('https://dev-imable.herokuapp.com/user/experience', {
          ...data
        }, {
          headers: { Authorization: `Bearer ` +  context.state.user.token}
        }).then(response => {
          console.log(response)
        }).catch(err => {
          console.log(err)
        })
      })



    }
  },
  modules: {
  }
})
