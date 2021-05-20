<template>
  <div class="employee-index">
    <transition
      name="fade"
      mode="out-in"
      @beforeLeave="beforeLeave"
      @enter="enter"
      @afterEnter="afterEnter"
    >
      <div key="1" v-if="loader" class="white-row loader-route">
        <div class="lds-sub-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
      <div v-else key="1" class="white-row">
        <!-- // Filter Area -->
        <div class="general-filters">
          <div class="col-sm-12">
            <div class="row">
              <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                <div class="row top-gen-heading">
                  <h1 class="global-style-heading">
                    Servers
                    <a
                      @click.prevent="refreshClientTable"
                      href=""
                      class="refreshData"
                      ><i class="fas fa-redo-alt"></i
                    ></a>
                  </h1>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <!-- <form @submit.prevent=""> -->
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="row">
                        <div class="form-actions">
                          <router-link
                            type="submit"
                            id="save-form"
                            class="btn btn-primary"
                            :to="{
                              name: 'servers.create'
                            }"
                            tag="button"
                          >
                            <i class="fas fa-plus-circle"></i> Add New Server
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                <!-- </form> -->
              </div>
            </div>
          </div>
        </div>
        <div class="horizontal-row">
          <hr />
        </div>
        <div class="emp-listing">
          <transition
            name="fade"
            mode="out-in"
            @beforeLeave="beforeLeave"
            @enter="enter"
            @afterEnter="afterEnter"
          >
            <div key="1" v-if="client_loader" class="white-row loader-route">
              <div class="lds-sub-ripple">
                <div></div>
                <div></div>
              </div>
            </div>
            <div v-else class="client-page-wrapper">
              <div class="">
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Vendor</th>
                        <th>Server</th>
                        <th>Status</th>
                        <th>Added On</th>
                      </tr>
                    </thead>
                    <tbody
                      v-if="
                        typeof servers.data !== 'undefined' &&
                          Object.keys(servers.data).length
                      "
                    >
                      <tr
                        v-for="(pack, inv_index) in servers.data"
                        :key="inv_index"
                      >
                        <td>
                          {{ pack.title }}
                        </td>
                        <td>
                          {{ pack.vendor }}
                        </td>
                        <td>
                          <div v-html="pack.server"></div>
                        </td>
                        <td>
                          {{ pack.status}}
                        </td>
                        <td>
                          <b>{{ pack.created_at }}</b>
                        </td>
                      </tr>
                    </tbody>
                    <tbody v-else>
                      <tr>
                        <td colspan="5">
                          <no-record-found></no-record-found>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div
                    class="view-more-btn"
                    v-if="
                      typeof servers.data !== 'undefined' &&
                        Object.keys(servers.data).length
                    "
                  >
                    <div v-if="servers.meta.total > 10" class="loadMoreBtn">
                      <router-link
                        :to="{
                          path: '/servers/user'
                        }"
                        tag="a"
                      >
                        More....
                      </router-link>
                    </div>
                  </div>
                </div>





              </div>
              <!-- <div v-else class="row">
                <div class="col-sm-12">
                  <no-record-found></no-record-found>
                </div>
              </div> -->
            </div>
          </transition>

          <div class="row">
            <div class="col-sm-12">
              <pagination
                class="pagination justify-content-center"
                :data="servers"
                :limit="1"
                @pagination-change-page="getServerData"
              ></pagination>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>

