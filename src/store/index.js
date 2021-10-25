import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // update: false,
    saved: undefined,
    currentBoard: [
      [5, 3, null, null, 7, null, null, null, null],
      [6, null, null, 1, 9, 5, null, null, null],
      [null, 9, 8, null, null, null, null, 6, null],
      [8, null, null, null, 6, null, null, null, 3],
      [4, null, null, 8, null, 3, null, null, 1],
      [7, null, null, null, 2, null, null, null, 6],
      [null, 6, null, null, null, null, 2, 8, null],
      [null, null, null, 4, 1, 9, null, null, 5],
      [null, null, null, null, 8, null, null, 7, 9],
    ],
  },
  getters: {
    currentBoard(state) {
      return state.currentBoard;
    },
    saved(state) {
      return state.saved;
    },

    // update(state) {
    //   return state.update;
    // },
  },
  actions: {
    setCurrentBoard(context, payload) {
      context.commit('SET_CURRENT_BOARD', payload);
    },
    setSaved(context, payload) {
      context.commit('SET_SAVED', payload);
    },
    // update(context) {
    //   context.commit('UPDATE');
    // },
  },
  mutations: {
    SET_CURRENT_BOARD(state, payload) {
      console.log(payload);
      state.currentBoard = payload;
    },
    SET_SAVED(state, payload) {
      console.log(payload);
      state.saved = payload;
    },
    UPDATE(state) {
      state.update = !state.update;
    },
  },
  modules: {},
});
