<template>
  <div>
    <v-card height="100vh" width="100vw">
      <MglMap
        v-if="!gettingLocation"
        :accessToken="accessToken"
        :mapStyle="mapStyle"
        :center="centerLocation"
        :zoom="14"
        :attributionControl="false"
      >
        <MglMarker
          v-for="tree in $store.getters.trees"
          :key="tree.id"
          :coordinates="[tree.location.lng, tree.location.lat]"
        >
          <div slot="marker">
            <v-icon :size="36" color="green">mdi-tree</v-icon>
          </div>

          <MglPopup anchor="bottom">
            <div>Hello, I'm popup!</div>
          </MglPopup>
        </MglMarker>
        <span v-if="showArea">
          <TreeArea
            v-for="tree in $store.getters.trees"
            :key="tree.id"
            :latitude="tree.location.lat"
            :longitude="tree.location.lng"
            :radiusFromMeters="300"
          />
        </span>
      </MglMap>
    </v-card>
    <v-row class="float-info " align="center" justify="center" no-gutters>
      <v-col cols="9">
        <v-card>
          <v-card-text>
            <center>{{ $store.getters.trees.length }} novas árvores</center>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-btn
          to="/new-tree"
          class="ml-n5"
          small
          color="green darken-3"
          fab
          dark
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="6">
        <v-switch label="Ver área" v-model="showArea"></v-switch>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Mapbox from "mapbox-gl";
import TreeArea from "@/components/WorldTree/TreeArea";
import {
  MglMap,
  MglMarker,
  MglPopup,

  /* MglAttributionControl,
  MglNavigationControl,
  MglGeolocateControl,
  MglScaleControl, */
} from "vue-mapbox";
export default {
  name: "FormMap",
  components: {
    MglMap,
    MglMarker,
    MglPopup,
    TreeArea,

    /* MglAttributionControl,
    MglNavigationControl,
    MglGeolocateControl,
    MglScaleControl, */
  },
  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;

    if (this.trees.length > 0) {
      this.centerLocation = [
        this.trees[0].location.lng,
        this.trees[0].location.lat,
      ];
      this.gettingLocation = false;
    } else {
      this.startLocation();
    }

    this.$store.dispatch("updateHeaderTitle", "Tempo de Plantar");
  },
  computed: {
    trees() {
      return this.$store.getters.trees;
    },
  },
  methods: {
    async getLocation() {
      return new Promise((resolve, reject) => {
        if (!("geolocation" in navigator)) {
          reject(new Error("Geolocation is not available."));
        }

        navigator.geolocation.getCurrentPosition(
          (pos) => {
            resolve(pos);
          },
          (err) => {
            reject(err);
          }
        );
      });
    },
    async startLocation() {
      try {
        var geoLocation = await this.getLocation();

        this.centerLocation = [
          geoLocation.coords.longitude,
          geoLocation.coords.latitude,
        ];
      } catch (error) {
        console.log(error);
      } finally {
        this.gettingLocation = false;
      }
    },
  },
  data() {
    return {
      accessToken: process.env.VUE_APP_MAPBOX_TOKEN, // your access token. Needed if you using Mapbox maps
      mapStyle: process.env.VUE_APP_MAPBOX_MAP_STYLE, // your map style
      centerLocation: null,
      gettingLocation: true,
      errorStr: null,
      showArea: false,
    };
  },
};
</script>

<style scoped>
.world-map {
  z-index: 1;
}
.float-info {
  position: fixed;
  bottom: 50px;
  left: calc((calc(100vw - 100px) / 2) - 15vw);
  width: calc(100vw - 100px);
  height: calc(8vh);
  z-index: 5;
}
</style>
