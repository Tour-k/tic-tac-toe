import { mapGetters, mapActions } from "vuex";

export const checkBoard = {
  data() {
    return {
      initBoardArray: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
      foo: "abc",
    };
  },
  methods: {
    ...mapActions(["initBoard"]),
    checkGameBoard() {
      if (this.isWinner()) {
        this.$emit("winner", this.playerRound ? 1 : 2);
        console.log("Winner is ... ME");
        this.initGame();
      } else {
        if (this.isBoardFull()) {
          this.$emit("fullBoard");
          console.log("play an other party ?");
          this.initGame();
        } else {
          console.log("Play Again Mother f*****");
        }
      }
    },
    initGame() {
      this.initBoard(this.initBoardArray);
    },
    isWinner() {
      if (this.checkRows() || this.checkCols() || this.checkDiags()) {
        return true;
      } else {
        return false;
      }
    },
    checkRows() {
      if (
        this.checkUnitRow(0) ||
        this.checkUnitRow(1) ||
        this.checkUnitRow(2)
      ) {
        return true;
      } else {
        return false;
      }
    },
    checkUnitRow(id) {
      if (this.boardGame[id].find((element) => element === 0) != undefined) {
        return false;
      } else if (
        this.boardGame[id][0] == this.boardGame[id][1] &&
        this.boardGame[id][2]
      ) {
        return true;
      } else {
        return false;
      }
    },
    checkCols() {
      if (
        this.checkUnitCol(0) ||
        this.checkUnitCol(1) ||
        this.checkUnitCol(2)
      ) {
        return true;
      } else {
        return false;
      }
    },
    checkUnitCol(id) {
      if (
        this.boardGame[0][id] == this.boardGame[1][id] &&
        this.boardGame[1][id] == this.boardGame[2][id] &&
        this.boardGame[0][id] != 0
      ) {
        return true;
      } else {
        return false;
      }
    },
    checkDiags() {
      if (
        (this.boardGame[0][0] == this.boardGame[1][1] &&
          this.boardGame[1][1] == this.boardGame[2][2] &&
          this.boardGame[0][0] != 0) ||
        (this.boardGame[0][2] == this.boardGame[1][1] &&
          this.boardGame[1][1] == this.boardGame[2][0] &&
          this.boardGame[0][2] != 0)
      ) {
        return true;
      } else {
        return false;
      }
    },
    isBoardFull() {
      var isFull = true;
      for (let lig = 0; lig < 3; lig++) {
        for (let co = 0; co < 3; co++) {
          if (this.boardGame[lig][co] == 0) {
            isFull = false;
            break;
          }
        }
        if (!isFull) {
          break;
        }
      }
      return isFull;
    },
  },
  computed: {
    ...mapGetters(["playerRound", "boardGame"]),
  },
};
