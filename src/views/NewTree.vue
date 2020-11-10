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
        <v-card flat>
          <div v-if="!gettingLocation" style="height:30rem">
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

              <MglAttributionControl />
              <MglNavigationControl position="top-right"/>
              <MglGeolocateControl position="top-right"/>
              <MglScaleControl position="bottom-left"
            /></MglMap>
          </div>
        </v-card>
        <!--   <div v-if="errorStr">
          Sorry, but the following error occurred: {{ errorStr }}
        </div>

        <div v-if="gettingLocation">
          <i>Getting your location...</i>
        </div>
 -->
        <!--  <div v-if="location">
          Your location data is {{ location.coords.latitude }},
          {{ location.coords.longitude }}
        </div> -->
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
import {
  MglMap,
  MglMarker,
  MglPopup,
  MglAttributionControl,
  MglNavigationControl,
  MglGeolocateControl,
  MglScaleControl,
} from "vue-mapbox";
import FormUser from "@/components/NewTree/FormUser";
export default {
  name: "NewTree",
  components: {
    MglMap,
    MglMarker,
    MglAttributionControl,
    MglNavigationControl,
    MglGeolocateControl,
    MglScaleControl,
    MglPopup,
    FormUser,
  },
  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
    this.startLocation();
  },
  computed: {},
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
      tab: null,
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
