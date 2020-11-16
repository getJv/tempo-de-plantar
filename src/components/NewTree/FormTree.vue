<template>
  <v-card flat>
    <v-card-text>
      <v-text-field label="Dia do plantio" />
      <v-text-field label="Hora do plantio" />
      <v-text-field label="Quantidade do plantio" />
      <v-text-field
        label="A muda que esta plantando é Espécie Nativa do Cerrado?"
      />
      <v-text-field label="Lista de Espécies do Cerrado" />
      <v-text-field label="Referencia do local" />
      <v-text-field label="Local do plantio" />
      <v-text-field label="Quantidade de mudas plantadas" />
      <v-btn dark color="green darken-3 elevation-0" block
        >Salvar os dados</v-btn
      >
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "FormTree",
};
</script>

<style></style>
