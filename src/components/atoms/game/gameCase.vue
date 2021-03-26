<template>
  <div
    :class="[
      isClicked
        ? playerRound
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
  data() {
    return {
      isClicked: false,
    };
  },
  methods: {
    ...mapActions(["changePlayerRound"]),
    caseClicked() {
      console.log("case clicked");
      this.isClicked = true;
      this.changePlayerRound();
      console.log(this.playerRound);
    },
  },
  computed: {
    ...mapGetters(["playerRound"]),
  },
  mounted() {
    console.log(this.playerRound);
  }
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
