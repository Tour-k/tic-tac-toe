<template>
  <div :class="$style.gameTable">
    <v-row v-for="(n, indexRow) in 3" :key="indexRow" class="ma-0">
      <v-col v-for="(m, indexCol) in 3" :key="indexCol" class="ma-0 pa-0">
        <GameCase />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import GameCase from "@/components/atoms/game/gameCase.vue";
export default {
  name: "GameTable",
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
