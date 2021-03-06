// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuelidate from "vuelidate";
import BootstrapVue from "bootstrap-vue";
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import store from "./store";
import userMixins from './mixins/user-mixin.js'
Vue.use(BootstrapVue);
Vue.config.productionTip = false
Vue.use(Vuelidate)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  mixins: [userMixins],
  components: {App},
  template: '<App/>'
})
