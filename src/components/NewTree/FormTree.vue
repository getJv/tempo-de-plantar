<template>
  <v-card flat>
    <v-card-text>
      <v-text-field label="Dia do plantio" v-model="_dataPlantio" />

      <v-select
        :items="['Sim', 'Não']"
        label="Espécie nativa do cerrado?"
        v-model="_especieNativaCerrado"
      ></v-select>

      <v-select
        :items="listaDeEspecie"
        label="Qual?"
        v-model="_especie"
      ></v-select>

      <v-select
        :items="listaDeLocalDePlantio"
        label="Local de plantio"
        v-model="_localDePlantio"
      ></v-select>

      <v-btn dark color="green darken-3 elevation-0" block>
        Salvar os dados
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "FormTree",
  props: {
    dataPlantio: {
      type: String,
      required: true,
    },
    especieNativaCerrado: {
      type: String,
      required: true,
    },
    especie: {
      type: String,
      required: true,
    },
    localDePlantio: {
      type: String,
      required: true,
    },
  },
  computed: {
    _dataPlantio: {
      get() {
        return this.dataPlantio;
      },
      set(value) {
        this.$emit("update:dataPlantio", value);
      },
    },
    _especieNativaCerrado: {
      get() {
        return this.especieNativaCerrado;
      },
      set(value) {
        this.$emit("update:especieNativaCerrado", value);
      },
    },
    _especie: {
      get() {
        return this.especie;
      },
      set(value) {
        this.$emit("update:especie", value);
      },
    },
    _localDePlantio: {
      get() {
        return this.localDePlantio;
      },
      set(value) {
        this.$emit("update:localDePlantio", value);
      },
    },
  },
  data() {
    return {
      listaDeEspecie: ["Abacateiro", "Mangueira", "Pequi"],
      listaDeLocalDePlantio: ["Área rural", "Área Urbana", "Parque"],
    };
  },
};
</script>

<style></style>
