/* eslint-disable */
<template>
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
    <div key="2" v-else class="project-overview">
      <section class="project-details-area">
        <h5 class="general-sub-heading">
          Project Details:
          <a @click.prevent="refreshProjectOverview" href="" class="refreshData"
            ><i class="fas fa-redo-alt"></i
          ></a>
        </h5>
        <div class="project-summary">
          <div v-html="project.project_summary"></div>
        </div>
      </section>
      <section class="project-details-area project-details-area-notes">
        <h5 class="general-sub-heading">Project Note:</h5>
        <p v-text="project.notes"></p>
      </section>
      <section class="client-details">
        <h5 class="general-sub-heading">Client Details:</h5>
        <div
          class="col-sm-12"
          v-if="
            typeof project.project_clients !== 'undefined' &&
              Object.keys(project.project_clients).length
          "
        >
          <div
            v-for="(client, cl_index) in project.project_clients"
            :key="cl_index"
            class="client-row"
          >
            <div class="row">
              <div class="col-xl-6 coal-lg-6 col-md-6 col-sm-12">
                <div class="row">
                  <div class="client-detail-box-wrapper">
                    <div class="box">
                      <p>
                        <span>Company Name</span> -
                        {{ client.client_additional_details }}
                      </p>
                      <p><span>Client Name</span> - {{ client.name }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-6 coal-lg-6 col-md-6 col-sm-12">
                <div class="row">
                  <div
                    class="client-detail-box-wrapper text-xl-right text-lg-right text-md-right"
                  >
                    <div class="box">
                      <p><span>Client Email</span> - {{ client.email }}</p>
                      <p><span>Contact Number</span> - {{ client.mobile }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="empty-div">
          <p>N/A</p>
        </div>
      </section>
      <section class="project-status-details">
        <div class="col-sm-12">
          <div class="row">
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div class="row">
                <div class="project-status-box-wrapper">
                  <div class="box">
                    <h5 class="general-sub-heading">Project Status:</h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div class="row">
                <div class="project-status-box-wrapper">
                  <div
                    class="box bx-right text-xl-right text-lg-right text-md-right"
                  >
                    <p>
                      <span>{{ project.project_status.status_name }}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section-project-account-manager-details">
        <div class="row">
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
            <div class="full-name-of-am-client">
              <p class="sub-heading">Account Managers:</p>
            </div>
          </div>
          <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12">
            <div
              class="client-contact-details text-xl-right text-lg-right text-md-right"
            >
              <ul
                class="list-inline"
                v-if="
                  typeof project.project_account_manager !== 'undefined' &&
                    Object.keys(project.project_account_manager).length
                "
              >
                <li
                  v-for="(am, am_index) in project.project_account_manager"
                  :key="am_index"
                  class="list-inline-item"
                >
                  <div class="am-box-wrapper">
                    <div>
                      <img src="/images/user-profile-icon.png" />
                    </div>
                    <div>
                      <p v-text="am.name"></p>
                    </div>
                  </div>
                </li>
              </ul>
              <ul v-else class="empty-list list-inline">
                <li>N/A</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  </transition>
</template>

<script>
// @ is an alias to /src

export default {
  components: {},
  data() {
    return {
      loader: true,
      project: {}
    };
  },
  mounted() {
    this.getProject();
  },
  methods: {
    refreshProjectOverview() {
      this.getProject();
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
    async getProject() {
      const $this = this;
      $this.loader = true;
      const getProducts = $this.$store.dispatch("getHttp", {
        url: "projects/get-project-data/" + this.$route.params.project_id
      });
      await getProducts.then(function(response) {
        if (typeof response != "undefined") {
          $this.project = response.data.data;
        }
        $this.loader = false;
      });
    }
  },
  computed: {}
};
</script>
<style lang="scss" scoped>
ul.empty-list.list-inline {
  padding: 8px 0;
}
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
section {
  padding: 25px 0;
  border-bottom: 1px solid #ebebeb;
  p {
    letter-spacing: 0.28px;
    color: #2a1c0b;
    margin-bottom: 0;
    line-height: 26px;
    span {
      font-weight: bold;
    }
  }
  &.project-details-area {
    padding-top: 0;
  }
  &.project-status-details {
    .general-sub-heading {
      padding-bottom: 0;
    }
    .project-status-box-wrapper {
      width: 100%;
      .box {
        &.bx-right {
          p {
            padding: 11px 0;
          }
        }
      }
    }
  }
  &.section-project-account-manager-details {
    .list-inline {
      margin: 0;
      li {
        margin-left: 15px;
        margin-right: 0;
        &:first-child {
          margin-left: 0;
        }
        .am-box-wrapper {
          display: table;
          div {
            display: table-cell;
            vertical-align: middle;
            img {
              width: 34px;
              height: 34px;
            }
            p {
              margin-left: 11px;
              letter-spacing: 0.28px;
              color: #323f54;
              font-weight: 500;
            }
          }
        }
      }
    }
    .full-name-of-am-client {
      p {
        padding: 6px 0;
      }
    }
  }
  &.client-details {
    .client-row {
      &:nth-child(odd) {
        padding-bottom: 15px;
      }
      .client-detail-box-wrapper {
        width: 100%;
      }
    }
  }
}

// Extra large devices (lg and less)
@media screen and (max-width: 1199px) {
}
// Extra large devices (md and less)
@media screen and (max-width: 991px) {
}

// Extra large devices (sm and up)
@media screen and (max-width: 767px) {
  .text-left {
    text-align: left !important;
  }
}

// Extra large devices (xs and up)
@media screen and (max-width: 575px) {
  .project-show .project-content-area {
    padding: 20px 0 0px;
  }
  section.section-project-account-manager-details .list-inline li {
    margin-left: 0;
    margin-right: 0;
    display: block;
    padding-bottom: 10px;
    &:last-child {
      padding-bottom: 0;
    }
  }
  .project-show .project-content-area {
    padding: 10px 0 0px;
  }
  section.project-details-area {
    padding-top: 3px;
    padding-bottom: 25px;
  }
  section.project-details-area.project-details-area-notes {
    padding-bottom: 18px;
  }
  section.client-details {
    padding-top: 4px;
  }
  section.project-status-details {
    padding: 10px 0 10px;
  }
  section.section-project-account-manager-details {
    padding: 10px 0 19px;
  }
}

// Extra large devices (xl, 1200px and up)
@media (min-width: 1200) {
}
</style>
