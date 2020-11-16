<template>
  <v-card flat>
    <div v-if="!gettingLocation" style="height:15rem">
      <MglMap
        :accessToken="accessToken"
        :mapStyle="mapStyle"
        :center="centerLocaton"
        :zoom="13"
        :attributionControl="false"
        @mousedown="setMarker"
      >
        <MglMarker :coordinates="location">
          <div slot="marker">
            <v-icon :size="64" color="green">mdi-tree</v-icon>
          </div>

          <MglPopup anchor="bottom">
            <div>Hello, I'm popup!</div>
          </MglPopup>
        </MglMarker>

        <!-- <MglAttributionControl />
        <MglNavigationControl position="top-right"/>
        <MglGeolocateControl position="top-right"/>
        <MglScaleControl position="bottom-left" -->
        /></MglMap
      >
    </div>
    <v-row class="px-2" align="center" justify="center">
      <v-col cols="12">
        <v-text-field label="Longitude" />
      </v-col>
      <v-col cols="12">
        <v-text-field label="Latitude" />
      </v-col>
      <v-col cols="12">
        <v-text-field label="Área do plantio em hectares" />
      </v-col>
      <v-col cols="12">
        <v-btn dark color="green darken-3 elevation-0" block>Próximo </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import Mapbox from "mapbox-gl";
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
    /* MglAttributionControl,
    MglNavigationControl,
    MglGeolocateControl,
    MglScaleControl, */
    MglPopup,
  },
  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
    this.startLocation();
  },
  methods: {
    setMarker(event) {
      this.location = [
        event.mapboxEvent.lngLat.lng,
        event.mapboxEvent.lngLat.lat,
      ];
      console.log(event);
    },
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

        this.location = [
          geoLocation.coords.longitude,
          geoLocation.coords.latitude,
        ];
        this.centerLocaton = this.location;
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
      centerLocaton: null,
      location: null,
      gettingLocation: true,
      errorStr: null,
    };
  },
};
</script>

<style></style>
