<template>
  <div>
    <div v-if="!$store.getters.creatingTree">
      <v-tabs
        v-model="tab"
        background-color="green darken-2"
        :elevation="0"
        dark
        grow
        show-arrows
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
        <v-tabs-items v-model="tab">
          <v-tab-item :value="'tab-1'">
            <v-card flat>
              <v-card-text>
                <FormUser
                  ref="formUser"
                  :email.sync="form.email"
                  :tab.sync="tab"
                />
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item :value="'tab-2'">
            <FormMap
              ref="formMap"
              :tab.sync="tab"
              :latitude.sync="form.latitude"
              :longitude.sync="form.longitude"
              :raioPlantio.sync="form.raioPlantio"
              :quantidadeMudas.sync="form.quantidadeMudas"
            />
          </v-tab-item>
          <v-tab-item :value="'tab-3'">
            <FormTree
              ref="formTree"
              :dataPlantio.sync="form.dataPlantio"
              :especieNativaCerrado.sync="form.especieNativaCerrado"
              :especie.sync="form.especie"
              :localDePlantio.sync="form.localDePlantio"
            />
          </v-tab-item>
        </v-tabs-items>
      </v-tabs>
      <center v-if="tab === 'tab-3'">
        <v-btn
          @click="isFormValid"
          width="300"
          dark
          color="green darken-3 elevation-0"
        >
          Salvar os dados
        </v-btn>
      </center>
    </div>
    <v-overlay v-else>
      <v-row justify="center">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-row>
      <v-row justify="center">
        <div class="subtitle">Registrando a nova árvore ...</div>
      </v-row>
    </v-overlay>
  </div>
</template>

<script>
import FormUser from "@/components/NewTree/FormUser";
import FormMap from "@/components/NewTree/FormMap";
import FormTree from "@/components/NewTree/FormTree";
export default {
  name: "NewTree",
  components: {
    FormUser,
    FormMap,
    FormTree,
  },
  created() {
    this.$store.dispatch("updateHeaderTitle", "Cadastrar nova árvore");
  },
  methods: {
    isFormValid() {
      const fields = Object.values(this.$refs);
      fields.forEach((field) => field.$v.$touch());

      if (fields.some((field) => field.$v.$invalid == true)) return;
      this.$store.dispatch("createTree", this.form);
    },
  },
  watch: {
    "$store.getters.creatingTree"(newValue, oldValue) {
      if (oldValue && !newValue) {
        const lastObj = this.$store.getters.trees[
          this.$store.getters.trees.length - 1
        ];
        this.$router.push({ name: "tree", params: { tree: lastObj } });
      }
    },
  },
  data() {
    return {
      tab: null,
      saving: false,
      form: {
        email: "",
        latitude: 0,
        longitude: 0,
        raioPlantio: 0,
        quantidadeMudas: 0,
        dataPlantio: "",
        especieNativaCerrado: false,
        especie: "",
        localDePlantio: "",
      },
    };
  },
};
</script>

<style scoped></style>
