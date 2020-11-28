<template>
  <v-row>
    <v-col cols="12"
      ><div class="caption font-weight-bold">Espécie do plantio</div>
      <div class="title">{{ tree.species }}</div>
    </v-col>
    <v-col cols="6">
      <div class="caption font-weight-bold">Área do plantio</div>
      <div class="body-1 ">{{ tree.planted_area }}</div>
    </v-col>

    <v-col cols="6">
      <div class="caption font-weight-bold">Quantidade de mudas</div>
      <div class="body-1 ">{{ tree.planted_number }}</div>
    </v-col>
    <v-col cols="12"> <v-divider class="my-1"></v-divider> </v-col>
    <v-col cols="6">
      <div class="caption font-weight-bold">Especie do cerrado?</div>
      <div class="body-1 " v-if="tree.local_type">Sim</div>
      <div class="body-1 " v-else>Não</div>
    </v-col>
    <v-col cols="6">
      <div class="caption font-weight-bold">Local do plantio</div>
      <div class="body-1 ">{{ tree.local_type }}</div>
    </v-col>
    <v-col cols="12"> <v-divider class="my-1"></v-divider> </v-col>
    <v-col cols="12">
      <div class="caption font-weight-bold">Voluntária responsável</div>
      <div class="body-1">{{ tree.voluntieer }}</div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "TabPlantio",
  props: {
    tree: {
      require: true,
      type: Object,
    },
  },
};
</script>

<style></style>
