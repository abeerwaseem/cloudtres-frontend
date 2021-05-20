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
        <salesteamleadvue-dashboard-vue
          v-else-if="getActiveUserData.userRoles == 'salesteamlead'"
        ></salesteamleadvue-dashboard-vue>
        <salespersondvue-dashboard-vue
          v-else-if="getActiveUserData.userRoles == 'salesperson'"
        ></salespersondvue-dashboard-vue>
        <clientvue-dashboard-vue
          v-else-if="getActiveUserData.userRoles == 'client'"
        ></clientvue-dashboard-vue>
        <no-component-found v-else></no-component-found>
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
import adminvue from "./em-create/admin-crreate";
import salesteamleadvue from "./em-create/create";
import salespersondvue from "./em-create/create";
import clientvue from "./client-create/create";
import noComponentFound from "../../components/noComponentFound";
export default {
  components: {
    "adminvue-dashboard-vue": adminvue,
    "salesteamleadvue-dashboard-vue": salesteamleadvue,
    "salespersondvue-dashboard-vue": salespersondvue,
    "clientvue-dashboard-vue": clientvue,
    "no-component-found": noComponentFound
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
