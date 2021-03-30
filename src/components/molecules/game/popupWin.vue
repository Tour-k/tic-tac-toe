<template>
  <v-row justify="center">
    <v-dialog v-model="displayPopup" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">
          {{ title }}
        </v-card-title>
        <v-card-text
          >{{ description }} <br />
          Try again ?
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="cancel()"> Cancel </v-btn>
          <v-btn color="green darken-1" text @click="again()"> New Game </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: {
    dialog: {
      type: Boolean,
      require: true,
      default: false,
    },
    title: {
      type: String,
      require: true,
      default: "Default Title",
    },
    description: {
      type: String,
      require: true,
      default: "Default description",
    },
  },
  data() {
    return {
      displayPopup: false,
    };
  },
  methods: {
    cancel() {
      this.displayPopup = false;
      this.$emit("close-popup");
    },
    again() {
      this.displayPopup = false;
      this.$emit("close-popup");
    },
  },
  watch: {
    dialog: function () {
      console.log("watch");
      this.displayPopup = this.dialog;
    }
  },
};
</script>
