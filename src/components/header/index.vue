/* eslint-disable */
<template>
  <div
    class="row"
    v-if="
      typeof getActiveUserData.user !== 'undefined' &&
        Object.keys(getActiveUserData.user).length
    "
  >
    <admin-header-header-vue
       v-if="
          (getActiveUserData.userRoles == 'admin') || 
          (getActiveUserData.userRoles == 'salesteamlead') ||
          (getActiveUserData.userRoles == 'salesperson')"
    ></admin-header-header-vue>
    <default-header-vue v-else></default-header-vue>
  </div>
</template>
<script>
import admin_header from "./admin_header";
import default_header from "./default_header";

export default {
  data() {
    return {
      pre: window.pre,
      homepre: window.pre
    };
  },
  components: {
    "admin-header-header-vue": admin_header,
    "default-header-vue": default_header
  },
  computed: {
    getActiveUserData() {
      return this.$store.state.auth;
    }
  }
};
</script>
