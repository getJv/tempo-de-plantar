<template>
  <div>
    <v-tabs
      v-model="tab"
      background-color="green darken-2"
      :elevation="0"
      dark
      grow
      show-arrows
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
      <v-tabs-items v-model="tab">
        <v-tab-item :value="'tab-1'">
          <v-card flat>
            <v-card-text>
              <FormUser :email.sync="email" :tab.sync="tab" />
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item :value="'tab-2'">
          <FormMap />
        </v-tab-item>
        <v-tab-item :value="'tab-3'">
          <FormTree />
        </v-tab-item>
      </v-tabs-items>
    </v-tabs>
  </div>
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
  created() {
    this.$store.dispatch("updateHeaderTitle", "Cadastrar nova árvore");
  },

  data() {
    return {
      tab: null,
      email: "",
    };
  },
};
</script>

<style scoped></style>
