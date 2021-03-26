import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    playerRound: true,
  },
  getters: {
    playerRound: (state) => {
      return state.playerRound;
    },
  },
  mutations: {
    rotateplayerRound(state) {
      state.playerRound = !state.playerRound;
    },
  },
  actions: {
    changePlayerRound(context) {
      context.commit("rotateplayerRound");
    },
  },
  modules: {},
});
