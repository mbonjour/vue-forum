import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loader: {
      loading: false,
      progress: 0
    }
  },
  mutations: {
    TOGGLE_LOADER_LOADING (state) {
      state.loader.loading = !state.loader.loading
    },
    INCREMENT_LOADER_PROGRESS (state) {
      state.loader.progress++
    }
  },
  actions: {
    toggleLoading ({commit}) {
      commit('TOGGLE_LOADER_LOADING')
    },
    incrementPorgress ({commit}) {
      commit('INCREMENT_LOADER_PROGRESS')
    }
  },
  getters: {
    loading: state => state.loader.loading,
    progress: state => state.loader.progress
  }
})
