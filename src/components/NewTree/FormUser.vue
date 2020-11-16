<template>
  <v-card flat class="pl-3 pr-8">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="6">
        <v-row align="center" justify="center"
          ><v-avatar :size="128">
            <v-img
              src="https://github.com/getJv/getjv.github.io/blob/master/.github/images/jhonatan-circle-cropped.png?raw=true"
            ></v-img> </v-avatar
        ></v-row>
      </v-col>
      <v-col cols="12" sm="6">
        <div class="text-center">
          <span class="title">Nível Campeão!</span>
        </div>
        <div class="text-center">
          <span class="subtitle">Já Plantou 359 arvores no mundo!</span>
        </div>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field label="E-mail" />
        <v-text-field label="Nome" />
        <v-text-field label="Telefone" />
        <v-text-field label="Email" />
      </v-col>
      <v-col cols="12" sm="6">
        <v-btn dark color="green darken-3 elevation-0" block>Próximo </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "FormUser",
};
</script>

<style></style>
