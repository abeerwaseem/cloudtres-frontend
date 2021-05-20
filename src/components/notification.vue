<template>
  <div class="dropdown notification-dropdown">
    <dropdown :align="'left'" :y="50" :x="50" :before-open="callback">
      <template slot="icon">
        <button class="btn btn-secondary" type="button">
          <i class="fas fa-bell"></i>
          <span class="badge">{{ getNotificationCount }}</span>
        </button>
      </template>
      <template slot="body">
        <div class="nofication-body not-len">
          <div
            v-if="notification_loader"
            class="white-row loader-route notification-loader"
          >
            <div class="lds-sub-ripple">
              <div></div>
              <div></div>
            </div>
          </div>
          <div
            class="wrapper-notifications"
            v-if="
              typeof total_notifications.data !== 'undefined' &&
                Object.keys(total_notifications.data).length
            "
          >
            <div class="mark-as-read text-right">
              <span
                ><a @click.prevent="markAllAsRead" href=""
                  >Mark all as read</a
                ></span
              >
            </div>
            <div class="not-groups">
              <div
                class="notifications-listing"
                v-for="(notf, nof_index) in total_notifications.data"
                :key="nof_index"
              >
                <h5 class="date-heading">{{ nof_index }}</h5>
                <ul class="list-group list-group-flush">
                  <li
                    class="list-group-item"
                    :class="{ active: !not.read_at }"
                    v-for="(not, not_index) in notf"
                    :key="not_index"
                  >
                    <div
                      class="media"
                      @click="
                        markAsRead(not.id, not.data.redirect, not.read_at)
                      "
                    >
                      <avatar
                        class="mr-3"
                        :username="not.data.body.name"
                      ></avatar>
                      <div class="media-body">
                        <h6>{{ not.data.body.title }}</h6>
                        <p>{{ not.data.body.message }}</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div v-else class="wrapper-notifications">
            <div class="no-notifications-found">
              <no-record-found></no-record-found>
            </div>
          </div>
        </div>
      </template>
    </dropdown>
  </div>
</template>

<script>
import Avatar from "vue-avatar";
import Dropdown from "bp-vuejs-dropdown";
import norecordfound from "../components/no-record-found";
export default {
  name: "notifications",
  components: {
    Avatar,
    Dropdown,
    "no-record-found": norecordfound
  },
  data() {
    return {
      notification_loader: true,
      total_count: 0,
      total_notifications: {}
    };
  },
  mounted() {
    document.title =
      "Cloudtres - " + this.$router.app._route.meta.pageTitle;
    //this.$store.dispatch("getingTotalCountOfNotification");
  },
  computed: {
    getNotificationCount() {
      return this.$store.state.totalNotificationCount;
    }
  },
  methods: {
    async markAllAsRead() {
      const $this = this;
      $this.notification_loader = true;
      const data = $this.$store.dispatch("postHttp", {
        url: "notifications/mark-all-as-read",
        formDetails: null,
        formEvent: null
      });
      await data.then(function(response) {
        if (typeof response !== "undefined") {
          $this.getNotifications();
        }
      });
    },
    async getNotifications() {
      this.$store.dispatch("getingTotalCountOfNotification");
      const $this = this;
      const data = $this.$store.dispatch("getHttp", {
        url:
          "notifications/total-notification?timezone=" +
          Intl.DateTimeFormat().resolvedOptions().timeZone
      });
      await data.then(function(response) {
        if (typeof response != "undefined") {
          $this.total_notifications = response;
          $this.notification_loader = false;
        }
      });
    },
    async callback(resolve) {
      this.notification_loader = true;
      resolve();
      await this.getNotifications();
    },
    async markAsRead(id, redirect, read_at) {
      const $this = this;
      $this.notification_loader = true;
      if (read_at === null) {
        const data = $this.$store.dispatch("postHttp", {
          url: "notifications/mark-as-read/" + id,
          formDetails: {
            id: id
          },
          formEvent: null
        });
        await data.then(function(response) {
          if (typeof response !== "undefined") {
            $this.getNotifications();
            if (redirect.popup) {
              // console.log("hey");
            } else {
              if ($this.$route.fullPath == redirect.url) {
                $this.$router.push(redirect.url + "?reload=1");
              } else {
                $this.$router.push(redirect.url);
              }
              $this.notification_loader = true;
            }
          }
        });
      } else {
        $this.getNotifications();
        if (redirect.popup) {
          // console.log("hey");
        } else {
          if ($this.$route.fullPath == redirect.url) {
            $this.$router.push(redirect.url + "?reload=1");
          } else {
            $this.$router.push(redirect.url);
          }
        }
        $this.notification_loader = true;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.btn:not(:disabled):not(.disabled) {
  cursor: pointer;
  box-shadow: none;
}
.no-notifications-found {
  text-align: center;
  padding: 11px 0;
  font-size: 22px;
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
.nofication-body.not-len {
  position: relative;
  .white-row.loader-route.notification-loader {
    position: absolute;
    width: 96%;
    top: 0;
    height: 100%;
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
body header .top-right .dropdown .nofication-body.not-len {
  padding: 15px 0;
  .mark-as-read.text-right {
    padding: 0 15px;
  }
}
body
  header
  .top-right
  .dropdown
  .nofication-body
  .not-groups
  .notifications-listing
  h5.date-heading {
  padding: 0 15px;
}
body
  header
  .top-right
  .dropdown
  .nofication-body
  .not-groups
  .notifications-listing
  .list-group-flush
  li.list-group-item {
  padding: 12px 15px;
  &.active {
    z-index: 2;
    color: #fff;
    background-color: #f8f8f8;
    border-color: #40af2a;
  }
}
</style>
