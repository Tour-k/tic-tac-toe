<template>
  <div :class="$style.gameTable">
    <v-row v-for="(lig, indexRow) in 3" :key="indexRow" class="ma-0">
      <v-col v-for="(co, indexCol) in 3" :key="indexCol" class="ma-0 pa-0">
        <GameCase :position="{ lig, co }" @check-board="checkGameBoard" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import GameCase from "@/components/atoms/game/gameCase.vue";
import { checkBoard } from "@/mixins/game/checkGameBoard";
export default {
  name: "GameTable",
  mixins: [checkBoard],
  components: {
    GameCase,
  },
};
</script>

<style lang="scss" module>
.gameTable {
  width: 180px;
}
</style>
