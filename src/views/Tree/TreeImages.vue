<template>
  <div>
    <v-file-input
      label="Selecione uma imagem"
      outlined
      prepend-icon="mdi-camera"
    ></v-file-input>
    <v-list two-line>
      <template v-for="(item, index) in items">
        <v-subheader
          v-if="item.header"
          :key="item.header"
          v-text="item.header"
        ></v-subheader>

        <v-divider
          v-else-if="item.divider"
          :key="index"
          :inset="item.inset"
        ></v-divider>

        <v-list-item v-else :key="item.title">
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.title"></v-list-item-title>
            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        avatar:
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/man-watering-a-newly-planted-tree-royalty-free-image-92709219-1556203726.jpg",
        title: "Imagem 1",
      },
      { divider: true, inset: true },
      {
        avatar:
          "https://www.saga.co.uk/contentlibrary/saga/publishing/verticals/home-and-garden/gardening/advice-and-tips/trees/how-to-lay-out-a-new-garden.jpg",
        title: "Imagem 2",
      },
      { divider: true, inset: true },
      {
        avatar:
          "https://www.growingagreenerworld.com/wp-content/uploads/2017/04/WaterIn-LR.jpg",
        title: "Imagem 3",
      },
      { divider: true, inset: true },
      {
        avatar:
          "https://i2.wp.com/greenhubafrica.com/wp-content/uploads/2019/07/vna_WWF_Intel_continue_wetland_reforestation_project.jpg",
        title: "Imagem 4",
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
        title: "Imagem 5",
      },
    ],
  }),
};
</script>

<style></style>
