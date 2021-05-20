<template>
  <div class="project-overview" v-cloak>
    <div
      v-if="
        typeof getActiveUserData.user !== 'undefined' &&
          Object.keys(getActiveUserData.user).length
      "
    >
      <adminvue-projects-files-vue
        v-if="getActiveUserData.userRoles == 'admin'"
      ></adminvue-projects-files-vue>
      <salesteamleadvue-projects-files-vue
        v-else-if="getActiveUserData.userRoles == 'salesteamlead'"
      ></salesteamleadvue-projects-files-vue>
      <salespersonvue-projects-files-vue
        v-else-if="getActiveUserData.userRoles == 'salesperson'"
      ></salespersonvue-projects-files-vue>
      <clientvue-projects-files-vue
        v-else-if="getActiveUserData.userRoles == 'client'"
      ></clientvue-projects-files-vue>
      <default-projects-files-vue v-else></default-projects-files-vue>
    </div>
    <div v-else class="white-row loader-route">
      <div class="lds-sub-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import adminvue from "./files/admin_files";
import salesteamleadvue from "./files/salesteamlead_files";
import salespersonvue from "./files/salesperson_files";
import clientvue from "./files/client_files";
import defaultvue from "./files/default_files";

export default {
  name: "projects.files",
  components: {
    "adminvue-projects-files-vue": adminvue,
    "salesteamleadvue-projects-files-vue": salesteamleadvue,
    "salespersonvue-projects-files-vue": salespersonvue,
    "clientvue-projects-files-vue": clientvue,
    "default-projects-files-vue": defaultvue
  },
  computed: {
    getActiveUserData() {
      return this.$store.state.auth;
    }
  }
};
</script>
