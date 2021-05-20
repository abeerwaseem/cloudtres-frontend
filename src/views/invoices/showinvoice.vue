<template>
  <div class="project-overview">
    <div class="container">
      <div
        v-if="
          typeof getActiveUserData.user !== 'undefined' &&
            Object.keys(getActiveUserData.user).length
        "
      >
        <adminvue-projects-invoice-detail-vue
          v-if="getActiveUserData.userRoles == 'admin'"
        ></adminvue-projects-invoice-detail-vue>
        <salesteamleadvue-projects-invoice-detail-vue
          v-else-if="getActiveUserData.userRoles == 'salesteamlead'"
        ></salesteamleadvue-projects-invoice-detail-vue>
        <salespersonvue-projects-invoice-detail-vue
          v-else-if="getActiveUserData.userRoles == 'salesperson'"
        ></salespersonvue-projects-invoice-detail-vue>
        <clientvue-projects-invoice-detail-vue
          v-else-if="getActiveUserData.userRoles == 'client'"
        ></clientvue-projects-invoice-detail-vue>
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
// @ is an alias to /src
import adminvue from "./children/admin_invoice";
import salesteamleadvue from "./children/salesteamlead_invoice";
import noComponentFound from "../../components/noComponentFound";
import salespersonvue from "./children/salesperson_invoice";
import clientvue from "./children/client_invoice_details";

export default {
  components: {
    "adminvue-projects-invoice-detail-vue": adminvue,
    "salesteamleadvue-projects-invoice-detail-vue": salesteamleadvue,
    "no-component-found": noComponentFound,
    "salespersonvue-projects-invoice-detail-vue": salespersonvue,
    "clientvue-projects-invoice-detail-vue": clientvue
  },
  computed: {
    getActiveUserData() {
      return this.$store.state.auth;
    }
  },
  mounted() {}
};
</script>
