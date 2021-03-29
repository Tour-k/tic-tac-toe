<template>
  <div
    :class="[
      isClicked
        ? player
          ? $style.clickedGameCasePlayer1
          : $style.clickedGameCasePlayer2
        : $style.defaultGameCase,
    ]"
    class="ma-0"
    @click="isClicked ? '' : caseClicked()"
  ></div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "GameCase",
  props: {
    position: {
      type: Object,
      defaut: () => {},
    },
  },
  data() {
    return {
      isClicked: false,
      player: false,
    };
  },
  methods: {
    ...mapActions(["changePlayerRound", "addTokenOnBoard"]),
    caseClicked() {
      this.isClicked = true;
      this.player = this.playerRound;
      this.changePlayerRound();
      this.addTokenOnBoard(this.position);
      this.$emit("check-board");
    },
  },
  computed: {
    ...mapGetters(["playerRound"]),
  },
};
</script>

<style lang="scss" module>
.defaultGameCase {
  width: 60px;
  height: 60px;
  border: 2px solid black;
  cursor: pointer;
}

.clickedGameCasePlayer1 {
  width: 60px;
  height: 60px;
  border: 2px solid black;
  background-color: red;
}

.clickedGameCasePlayer2 {
  width: 60px;
  height: 60px;
  border: 2px solid black;
  background-color: greenyellow;
}
</style>
