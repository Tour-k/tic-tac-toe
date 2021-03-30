<template>
  <div>
    <GameTable @winner="displayWinPopup()"/>
    <WinPopup
      :title="popupTitle"
      :description="popupDescription"
      :dialog="displayPopup"
      @close-popup="closePopup()"
    />
  </div>
</template>

<script>
import WinPopup from "@/components/molecules/game/popupWin";
import GameTable from "@/components/molecules/game/gameTable";
export default {
  components: {
    WinPopup,
    GameTable,
  },
  data() {
    return {
      popupTitle: "Un titre",
      popupDescription: "Une description",
      dispayPopup: false,
    };
  },
  methods: {
    closePopup() {
      this.displayPopup = false;
    },
    displayWinPopup(winner) {
      console.log("Display win pop");
      this.popupTitle = "You win !";
      this.popupDescription = "Congratulations player " +  winner;
      this.displayPopup = true;
    },
  },
};
</script>

<style lang="scss" scoped></style>
