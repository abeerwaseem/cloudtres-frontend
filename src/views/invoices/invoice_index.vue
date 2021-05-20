<template>
  <div class="viewDashBoard" v-cloak>
    <div class="container">
      <div
        v-if="
          typeof getActiveUserData.user !== 'undefined' &&
            Object.keys(getActiveUserData.user).length
        "
      >
        <admin-projects-invoices-vue
          v-if="getActiveUserData.userRoles == 'admin'"
        ></admin-projects-invoices-vue>
        <salesteamlead-projects-invoices-vue
          v-else-if="getActiveUserData.userRoles == 'salesteamlead'"
        ></salesteamlead-projects-invoices-vue>
        <salespersonleadvue-projects-invoices-vue
          v-else-if="getActiveUserData.userRoles == 'salesperson'"
        ></salespersonleadvue-projects-invoices-vue>
        <client-projects-invoices-vue
          v-else-if="getActiveUserData.userRoles == 'client'"
        ></client-projects-invoices-vue>
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
import adminvue from "./components/admin_vue";
import salesteamleadvue from "./components/salesteamlead_vue";
import noComponentFound from "../../components/noComponentFound";
import salespersonleadvue from "./components/salesperson_vue";
import clientvue from "./components/client_vue";

export default {
  components: {
    "no-component-found": noComponentFound,
    "admin-projects-invoices-vue": adminvue,
    "salesteamlead-projects-invoices-vue": salesteamleadvue,
    "salespersonleadvue-projects-invoices-vue": salespersonleadvue,
    "client-projects-invoices-vue": clientvue
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
    document.title = this.$router.app._route.meta.pageTitle;
  },
  methods: {}
};
</script>
