/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";
import $ from "jquery";
import router from "./../router/index.js";

Vue.use(Vuex);

import VueToast from "vue-toast-notification";
// Import one of available themes
// import 'vue-toast-notification/dist/theme-default.css';
import "vue-toast-notification/dist/theme-sugar.css";

Vue.use(VueToast);
/* eslint-disable */
export default new Vuex.Store({
  state: {
    totalNotificationCount : 0,
    online : false,
    connection: false,
    message: '',
    active_user : {},
    general_load : false,
    errors: {
        connection: false
    },
    auth: {
        loggedIn: false,
        userRoles : '',
        user : {}
    }
  },
  mutations: {
    UPDATA_NOTIFICATION_COUNT (state,payload) {
      console.log(payload);
      state.totalNotificationCount = payload;
    },
    GET_ACTIVE_USER (state,payload) {
      state.auth.user = payload;
      state.auth.loggedIn = true;
      state.auth.userRoles = 'admin';
    },
    UPDATE_LOGOUT_USER_INFO (state,payload) {
      state.auth.user = {};
      state.auth.loggedIn = false;
      state.auth.userRoles = '';
    },
    UPDATE_GENERAL_LOADER (state,payload) {
      state.general_load = payload;
    },
  },
  actions: {
    generalLoader (context,payload) {
      context.commit('UPDATE_GENERAL_LOADER',payload.response);
    },
    async getingTotalCountOfNotification (context) {
      // Total Count
          window.axios({
              method: 'get',
              url: window.api_homeurl + '/notifications/total-count',
              headers: {'Content-Type': 'application/x-www-form-urlencoded'},
              responseType: 'json',
          })
          .then(function (response) {
              if(response.status == 200) {
                console.log(response.data);
                context.commit('UPDATA_NOTIFICATION_COUNT',response.data);
              } else {
                  alert("Somme Server Error!");
              }
          })
          .catch(function (error) {
              if(error.response.status == 401) {
                  // $this.showtostrMessages(error.response.data.error,'error');
                  return false;
              } else {
                  alert("some Server Error");
              }
          });
    },
    async checkIfUserAlreadyLogedIn (context,payload) {
      if(payload.response.status == 200) {
        if( (payload.response.data) ) {
          context.commit('GET_ACTIVE_USER',payload.response.data);
          if(router.currentRoute.fullPath === '/login') {
            // router.push('/home');
            router.push(router.currentRoute.query.redirect ?? '/home');
          }
        } else {
          context.dispatch('showtostrMessageNotifications',{ 'message':'Current User has no Role assign please assign him role first to process.','type':'error'} );
        }
      } else {
        console.log(router.currentRoute.fullPath);
        if((router.currentRoute.fullPath !== '/login' || router.currentRoute.fullPath !== '/register') && (router.currentRoute.meta.public !== true) ) {
          context.dispatch('showtostrMessageNotifications',{ 'message':'Unauthorized','type':'error'} );
          router.push('/login?redirect='+router.currentRoute.fullPath);
        }
      }

    },
    async showtostrMessageNotifications(context,payload) {
      Vue.$toast.open({
        message: payload.message,
        type: payload.type,
        position: 'top-right',
        duration:4000
        // all of other options may go here
      });
    },
    async displayMessageErrors(context,payload) {
      let $this = this;
      let formEvent = payload.formEvent;
      let response = payload.response;
      if(formEvent) {
        context.dispatch('removeFormFieldsErrors',{ 'formData' : payload.formEvent  } );
      }

      if(response.status == 204) {
        await axios.get(window.homeurl+"/api/user").then(resps => {
          context.commit('GET_ACTIVE_USER',resps.data);
          context.dispatch('showtostrMessageNotifications',{ 'message':'Login Successfully!','type':'success'} );
          // router.push('/home');
          router.push(router.currentRoute.query.redirect ?? '/home');
        });
      }
      else if(response.status == 200) {
        if( (typeof response.data.status !== 'undefined' ) && (response.data.status == 'fail')) {
          context.dispatch('showtostrMessageNotifications',{ 'message':response.data.message,'type':'error'} );
        } else {
          context.dispatch('showtostrMessageNotifications',{ 'message':response.data.message,'type':'success'} );
        }
      }
      else if(response.status == 422) {
        $.each(payload.response.data.errors, function(key, value) {
          context.dispatch('heighlightFormFields',{ 'key' : key , 'formData' : payload.formEvent  } );
          context.dispatch('showtostrMessageNotifications',{ 'message':value[0],'type':'error'} );
        });
        context.dispatch('showtostrMessageNotifications',{ 'message':payload.response.data.message,'type':'error'} );
      } else {
        context.dispatch('showtostrMessageNotifications',{ 'message':payload.response.data.message,'type':'error'} );
      }
    },
    async heighlightFormFields(context,payload) {
      let compareValue = payload.key;
        $.each(payload.formData.getElementsByClassName("form-group") , function(key, value) {
              let matchValue = value.childNodes[0].getAttribute('for');

              if(value.childNodes[1] !== 'undefined') {
                if(matchValue == compareValue ) {
                  value.childNodes[1].className += " input-border-errors ";
                }
              }
        });
    },
    async removeFormFieldsErrors (context,payload) {
      $.each(payload.formData.getElementsByClassName("form-group") , function(key, value) {
            let matchValue = value.childNodes[0].getAttribute('for');
            value.childNodes[1].classList.remove("input-border-errors");
      });
    },
    async logOutSection(context,payload){
      await axios.post(window.api_homeurl+'/auth/logout')
      .then(res => {
        if(res.status == 200) {
          context.commit('UPDATE_LOGOUT_USER_INFO');
          context.commit('UPDATE_GENERAL_LOADER',false);
          router.push('/login');
          context.dispatch('showtostrMessageNotifications',{ 'message':'Logout Successfully!','type':'success'} );
        }
      }).catch(error => {
        context.dispatch('showtostrMessageNotifications',{ 'message':error.response.data.message,'type':'error'} );
      })
    },
    async getHttp(context,payload){
      return await axios.get(payload.url).then(resps => {
          return resps;
        }).catch(error => {
          context.dispatch('showtostrMessageNotifications',{ 'message':error.response.data.message,'type':'error'} );
        });
    },
    async postHttp(context,payload){

      let $this = this;
      let url = payload.url;
      let formDetails = payload.formDetails;
      let formEvent =  payload.formEvent;
      if(formEvent) {
        context.dispatch('removeFormFieldsErrors',{ 'formData' : payload.formEvent  } );
      }
      return await axios.post(url , formDetails).then(resps => {
          return resps;
        }).catch(error => {
          // console.log(error.response);
          $.each(error.response.data.errors, function(key, value) {
            context.dispatch('heighlightFormFields',{ 'key' : key , 'formData' : payload.formEvent  } );
            context.dispatch('showtostrMessageNotifications',{ 'message':value[0],'type':'error'} );
          });
          context.dispatch('showtostrMessageNotifications',{ 'message':error.response.data.message,'type':'error'} );
        });
    },
    async deleteHttp(context,payload){

      let $this = this;
      let url = payload.url;
      let formDetails = payload.data_id;
      return await axios.delete(url).then(resps => {
          return resps;
        }).catch(error => {
          context.dispatch('showtostrMessageNotifications',{ 'message':payload.response.data.message,'type':'error'} );
        });
    },
  },
  modules: {}
});
