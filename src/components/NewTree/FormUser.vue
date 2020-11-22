<template>
  <v-container>
    <v-row align="center" justify="center" style="height:500px">
      <v-col cols="12" sm="6">
        <v-card>
          <v-card-title>
            <v-row align="center" justify="center">
              <v-card flat class="mt-n15">
                <v-avatar :size="128">
                  <v-img :src="avatarImage" />
                </v-avatar>
              </v-card>
            </v-row>
          </v-card-title>
          <v-card-text>
            <div class="text-center">
              <span class="title"> {{ title }} </span>
            </div>
            <span v-if="!newUser">
              <div
                class="text-center"
                v-for="(text, index) in user.achivements"
                :key="index"
              >
                <span class="subtitle"> {{ text }} </span>
              </div>
              <div class="text-center">
                <v-btn color="green" icon @click="reset">
                  <v-icon>mdi-refresh-circle</v-icon>
                </v-btn>
              </div>
            </span>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" v-if="newUser && !user && !userNotFound">
        <v-text-field
          label="E-mail do voluntário"
          v-model="localEmail"
          :error-messages="localEmailErrors"
          @input="$v.localEmail.$touch()"
          @blur="$v.localEmail.$touch()"
        />
        <v-btn
          v-if="!this.$v.$invalid"
          :loading="loadingUser"
          outlined
          block
          color="green"
          @click="find"
        >
          Buscar
        </v-btn>
      </v-col>

      <v-col cols="12" v-if="userNotFound || user != null">
        <center v-if="user == null">
          <v-card outlined class="pa-3" width="250">
            <div class="subtitle font-weight-bold text-center">
              Voluntário não encontrado
            </div>
            <div class="caption text-center">
              Continue com um novo cadastro
            </div>
            <div class="caption text-center">
              ou pesquise novamente
              <v-btn color="green" icon @click="reset">
                <v-icon>mdi-refresh-circle</v-icon>
              </v-btn>
            </div>
          </v-card>
        </center>
        <v-btn
          block
          dark
          class="mt-5"
          color="green"
          @click="$emit('update:tab', 'tab-2')"
        >
          Continuar
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import avatar from "../../assets/avatar.svg";
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";
export default {
  name: "FormUser",
  mixins: [validationMixin],
  props: {
    email: {
      type: String,
      required: true,
    },
  },
  validations: {
    localEmail: {
      required,
      email,
    },
  },
  computed: {
    localEmail: {
      get() {
        return this.email;
      },
      set(value) {
        this.$emit("update:email", value);
      },
    },

    title() {
      return this.newUser ? "Identificação de Voluntário" : this.user.name;
    },
    avatarImage() {
      return this.newUser ? avatar : this.user.image_url;
    },
    localEmailErrors() {
      const errors = [];
      if (!this.$v.localEmail.$dirty) return errors;
      !this.$v.localEmail.required && errors.push("Campo obrigatório.");
      !this.$v.localEmail.email && errors.push("E-mail inválido");
      return errors;
    },
  },
  methods: {
    find() {
      this.loadingUser = true;
      setTimeout(() => {
        if (this.email === "jhonatanvinicius@gmail.com") {
          this.user = {
            name: "Jhonatan Morais",
            email: "jhonatanvinicius@gmail.com",
            image_url: "https://bit.ly/3flWQTo",
            achivements: ["Já Plantou 50 árvores!", "300 missões concluídas"],
          };
          this.newUser = false;
        } else {
          this.newUser = true;
          this.userNotFound = true;
        }

        this.loadingUser = false;
      }, 500);
    },
    reset() {
      this.newUser = true;
      this.user = null;
      this.userNotFound = false;
      this.$emit("update:name", "");
      this.$emit("update:email", "");
    },
  },
  data() {
    return {
      loadingUser: false,
      avatar,
      user: null,
      newUser: true,
      userNotFound: false,
    };
  },
};
</script>

<style></style>
