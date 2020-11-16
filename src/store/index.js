import Vue from "vue";
import Vuex from "vuex";
import trees from "./modules/trees";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    trees,
  },
});