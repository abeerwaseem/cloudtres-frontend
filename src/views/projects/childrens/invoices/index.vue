<template>
  <div class="project-overview">
    <div
      v-if="
        typeof getActiveUserData !== 'undefined' &&
          Object.keys(getActiveUserData).length
      "
    >
      <adminvue-projects-invoices-vue
        v-if="getActiveUserData.userRoles == 'admin'"
      ></adminvue-projects-invoices-vue>
      <salesteamleadvue-projects-invoices-vue
        v-else-if="getActiveUserData.userRoles == 'salesteamlead'"
      ></salesteamleadvue-projects-invoices-vue>
      <salesperson-projects-invoices-vue
        v-else-if="getActiveUserData.userRoles == 'salesperson'"
      ></salesperson-projects-invoices-vue>
      <client-projects-invoices-vue
        v-else-if="getActiveUserData.userRoles == 'client'"
      ></client-projects-invoices-vue>
      <not-found v-else></not-found>
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
import adminvue from "./admin_invoices";
import salesteamlead from "./salesteamlead_invoices";
import salespersonvue from "./salesperson_invoices";
import clientvue from "./client_invoices";
import noComponent from "../../../../components/noComponentFound";

export default {
  components: {
    "adminvue-projects-invoices-vue": adminvue,
    "salesteamleadvue-projects-invoices-vue": salesteamlead,
    "salesperson-projects-invoices-vue": salespersonvue,
    "client-projects-invoices-vue": clientvue,
    "not-found": noComponent
  },
  computed: {
    getActiveUserData() {
      return this.$store.state.auth;
    }
  }
};
</script>
