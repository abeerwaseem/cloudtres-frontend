<template>
  <div class="dropdown notification-dropdown setting-nav">
    <dropdown :align="'left'" :y="50" :x="50" :before-open="callback">
      <template slot="icon">
        <button class="btn btn-secondary" type="button">
          <img src="/images/group-4591.png" />
        </button>
      </template>
      <template slot="body">
        <div class="nofication-body not-len">
          <div class="media">
            <img src="/images/user-profile-icon.png" />
            <div class="media-body">
              <p class="user-name">{{ getActiveUserData.user.name }}</p>
              <p>
                <router-link
                  :to="{
                    path: '/profile-settings'
                  }"
                  tag="a"
                >
                  View Profile
                </router-link>
              </p>
            </div>
          </div>
          <div class="links-grp">
            <a @click.prevent="logOutSection" class="dropdown-item" href="#"
              ><i class="fas fa-power-off"></i> Logout</a
            >
          </div>
        </div>
      </template>
    </dropdown>
  </div>
</template>

<script>
import Dropdown from "bp-vuejs-dropdown";
export default {
  name: "notifications",
  components: {
    Dropdown
  },
  data() {
    return {
      notification_loader: true,
      total_count: 0,
      total_notifications: {}
    };
  },
  computed: {
    getActiveUserData() {
      return this.$store.state.auth;
    }
  },
  mounted() {
    document.title =
      "PNC Work Bench - " + this.$router.app._route.meta.pageTitle;
  },
  methods: {
    async callback(resolve) {
      resolve();
    },
    logOutSection() {
      this.$store.dispatch("generalLoader", {
        response: true
      });
      this.$store.dispatch("logOutSection");
    }
  }
};
</script>
<style lang="scss" scoped>
.btn:not(:disabled):not(.disabled) {
  cursor: pointer;
  box-shadow: none;
}
body header .top-right .dropdown .nofication-body.not-len {
  width: 240px;
  padding: 15px;
  text-align: left;
  .media-body {
    padding-left: 10px;
    p {
      margin-bottom: 0;
    }
  }
}
.wrapper-notifications {
  position: relative;
  min-height: 150px;
  .white-row.loader-route.notification-loader {
    top: 0;
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 9;
    .lds-sub-ripple {
      display: block;
      position: relative;
      width: 80px;
      height: 80px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
