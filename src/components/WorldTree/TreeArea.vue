<template>
  <MglGeojsonLayer
    :sourceId="geoJsonSource.data.id"
    :source="geoJsonSource"
    :layerId="geneticLayerId"
    :layer="geoJsonLayer"
  ></MglGeojsonLayer>
</template>

<script>
/**
 * Use reference: https://codesandbox.io/embed/vue-template-qbwfc
 */

import { MglGeojsonLayer } from "vue-mapbox";
export default {
  name: "TreeArea",
  components: {
    MglGeojsonLayer,
  },
  props: {
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
    radiusFromMeters: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
    },
    Layerid: {
      type: String,
    },
  },
  methods: {
    /**
     * Reference: https://stackoverflow.com/questions/37599561/drawing-a-circle-with-the-radius-in-miles-meters-with-mapbox-gl-js/37794326
     */
    metersToPixelsAtMaxZoom(meters, latitude) {
      return meters / 0.075 / Math.cos((latitude * Math.PI) / 180);
    },
  },
  computed: {
    geoJsonSource() {
      return {
        type: "geojson",
        data: {
          id: this.geneticLayerId,
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [this.longitude, this.latitude],
              },
              properties: {
                id: "value0",
              },
            },
          ],
        },
      };
    },
    geoJsonLayer() {
      return {
        type: "circle",
        paint: {
          "circle-radius": {
            stops: [
              [0, 0],
              [
                20,
                this.metersToPixelsAtMaxZoom(
                  this.radiusFromMeters,
                  this.latitude
                ),
              ],
            ],
            base: 2,
          },
          "circle-color": this.color ? this.color : "red",
          "circle-opacity": 0.6,
        },
      };
    },
    geneticLayerId() {
      return this.Layerid || Math.random() + "g";
    },
  },
  data() {
    return {};
  },
};
</script>

<style></style>
