<template>
  <div class="project-overview" v-cloak>
    <div
      v-if="
        typeof getActiveUserData.user !== 'undefined' &&
          Object.keys(getActiveUserData.user).length
      "
    >
      <adminvue-projects-messages-vue
        v-if="getActiveUserData.userRoles == 'admin'"
      ></adminvue-projects-messages-vue>
      <salesteamleadvue-projects-messages-vue
        v-else-if="getActiveUserData.userRoles == 'salesteamlead'"
      ></salesteamleadvue-projects-messages-vue>
      <salespersonvue-projects-messages-vue
        v-else-if="getActiveUserData.userRoles == 'salesperson'"
      ></salespersonvue-projects-messages-vue>
      <clientvue-projects-messages-vue
        v-else-if="getActiveUserData.userRoles == 'client'"
      ></clientvue-projects-messages-vue>
      <default-projects-messages-vue v-else></default-projects-messages-vue>
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
import adminvue from "./messages/admin_messages";
import salesteamleadvue from "./messages/salesteamlead_messages";
import salespersonvue from "./messages/salesperson_messages";
import clientvue from "./messages/client_messages";
import defaultvue from "./messages/default_messages";

export default {
  name: "projects.messages",
  components: {
    "adminvue-projects-messages-vue": adminvue,
    "salesteamleadvue-projects-messages-vue": salesteamleadvue,
    "salespersonvue-projects-messages-vue": salespersonvue,
    "clientvue-projects-messages-vue": clientvue,
    "default-projects-messages-vue": defaultvue
  },
  computed: {
    getActiveUserData() {
      return this.$store.state.auth;
    }
  }
};
</script>
