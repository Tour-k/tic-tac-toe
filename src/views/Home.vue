<template>
  <div class="home justify-center align-center">
    <v-btn @click="goToGame()">Start</v-btn>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {
  },
  methods: {
    goToGame() {
      this.$router.push({ name: "game" });
    }
  }
};
</script>
