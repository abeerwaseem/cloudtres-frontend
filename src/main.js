/* eslint-disable */
import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
// Import Font Awesomne js Files
import '@fortawesome/fontawesome-free/js/all.js';

import 'bootstrap';
// import jQuery from 'jquery';
// window.$ = window.jQuery = jQuery;
import './assets/css/app.scss';

import axios from 'axios'
import VueAxios from 'vue-axios'
window.axios = axios;
Vue.use(VueAxios, axios)
window.Vue = Vue;


import VueLazyload from 'vue-lazyload'
// or with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/images/group-3739.png',
  loading: '/images/RigidPaltryAntelope-max-1mb.gif',
  attempt: 1
})

import numeral from 'numeral';
import numFormat from 'vue-filter-number-format';

Vue.filter('numFormat', numFormat(numeral));

import CKEditor from 'ckeditor4-vue';

Vue.use( CKEditor );

import VModal from 'vue-js-modal/dist/index.nocss.js'
import 'vue-js-modal/dist/styles.css'
Vue.use(VModal)

import VuejsDialog from 'vuejs-dialog';
import VuejsDialogMixin from 'vuejs-dialog/dist/vuejs-dialog-mixin.min.js'; // only needed in custom components

// include the default style
import 'vuejs-dialog/dist/vuejs-dialog.min.css';

// Tell Vue to install the plugin.
Vue.use(VuejsDialog);

Vue.config.productionTip = false;

Vue.component('pagination', require('laravel-vue-pagination'));

// Staging
// window.homeurl = 'http://api.pdsworkbench.com';
// window.api_homeurl = 'http://api.pdsworkbench.com/api/v1';
// window.app_url = 'http://pdsworkbench.com';


// Live
// window.homeurl = 'https://api.pncworkbench.com';
// window.api_homeurl = 'https://api.pncworkbench.com/api/v1';
// window.app_url = 'https://payments.pncworkbench.com';


// Dev
// window.homeurl = 'http://api.pdsworkbench.com';
// window.api_homeurl = 'http://api.pdsworkbench.com/api/v1';
// window.app_url = 'http://pdsworkbench.com';

// Local
window.homeurl = 'http://api.cloudtres.test';
window.api_homeurl = 'http://api.cloudtres.test/api';
window.app_url = 'http://cloudtres.test:8080';



axios.defaults.baseURL =  window.api_homeurl;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.withCredentials = true;


new Vue({
  store,
  router,
  component: {
  },
  async mounted() {
    await axios.get(window.homeurl+"/api/user").then(resps => {
      this.$store.dispatch("checkIfUserAlreadyLogedIn", {
          response: resps,
        });
    }).catch(error => {
      this.$store.dispatch("checkIfUserAlreadyLogedIn", {
        response: error.response,
      });
    });
  },
  render: h => h(App)
}).$mount("#app");
