<template>
  <div class="viewDashBoard" v-cloak>
    <div class="container">
      <div
        v-if="
          typeof getActiveUserData.user !== 'undefined' &&
            Object.keys(getActiveUserData.user).length
        "
      >
        <adminvue-package-vue
          v-if="
          (getActiveUserData.userRoles == 'admin') ||
          (getActiveUserData.userRoles == 'salesteamlead') ||
          (getActiveUserData.userRoles == 'salesperson')"
        ></adminvue-package-vue>
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
import adminvue from "./create/admin-package-create";
import noComponentFound from "../../components/noComponentFound";
export default {
  components: {
    "adminvue-package-vue": adminvue,
    "no-component-found": noComponentFound
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
    document.title =
      "Cloudtres - " + this.$router.app._route.meta.pageTitle;
  },
  methods: {}
};
</script>
