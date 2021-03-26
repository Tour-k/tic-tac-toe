<template>
  <div class="game">
    <GameTable />
  </div>
</template>

<script>
import GameTable from "@/components/organismes/game/gameTable.vue";
export default {
  name: "Game",
  components: {
    GameTable,
  }
};
</script>

<style lang="scss" scoped></style>
