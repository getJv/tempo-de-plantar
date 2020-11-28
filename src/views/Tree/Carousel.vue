<template>
  <v-carousel
    cycle
    height="250"
    hide-delimiter-background
    show-arrows-on-hover
    :interval="3000"
  >
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-sheet :color="colors[i]" height="100%">
        <v-img :src="slide"></v-img>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: [
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/man-watering-a-newly-planted-tree-royalty-free-image-92709219-1556203726.jpg",
        "https://www.saga.co.uk/contentlibrary/saga/publishing/verticals/home-and-garden/gardening/advice-and-tips/trees/how-to-lay-out-a-new-garden.jpg",
        "https://www.growingagreenerworld.com/wp-content/uploads/2017/04/WaterIn-LR.jpg",
        "https://www.growingagreenerworld.com/wp-content/uploads/2017/04/PlantingDepth-LR.jpg",
        "https://i2.wp.com/greenhubafrica.com/wp-content/uploads/2019/07/vna_WWF_Intel_continue_wetland_reforestation_project.jpg",
      ],
    };
  },
};
</script>
