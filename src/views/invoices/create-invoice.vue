<template>
  <div class="project-overview" v-cloak>
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
        <salesteamleadvue-projects-vue
          v-else-if="getActiveUserData.userRoles == 'salesteamlead'"
        ></salesteamleadvue-projects-vue>
        <salespersonvue-projects-vue
          v-else-if="getActiveUserData.userRoles == 'salesperson'"
        ></salespersonvue-projects-vue>
        <not-found v-else></not-found>
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
// @ is an alias to /src
import adminvue from "./create/admin-create";
import salesteamleadvue from "./create/salesteamlead-create";
import salespersonvue from "./create/salesperson-create";
import noComponent from "../../components/noComponentFound";
// import salesteamleadvue from "./overview/salesteamlead_overview";
// import salespersonvue from "./overview/salesperson_overview";
// import clientvue from "./overview/client_overview";
// import defaultvue from "./overview/default_overview";

export default {
  components: {
    "adminvue-projects-vue": adminvue,
    "salesteamleadvue-projects-vue": salesteamleadvue,
    "salespersonvue-projects-vue": salespersonvue,
    "not-found": noComponent
    // "clientvue-projects-vue": clientvue,
    // "default-projects-vue": defaultvue
  },
  computed: {
    getActiveUserData() {
      return this.$store.state.auth;
    }
  }
};
</script>
