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
        <v-card flat>
          <v-card-text>card 1</v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item :value="'tab-2'">
        <v-card flat>
          <div style="height:30rem">
            <MglMap :accessToken="accessToken" :mapStyle="mapStyle" />
          </div>
        </v-card>
      </v-tab-item>
      <v-tab-item :value="'tab-3'">
        <v-card flat>
          <v-card-text>card 3</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import Mapbox from "mapbox-gl";
import { MglMap } from "vue-mapbox";
export default {
  name: "NewTree",
  components: {
    MglMap,
  },
  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
  },
  data() {
    return {
      tab: null,
      accessToken: process.env.VUE_APP_MAPBOX_TOKEN, // your access token. Needed if you using Mapbox maps
      mapStyle: process.env.VUE_APP_MAPBOX_MAP_STYLE, // your map style

      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
};
</script>

<style></style>
