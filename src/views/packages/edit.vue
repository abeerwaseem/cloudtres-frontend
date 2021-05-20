<template>
  <div class="viewDashBoard" v-cloak>
    <div class="container">
      <div
        v-if="
          typeof getActiveUserData.user !== 'undefined' &&
            Object.keys(getActiveUserData.user).length
        "
      >
        <adminvue-package-vue
          v-if="getActiveUserData.userRoles == 'admin'"
        ></adminvue-package-vue>
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
import adminvue from "./edit/admin-package-edit";
// import salesteamleadvue from "./edit/salesteamlead-client-edit";
// import salespersonvue from "./edit/salesperson-client-edit";
import noComponentFound from "../../components/noComponentFound";

export default {
  components: {
    "adminvue-package-vue": adminvue,
    // "salesteamleadvue-dashboard-vue": salesteamleadvue,
    // "salespersonvue-dashboard-vue": salespersonvue,

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
