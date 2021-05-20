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
        <salespersonvue-dashboard-vue
          v-else-if="getActiveUserData.userRoles == 'salesperson'"
        ></salespersonvue-dashboard-vue>
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
import adminvue from "./create/admin-create-project";
import salesteamleadvue from "./create/salesteamlead-create.project";
import salespersonvue from "./create/sales-person-create-project";
import noComponentFound from "../../components/noComponentFound";

export default {
  components: {
    "adminvue-dashboard-vue": adminvue,
    "salesteamleadvue-dashboard-vue": salesteamleadvue,
    "salespersonvue-dashboard-vue": salespersonvue,
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
