<template>
  <v-app>
    <v-app-bar
      v-if="$store.getters.showHeader"
      app
      color="green darken-3"
      dark
      hide-on-scroll
      flat
      scroll-target="#scrolling-techniques-4"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>{{ $store.getters.headerTitle }}</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer
      v-if="$store.getters.showHeader"
      v-model="drawer"
      absolute
      temporary
    >
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="green--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-avatar>
              <img
                src="https://github.com/getJv/getjv.github.io/blob/master/.github/images/jhonatan-circle-cropped.png?raw=true"
              />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>Jhonatan Morais</v-list-item-title>
              <v-list-item-subtitle>
                Nível 3 - Macaco Biruta
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>
          <v-list-item>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Plantar uma muda</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Minha Floresta</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Missões</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
