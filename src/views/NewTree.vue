<template>
  <v-card flat>
    <v-toolbar color="green darken-3" dark flat>
      <v-btn icon>
        <v-icon>mdi-keyboard-backspace</v-icon>
      </v-btn>

      <v-toolbar-title>Tempo de Plantar</v-toolbar-title>
    </v-toolbar>
    <v-tabs
      v-model="tab"
      background-color="green darken-2"
      fixed-tabs
      dark
      icons-and-text
    >
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="#tab-1">
        Voluntário
        <v-icon>mdi-account-box</v-icon>
      </v-tab>

      <v-tab href="#tab-2">
        Local
        <v-icon>mdi-map-marker</v-icon>
      </v-tab>

      <v-tab href="#tab-3">
        Árvore
        <v-icon>mdi-tree</v-icon>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item :value="'tab-1'">
        <FormUser />
      </v-tab-item>
      <v-tab-item :value="'tab-2'">
        <FormMap />
      </v-tab-item>
      <v-tab-item :value="'tab-3'">
        <FormTree />
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import FormUser from "@/components/NewTree/FormUser";
import FormMap from "@/components/NewTree/FormMap";
import FormTree from "@/components/NewTree/FormTree";
export default {
  name: "NewTree",
  components: {
    FormUser,
    FormMap,
    FormTree,
  },

  data() {
    return {
      tab: null,
    };
  },
};
</script>

<style></style>
