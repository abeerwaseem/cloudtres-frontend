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
// import VueAxios from 'vue-axios'
// window.axios = axios;
Vue.use(axios)


import CKEditor from 'ckeditor4-vue';

Vue.use( CKEditor );

Vue.config.productionTip = false;

axios.defaults.baseURL =  'https://vueapiworkbench.test';

// axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

axios.defaults.withCredentials = true;

// window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;


// window.axios.get('/sanctum/csrf-cookie').then(response => {
  // console.log(response);
  new Vue({
    store,
    router,
    render: h => h(App)
  }).$mount("#app");  
// });
