import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import base from './modules/base'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.store({
  modules:{
    base,
    user
  },
  getters
})

export default store