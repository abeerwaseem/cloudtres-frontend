<template>
  <div class="viewDashBoard" v-cloak>
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
        <sales-team-lead-vue-projects-vue
          v-else-if="getActiveUserData.userRoles == 'salesteamlead'"
        ></sales-team-lead-vue-projects-vue>
        <sales-person-vue-projects-vue
          v-else-if="getActiveUserData.userRoles == 'salesperson'"
        ></sales-person-vue-projects-vue>
        <client-vue-projects-vue
          v-else-if="getActiveUserData.userRoles == 'client'"
        ></client-vue-projects-vue>
        <default-vue-projects-vue v-else></default-vue-projects-vue>
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
import adminvue from "./components/project-view-childrens/admin-view";
import salesteamleadvue from "./components/project-view-childrens/salesteamlead-view";
import salespersonvue from "./components/project-view-childrens/salesperson-view";
import clientonvue from "./components/project-view-childrens/client-view";
import defaultvue from "./components/project-view-childrens/default-view";

export default {
  components: {
    "adminvue-projects-vue": adminvue,
    "sales-team-lead-vue-projects-vue": salesteamleadvue,
    "sales-person-vue-projects-vue": salespersonvue,
    "client-vue-projects-vue": clientonvue,
    "default-vue-projects-vue": defaultvue
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
