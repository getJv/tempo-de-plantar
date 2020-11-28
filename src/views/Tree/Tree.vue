<template>
  <div>
    <Carousel></Carousel>
    <v-tabs v-model="tab" class="elevation-0" grow icons-and-text>
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="#tab-1">
        Plantio
        <v-icon>mdi-tree</v-icon>
      </v-tab>
      <v-tab href="#tab-2">
        Voluntários
        <v-icon>mdi-account-group</v-icon>
      </v-tab>
      <v-tab href="#tab-3">
        Imagens
        <v-icon>mdi-camera</v-icon>
      </v-tab>

      <v-tab-item value="tab-1">
        <v-card flat tile>
          <v-card-text>
            <plantio :tree="tree" />
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item value="tab-2">
        <v-card flat tile>
          <v-card-text>
            <volunteers />
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item value="tab-3">
        <v-card flat tile>
          <v-card-text> <tree-images /> </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import TreeImages from "./TreeImages.vue";
import Carousel from "./Carousel.vue";
import Plantio from "./Plantio.vue";
import Volunteers from "./Volunteers.vue";
export default {
  components: { Carousel, TreeImages, Plantio, Volunteers },
  mounted() {
    if (!this.$route.params.tree) {
      this.$router.push({ name: "home" });
    }

    console.log(this.$route);
    this.tree = this.$route.params.tree;
    this.$store.dispatch(
      "updateHeaderTitle",
      `Plantio de ${this.tree.species}`
    );
  },

  data() {
    return {
      tab: null,
      tree: null,
    };
  },
};
</script>

<style></style>
