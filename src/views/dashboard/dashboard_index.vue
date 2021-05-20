<template>
  <div class="viewDashBoard" v-cloak>
    <div class="container">
      <div
        v-if="
          typeof getActiveUserData.user !== 'undefined' &&
            Object.keys(getActiveUserData.user).length
        "
      >
        <adminvue-dashboard-vue
          v-if="getActiveUserData.userRoles == 'admin'"
        ></adminvue-dashboard-vue>
        <sales-team-lead-dashboard-vue
          v-else-if="getActiveUserData.userRoles == 'salesteamlead'"
        ></sales-team-lead-dashboard-vue>
        <sales-person-dashboard-vue
          v-else-if="getActiveUserData.userRoles == 'salesperson'"
        ></sales-person-dashboard-vue>
        <client-dashboard-vue
          v-else-if="getActiveUserData.userRoles == 'client'"
        ></client-dashboard-vue>
        <default-dashboard-vue v-else></default-dashboard-vue>
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
import adminvue from "./components/admin_dashboard";
import salesteamleadtablevue from "./components/salesteamlead_dashboard";
import salespersonevue from "./components/salesperson_dashboard";
import clientvue from "./components/client_dashboard";
import default_vue from "./components/default_dashboard";

export default {
  components: {
    "adminvue-dashboard-vue": adminvue,
    "sales-team-lead-dashboard-vue": salesteamleadtablevue,
    "sales-person-dashboard-vue": salespersonevue,
    "client-dashboard-vue": clientvue,
    "default-dashboard-vue": default_vue
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
    document.title =
      "PNC Work Bench - " + this.$router.app._route.meta.pageTitle;
  },
  methods: {}
};
</script>
