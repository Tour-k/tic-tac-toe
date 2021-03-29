import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    playerRound: true,
    boardGame: [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ],
  },
  getters: {
    playerRound: (state) => {
      return state.playerRound;
    },
    boardGame: (state) => {
      return state.boardGame;
    },
  },
  mutations: {
    rotateplayerRound(state) {
      state.playerRound = !state.playerRound;
    },
    //TODO: add verification :
    addTokenOnBoardGame(state, tokenPosition) {
      state.boardGame[tokenPosition.lig - 1][
        tokenPosition.co - 1
      ] = state.playerRound ? 1 : 2;
    },
    initBoard(state, initBoard) {
      state.boardGame = initBoard;
    }
  },
  actions: {
    changePlayerRound(context) {
      context.commit("rotateplayerRound");
    },
    addTokenOnBoard(context, tokenPosition) {
      context.commit("addTokenOnBoardGame", tokenPosition);
    },
    initBoard(context, initBoard) {
      context.commit("initBoard", initBoard);
    }
  },
  modules: {},
});
