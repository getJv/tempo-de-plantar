<template>
  <v-card flat>
    <div v-if="!gettingLocation" style="height:25rem">
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
      </MglMap>
    </div>
    <v-row class="px-2" align="center" justify="center">
      <!--
        <v-col cols="12">
          <v-text-field label="Longitude" v-model="_longitude" />
        </v-col>
        <v-col cols="12">
          <v-text-field label="Latitude" v-model="_latitude" />
        </v-col> 
      -->
      <v-col cols="12">
        <v-text-field
          label="Área do plantio (em metros)"
          v-model="_raioPlantio"
          hint="Informe o raio e calcularemos o restante"
          :error-messages="_raioPlantioErrors"
          @input="$v._raioPlantio.$touch()"
          @blur="$v._raioPlantio.$touch()"
        />
      </v-col>
      <v-col cols="12">
        <v-text-field
          label="Quantidade de mudas (unidades)"
          v-model="_quantidadeMudas"
          :error-messages="_quantidadeMudasErrors"
          @input="$v._quantidadeMudas.$touch()"
          @blur="$v._quantidadeMudas.$touch()"
        />
      </v-col>
      <v-col cols="12">
        <v-btn
          v-if="
            !this.$v.$invalid &&
              _quantidadeMudas > 0 &&
              _quantidadeMudasErrors > 0
          "
          dark
          color="green darken-3 elevation-0"
          block
          @click="$emit('update:tab', 'tab-3')"
        >
          Próximo
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import Mapbox from "mapbox-gl";
import { validationMixin } from "vuelidate";
import { required, numeric } from "vuelidate/lib/validators";
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
  props: {
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
    raioPlantio: {
      type: Number,
      required: true,
    },
    quantidadeMudas: {
      type: Number,
      required: true,
    },
  },
  mixins: [validationMixin],
  validations: {
    _raioPlantio: {
      required,
      numeric,
    },
    _quantidadeMudas: {
      required,
      numeric,
    },
  },
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
      this._longitude = event.mapboxEvent.lngLat.lng;
      this._latitude = event.mapboxEvent.lngLat.lat;
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
  computed: {
    _longitude: {
      get() {
        return this.longitude;
      },
      set(value) {
        this.$emit("update:longitude", Number(value));
      },
    },
    _latitude: {
      get() {
        return this.latitude;
      },
      set(value) {
        this.$emit("update:latitude", Number(value));
      },
    },
    _raioPlantio: {
      get() {
        return this.raioPlantio;
      },
      set(value) {
        this.$emit("update:raioPlantio", Number(value));
      },
    },
    _quantidadeMudas: {
      get() {
        return this.quantidadeMudas;
      },
      set(value) {
        this.$emit("update:quantidadeMudas", Number(value));
      },
    },
    _raioPlantioErrors() {
      const errors = [];
      if (!this.$v._raioPlantio.$dirty) return errors;
      !this.$v._raioPlantio.required && errors.push("Campo obrigatório.");
      !this.$v._raioPlantio.numeric && errors.push("Apenas valores numéricos");
      return errors;
    },
    _quantidadeMudasErrors() {
      const errors = [];
      if (!this.$v._quantidadeMudas.$dirty) return errors;
      !this.$v._quantidadeMudas.required && errors.push("Campo obrigatório.");
      !this.$v._quantidadeMudas.numeric &&
        errors.push("Apenas valores numéricos");
      return errors;
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
