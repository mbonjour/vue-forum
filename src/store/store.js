import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loader: {
      loading: false,
      progress: 50
    }
  },
  mutations: {
    TOGGLE_LOADER_LOADING (state) {
      state.loader.loading = !state.loader.loading
    },
    INCREMENT_LOADER_PROGRESS (state) {
      state.loader.progress++
    },
    RESET_LOADER_PROGRESS (state) {
      state.loader.progress = 0
    }
  },
  actions: {
    toggleLoading ({commit}) {
      commit('TOGGLE_LOADER_LOADING')
    },
    incrementProgress ({commit}) {
      commit('INCREMENT_LOADER_PROGRESS')
    },
    resetProgress ({commit}) {
      commit('RESET_LOADER_PROGRESS')
    }
  },
  getters: {
    loading: state => state.loader.loading,
    progress: state => state.loader.progress
  }
})
