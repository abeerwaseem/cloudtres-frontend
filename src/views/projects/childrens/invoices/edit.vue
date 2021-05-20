<template>
  <div class="project-overview" v-cloak>
    <div
      v-if="
        typeof getActiveUserData !== 'undefined' &&
          Object.keys(getActiveUserData).length
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
  </div>
</template>

<script>
// @ is an alias to /src
import adminvue from "./edit-invoice/admin-edit-invoice.vue";
import salesteamleadvue from "./edit-invoice/salesteamlead-edit-invoice";
import salespersonvue from "./edit-invoice/salesperson-edit-invoice";
import noComponent from "../../../../components/noComponentFound";
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
    // "default-projects-vue": defaultvue
  },
  computed: {
    getActiveUserData() {
      return this.$store.state.auth;
    }
  }
};
</script>
