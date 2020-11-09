<template>
  <v-app>
    <v-main>
      <!-- <Home /> -->
      <NewTree />
    </v-main>
  </v-app>
</template>

<script>
//import Home from "./views/Home";
import NewTree from "./views/NewTree";

export default {
  name: "App",

  components: {
    //  Home,
    NewTree,
  },

  data: () => ({
    //
  }),
};
</script>
