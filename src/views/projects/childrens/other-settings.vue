<template>
  <div class="project-overview">
    <div
      v-if="
        typeof getActiveUserData.user !== 'undefined' &&
          Object.keys(getActiveUserData.user).length
      "
    >
      <adminvue-projects-settings-vue
        v-if="
          getActiveUserData.userRoles == 'admin' ||
            getActiveUserData.userRoles == 'salesteamlead' ||
            getActiveUserData.userRoles == 'salesperson'
        "
      ></adminvue-projects-settings-vue>
      <div v-else>
        <p>You dont have permision to access this page.</p>
      </div>
      <!-- <adminvue-projects-settings-vue
        v-else-if="getActiveUserData.userRoles == 'salesteamlead'"
      ></adminvue-projects-settings-vue>
      <adminvue-projects-settings-vue
        v-else-if="getActiveUserData.userRoles == 'salesperson'"
      ></adminvue-projects-settings-vue> -->
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
import adminvue from "./other-settings/other_settings";

export default {
  components: {
    "adminvue-projects-settings-vue": adminvue
  },
  computed: {
    getActiveUserData() {
      return this.$store.state.auth;
    }
  }
};
</script>
