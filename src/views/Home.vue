<template>
  <v-row
    align="center"
    justify="center"
    style="height: 100vh; background-color:green"
    transition="fade-transition"
  >
    <v-img
      class="loadingAnimation"
      :src="logo"
      :max-width="350"
      alt="Tempo de plantar"
    ></v-img>
  </v-row>
</template>

<script>
import logo from "@/assets/logo.jpeg";
export default {
  name: "home",
  computed: {
    loading() {
      return this.$store.getters.loadingTrees;
    },
  },
  watch: {
    loading(newValue) {
      if (!newValue) {
        this.$router.push("world-florest");
      }
    },
  },
  mounted() {
    this.$store.dispatch("showHeader", false);
    this.$store.dispatch("fetchTrees");
  },
  data() {
    return {
      logo,
    };
  },
};
</script>

<style scoped>
.loadingAnimation {
  animation: pulse 2s infinite; /* referring directly to the animation's @keyframe declaration */
}
</style>
