<template>
  <div class="game">
    <FullGameTable />
  </div>
</template>

<script>
import FullGameTable from "@/components/organismes/game/fullGameBoard";
export default {
  name: "Game",
  components: {
    FullGameTable,
  }
};
</script>

<style lang="scss" scoped></style>
