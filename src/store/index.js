import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import x6 from './modules/x6'
import editor from './modules/editor'

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    x6,
    editor
  }
})
