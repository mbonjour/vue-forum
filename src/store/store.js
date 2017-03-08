import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false
  },
  mutations: {
    TOGGLE_LOADING (state) {
      state.loading = !state.loading
    }
  },
  actions: {
    toggleLoading ({commit}) {
      commit('TOGGLE_LOADING')
    }
  },
  getters: {
    loading: state => state.loading
  }
})