import norecordfound from "../../../components/no-record-found";
export default {
  components: {
    "no-record-found": norecordfound
  },
  data() {
    return {
      copy_url : null,
      loader: true,
      client_loader: true,
      servers: {},
      formData: {
        search: "",
      }
    };
  },
  mounted() {
    document.title =
      "Cloudtres - " + this.$router.app._route.meta.pageTitle;
    this.copy_url = window.app_url + '/package-form/';
    this.getServerData();
    this.loader = false;
  },
  computed: {
    getActiveUserData() {
      return this.$store.state.auth;
    }
  },
  methods: {
    refreshClientTable() {
      this.getServerData();
      this.loader = false;
    },
    async getServerData(page = 1, action = null) {
      const $this = this;
      if (action == "search") {
        if ($this.formData.search.length < 2 && $this.formData.search != "") {
          return true;
        }
      }
      $this.client_loader = true;
      const data = $this.$store.dispatch("getHttp", {
        url:
          "/servers/client?" +
          "page=" +
          page +
          "&search=" +
          $this.formData.search
      });
      await data.then(function(response) {
        if (typeof response !== "undefined") {
          $this.servers = response.data;
        }
        $this.client_loader = false;
      });
    },
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = "auto";
    },
    avatarClass(managers, index) {
      if (managers.length == 1) {
        return "custom-avtr orv-3";
      } else if (managers.length == 2) {
        return "custom-avtr orv-" + (index + 2);
      } else {
        return "custom-avtr orv-" + (index + 1);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
body .white-row.loader-route {
  top: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-property: height, opacity;
  transition-timing-function: ease;
  overflow: hidden;
}
.employee-index {
  .general-filters {
    .form-group {
      width: 95%;
      .input-group {
        input {
          border-radius: 3px !important;
          background: #f9f9f9;
          letter-spacing: 0.28px;
          font-size: 14px;
          padding: 3px 15px;
          color: #364460;
          border: none;
          font-weight: 200;
          height: auto;
        }
        button {
          background: #f9f9f9;
          color: #3b4c54;
          border: none;
          padding: 4px 8px;
        }
      }
    }
    .form-actions {
      width: 100%;
      button {
        width: 100%;
        margin-left: 0;
        padding: 5px 0;
      }
    }
    span.select2.select2-container.select2-container--default {
      width: 100% !important;
    }
  }
  .horizontal-row {
    padding: 30px 0 30px;
    hr {
      margin: 0;
    }
  }
  .wrap-box {
    background: #faf9f7;
    border-radius: 3px;
    padding: 0 20px;
    margin-bottom: 30px;
    .header-top {
      position: absolute;
      right: 26px;
      z-index: 100;
      top: 19px;
      .bp-dropdown__btn {
        border: none;
      }
      .bp-dropdown__body {
        padding: 0;
        background-color: #fff;
        box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.5);
        z-index: 9999;
        border-radius: 4px;
        border: none;
        margin-top: 10px;
        .list-group {
          .list-group-item {
            border: none;
            position: relative;
            display: block;
            border-bottom: 1px solid rgba(0, 0, 0, 0.125);
            padding: 10px 20px 10px 7px;
            text-align: left;
            a {
              color: #212529;
            }
          }
        }
      }
    }
    .emp-details {
      position: relative;
      padding: 20px 0 20px 44px;
      p {
        margin: 0;
        &.user-title {
          font-size: 12px;
        }
        &.user-email {
          font-size: 12px;
        }
      }
      .vue-avatar--wrapper.mr-3 {
        width: 32px !important;
        height: 32px !important;
        position: absolute;
        top: 23px;
        left: 0;
        span {
          letter-spacing: 0.24px;
          color: #ffffff;
          font-size: 12px;
          font-weight: bold;
        }
      }
    }
    .box-brand {
      padding-bottom: 10px;
      div {
        display: inline-block;
        vertical-align: middle;
        width: 50%;
        &.brand-para {
          p {
            margin: 0;
          }
        }
        &.text-right {
          p {
            margin: 0;
          }
        }
      }
    }
    .projects-list {
      p {
        font-weight: bold;
      }
    }
    .footer-box {
      display: block;
      position: relative;
      width: 100%;
      padding: 12px 0;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      &:first-child {
        border-top: none;
        padding-top: 2px;
      }
      .usr-role {
        p {
          margin: 0;
          letter-spacing: 0.24px;
          color: #918a82;
          font-size: 12px;
        }
      }
      .usr-role-name {
        position: absolute;
        right: -35px;
        top: 0;
        .custom-avtr {
          display: inline-block;
          position: relative;
          &.orv-1 {
          }
          &.orv-2 {
            left: -11px;
          }
          &.orv-3 {
            left: -22px;
          }
          &.orv-4 {
            left: -34px;
          }
          .vue-avatar--wrapper {
            margin: 0 !important;
            width: 25px !important;
            height: 25px !important;
            padding: 3px 4px 0 !important;
            span {
              font-size: 11px;
            }
          }
        }
        &.empty_am {
          right: 0;
        }
      }
    }
  }
  .justify-content-center {
    margin-bottom: 0;
  }
}

// Media Query Start

// Extra large devices (lg and less)
@media screen and (max-width: 1199px) {
}
// Extra large devices (md and less)
@media screen and (max-width: 991px) {
}

// Extra large devices (sm and up)
@media screen and (max-width: 767px) {
  body .top-gen-heading {
    padding-top: 10px;
    padding-bottom: 10px;
  }
}

// Extra large devices (xs and up)
@media screen and (max-width: 575px) {
  .employee-index .general-filters .form-group {
    width: 100%;
  }
}
// Extra large devices (xl, 1200px and up)
@media (min-width: 1200) {
}
</style>
