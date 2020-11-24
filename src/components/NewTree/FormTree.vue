<template>
  <v-card flat>
    <v-card-text>
      <Datepicker label="Dia do plantio" @data-selecionada="dataSelecionada" />

      <v-select
        :items="listaNativaCerrado"
        item-text="name"
        item-value="value"
        label="Espécie nativa do cerrado?"
        v-model="_especieNativaCerrado"
        :error-messages="_especieNativaCerradoErrors"
        @input="$v._especieNativaCerrado.$touch()"
        @blur="$v._especieNativaCerrado.$touch()"
      ></v-select>

      <v-select
        :items="listaDeEspecie"
        label="Informe a espécie das mudas"
        v-model="_especie"
        :error-messages="_especieErrors"
        @input="$v._especie.$touch()"
        @blur="$v._especie.$touch()"
      ></v-select>

      <v-select
        :items="listaDeLocalDePlantio"
        label="Local de plantio"
        v-model="_localDePlantio"
        :error-messages="_localDePlantioErrors"
        @input="$v._localDePlantio.$touch()"
        @blur="$v._localDePlantio.$touch()"
      ></v-select>
    </v-card-text>
  </v-card>
</template>

<script>
import Datepicker from "@/components/widgets/DatePicker";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
export default {
  name: "FormTree",
  mixins: [validationMixin],
  validations: {
    _especieNativaCerrado: {
      required,
    },
    _especie: {
      required,
    },
    _localDePlantio: {
      required,
    },
  },
  components: {
    Datepicker,
  },
  props: {
    dataPlantio: {
      type: String,
      required: true,
    },
    especieNativaCerrado: {
      type: Boolean,
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
    _especieNativaCerradoErrors() {
      const errors = [];
      if (!this.$v._especieNativaCerrado.$dirty) return errors;
      !this.$v._especieNativaCerrado.required &&
        errors.push("Campo obrigatório.");
      return errors;
    },
    _especieErrors() {
      const errors = [];
      if (!this.$v._especie.$dirty) return errors;
      !this.$v._especie.required && errors.push("Campo obrigatório.");
      return errors;
    },
    _localDePlantioErrors() {
      const errors = [];
      if (!this.$v._localDePlantio.$dirty) return errors;
      !this.$v._localDePlantio.required && errors.push("Campo obrigatório.");
      return errors;
    },
  },
  methods: {
    dataSelecionada(value) {
      this._dataPlantio = value;
    },
  },
  data() {
    return {
      listaDeEspecie: ["Abacateiro", "Mangueira", "Pequi"],
      listaDeLocalDePlantio: ["Área rural", "Área Urbana", "Parque"],
      listaNativaCerrado: [
        {
          name: "Sim",
          value: true,
        },
        {
          name: "Não",
          value: false,
        },
      ],
    };
  },
};
</script>

<style></style>
