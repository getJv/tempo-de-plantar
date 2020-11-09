<template>
  <v-row
    align="center"
    justify="center"
    style="height: 100vh; background-color:green"
  >
    <v-img :src="logo" :max-width="350" alt="Tempo de plantar"></v-img>
  </v-row>
</template>

<script>
import logo from "@/assets/logo.jpeg";
export default {
  name: "home",
  data() {
    return {
      logo,
    };
  },
};
</script>

<style></style>
