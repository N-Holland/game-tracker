import { createStore } from 'vuex';

export const store = createStore({
  state: {
    currentUser: null,
    firebase: null
  },
  mutations: {
    setFirebase(state, val) {
      state.firebase = val;
    },
},
  getters: {
    firebase(state) {
      return state.firebase;
    }
  }
})