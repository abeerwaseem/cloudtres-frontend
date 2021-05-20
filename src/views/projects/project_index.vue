<template>
  <div class="viewDashBoard" v-cloak>
    <div class="container">
      <div
        v-if="
          typeof getActiveUserData.user !== 'undefined' &&
            Object.keys(getActiveUserData.user).length
        "
      >
        <adminvue-projects-vue
          v-if="getActiveUserData.userRoles == 'admin'"
        ></adminvue-projects-vue>
        <sales-team-lead-vue-projects-vue
          v-else-if="getActiveUserData.userRoles == 'salesteamlead'"
        ></sales-team-lead-vue-projects-vue>
        <sales-person-vue-projects-vue
          v-else-if="getActiveUserData.userRoles == 'salesperson'"
        ></sales-person-vue-projects-vue>
        <client-vue-projects-vue
          v-else-if="getActiveUserData.userRoles == 'client'"
        ></client-vue-projects-vue>
        <default-vue-projects-vue v-else></default-vue-projects-vue>
      </div>
      <div v-else class="white-row loader-route">
        <div class="lds-sub-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import adminvue from "./components/admin_projects";
// import noComponentFound from "../../components/noComponentFound";
import salesteamleadvue from "./components/salesteamlead_projects";
import salespersondvue from "./components/sales_person_projects";
import clientdvue from "./components/client_projects";
import defaultvue from "./components/default_projects";

export default {
  components: {
    "adminvue-projects-vue": adminvue,
    "sales-team-lead-vue-projects-vue": salesteamleadvue,
    "sales-person-vue-projects-vue": salespersondvue,
    "client-vue-projects-vue": clientdvue,
    "default-vue-projects-vue": defaultvue
    // "no-component-found" : noComponentFound,
  },
  computed: {
    getActiveUserData() {
      return this.$store.state.auth;
    }
  },
  data() {
    return {};
  },
  mounted() {
    document.title = this.$router.app._route.meta.pageTitle;
  },
  methods: {}
};
</script>
