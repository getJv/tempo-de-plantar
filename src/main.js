import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from "./router";
import store from "./store";
import VueGeolocation from 'vue-browser-geolocation';
import AnimateCss from "animate.css"

Vue.use(AnimateCss)
Vue.use(VueGeolocation);

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
