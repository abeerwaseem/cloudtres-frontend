/* eslint-disable */
<template>
  <div id="app">
    <div v-if="getGlobalLoader" class="white-row loader-route main-loader-home">
      <div class="lds-sub-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
    <div
      v-if="
        typeof getActiveUserData !== 'undefined' &&
          Object.keys(getActiveUserData).length
      "
    >
      <div class="container-fluid" v-if="getActiveUserData.loggedIn">
        <transition name="fade" mode="out-in">
          <main-header></main-header>
        </transition>
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
        <transition name="fade" mode="out-in">
          <main-footer></main-footer>
        </transition>
      </div>
      <div v-else>
        <router-view />
      </div>
    </div>
    <div v-else class="main-wraper-loader">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>
<script>
import admin_header from "./components/header/index";
import admin_footer from "./components/footer/index";

export default {
  data() {
    return {};
  },
  components: {
    "main-header": admin_header,
    "main-footer": admin_footer
  },
  computed: {
    getActiveUserData() {
      return this.$store.state.auth;
    },
    getGlobalLoader() {
      return this.$store.state.general_load;
    }
  }
};
</script>
<style lang="scss" scoped>
.white-row.loader-route.main-loader-home {
  position: fixed;
  z-index: 9;
  width: 100%;
  height: 100%;
  top: 0;
  cursor: wait;
}
</style>
