<template>
  <div class="viewDashBoard" v-cloak>
    <div class="container">
      <div class="white-row">
        <h2 class="global-style-heading">
          Notifications
          <a
            @click.prevent="refreshNotificationTable"
            href=""
            class="refreshData"
            ><i class="fas fa-redo-alt"></i
          ></a>
        </h2>
        <div
          v-if="
            typeof getActiveUserData.user !== 'undefined' &&
              Object.keys(getActiveUserData.user).length
          "
        >
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
              <div class="not-groups">
                <div class="notifications-listing">
                  <ul class="list-group list-group-flush">
                    <li
                      class="list-group-item"
                      :class="{ active: !not.read_at }"
                      v-for="(not, not_index) in total_notifications.data"
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
                          <p>{{ not.created_at }}</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="row">
                  <div class="col-sm-12">
                    <pagination
                      class="pagination justify-content-center"
                      :data="total_notifications"
                      :limit="1"
                      @pagination-change-page="getNotifications"
                    ></pagination>
                  </div>
                </div>
              </div>
            </div>
            <div v-else class="wrapper-notifications">
              <no-record-found></no-record-found>
            </div>
          </div>
        </div>
        <div v-else class="white-row loader-route">
          <div class="lds-sub-ripple">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import norecordfound from "../../components/no-record-found";
import Avatar from "vue-avatar";
export default {
  components: {
    Avatar,
    "no-record-found": norecordfound
  },
  computed: {
    getActiveUserData() {
      return this.$store.state.auth;
    }
  },
  data() {
    return {
      notification_loader: true,
      total_count: 0,
      total_notifications: {}
    };
  },
  mounted() {
    document.title = this.$router.app._route.meta.pageTitle;
    this.getNotifications();
  },
  methods: {
    refreshNotificationTable() {
      this.getNotifications();
    },
    async getNotifications(page = 1, action = null) {
      const $this = this;
      $this.notification_loader = true;
      const data = $this.$store.dispatch("getHttp", {
        url:
          "notifications/get-total-notification-pagination?timezone=" +
          Intl.DateTimeFormat().resolvedOptions().timeZone +
          "&page=" +
          page
      });
      await data.then(function(response) {
        if (typeof response != "undefined") {
          console.log(response);
          $this.total_notifications = response.data;
          $this.notification_loader = false;
        }
      });
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
            $this.$store.dispatch("getingTotalCountOfNotification");
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
        $this.$store.dispatch("getingTotalCountOfNotification");
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
  padding: 64px 0;
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
body .nofication-body.not-len {
  padding: 15px 0;
  .mark-as-read.text-right {
    padding: 0 15px;
  }
}
body .nofication-body .not-groups .notifications-listing h5.date-heading {
  padding: 0 15px;
}
body
  .nofication-body
  .not-groups
  .notifications-listing
  .list-group-flush
  li.list-group-item {
  padding: 12px 58px;
  cursor: pointer;
  &.active {
    z-index: 2;
    color: #212529;
    background-color: #f8f8f8;
    border-color: #40af2a;
  }
}
body .mr-3 {
  left: 10px;
  top: 18px;
}
.media-body p {
  margin-bottom: 0;
}
ul.pagination.pagination.justify-content-center {
  padding: 40px 0 0;
}
h2.global-style-heading {
  padding-bottom: 20px;
}
</style>
