<template>
  <div class="viewDashBoard project-route-index">
    <div class="container">
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
        <div v-else class="white-row">
          <div class="show-project-portal-listing">
            <!-- // Filter Area -->
            <div class="general-filters">
              <div class="top-area-projects-index">
                <div class="row">
                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <h1 class="global-style-heading">
                      Projects
                      <a
                        @click.prevent="refreshProjectTable"
                        href=""
                        class="refreshData"
                        ><i class="fas fa-redo-alt"></i
                      ></a>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div class="horizontal-row">
              <hr />
            </div>
            <section class="client-projects">
              <transition
                name="fade"
                mode="out-in"
                @beforeLeave="beforeLeave"
                @enter="enter"
                @afterEnter="afterEnter"
              >
                <div key="1" v-if="data_loader" class="white-row loader-route">
                  <div class="lds-sub-ripple">
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <div key="2" v-else class="project-list-wrapper">
                  <div
                    class="row"
                    v-if="
                      typeof projectsList.data !== 'undefined' &&
                        Object.keys(projectsList.data).length
                    "
                  >
                    <div
                      v-for="(project, project_index) in projectsList.data"
                      v-bind:key="project_index"
                      class="col-xl-3 col-lg-4 col-md-6 col-sm-12"
                    >
                      <div class="wrap-box">
                        <div class="box">
                          <div class="project-details">
                            <p class="project-id">ID: {{ project.id }}</p>
                            <div class="project-listing">
                              <router-link
                                class="eclipse-para global-para-link2"
                                :to="{
                                  path: '/projects/show/' + project.id
                                }"
                                tag="p"
                              >
                                {{ project.project_name }}
                              </router-link>
                            </div>
                            <p class="project-status">
                              Brand: <b>{{ 
                                  project.project_brand != null
                                  ? project.project_brand.name
                                  : "N/A"  
                                }}</b>
                            </p>
                            <p class="project-status">
                              Status:
                              <b>{{ project.project_status.status_name }}</b>
                            </p>
                            <p class="project-status">
                              Category:
                              <b>{{
                                project.project_category != null
                                  ? project.project_category.category_name
                                  : "N/A"
                              }}</b>
                            </p>
                          </div>
                          <div class="footer-box">
                            <div class="relv">
                              <div class="usr-role">
                                <p>Account Managers:</p>
                              </div>
                              <div
                                v-if="project.project_account_manager.length"
                                class="usr-role-name-glb text-right"
                              >
                                <div
                                  v-for="(am,
                                  am_index) in project.project_account_manager"
                                  :key="am_index"
                                  :class="
                                    avatarClass(
                                      project.project_account_manager,
                                      am_index
                                    )
                                  "
                                >
                                  <avatar
                                    v-if="am.name != null"
                                    :inline="true"
                                    :username="am.name"
                                  ></avatar>
                                  {{
                                    project.project_account_manager_total_count >
                                      3 && am_index + 1 > 2
                                      ? "+" +
                                        project.project_account_manager_remaining_count
                                      : ""
                                  }}
                                </div>
                              </div>
                              <div
                                v-else
                                class="usr-role-name-glb text-right right-pd-zero"
                              >
                                N/A
                              </div>
                            </div>
                            <div class="relv">
                              <div class="usr-role">
                                <p>Clients:</p>
                              </div>
                              <div
                                v-if="project.project_clients.length"
                                class="usr-role-name-glb text-right"
                              >
                                <div
                                  v-for="(client,
                                  client_index) in project.project_clients"
                                  :key="client_index"
                                  :class="
                                    avatarClass(
                                      project.project_clients,
                                      client_index
                                    )
                                  "
                                >
                                  <avatar
                                    v-if="client.name != null"
                                    :inline="true"
                                    :username="client.name"
                                  ></avatar>
                                  {{
                                    project.project_clients_total_count > 3 &&
                                    client_index + 1 > 2
                                      ? "+" +
                                        project.project_clients_remaining_count
                                      : ""
                                  }}
                                </div>
                              </div>
                              <div
                                v-else
                                class="usr-role-name-glb text-right right-pd-zero"
                              >
                                N/A
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div v-else class="row">
                    <div class="col-sm-12">
                      <no-record-found></no-record-found>
                    </div>
                  </div>
                </div>
              </transition>
            </section>
            <section class="paginations-section">
              <div class="row">
                <div class="col-sm-12">
                  <pagination
                    class="pagination justify-content-center"
                    :data="projectsList"
                    :limit="1"
                    @pagination-change-page="getResults"
                  ></pagination>
                </div>
              </div>
            </section>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Avatar from "vue-avatar";
import norecordfound from "../../../components/no-record-found";
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
      loader: true,
      data_loader: true,
      projectsList: {},
      project_clients: null,
      project_status_category: null,
      project_categoreies: null,
      project_brands: null,
      user_gender: [
        {
          id: "asc",
          text: "Accending"
        },
        {
          id: "desc",
          text: "Descending"
        }
      ],
      disableSubmitBtn: false
    };
  },
  mounted() {
    document.title = this.$router.app._route.meta.pageTitle;
    this.getResults();
    this.loader = false;
  },
  methods: {
    refreshProjectTable() {
      this.getResults();
    },
    async getResults(page = 1, action = null) {
      const $this = this;
      if (action == "search") {
        if ($this.formData.search.length < 2 && $this.formData.search != "") {
          return true;
        }
      }
      $this.data_loader = true;
      const data = $this.$store.dispatch("getHttp", {
        url: "/projects?" + "&page=" + page
      });
      await data.then(function(response) {
        if (typeof response !== "undefined") {
          $this.projectsList = response.data;
          $this.data_loader = false;
        }
      });
    },
    avatarClass(managers, index) {
      if (managers.length == 1) {
        return "custom-avtr orv-3";
      } else if (managers.length == 2) {
        return "custom-avtr orv-" + (index + 2);
      } else {
        return "custom-avtr orv-" + (index + 1);
      }
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
    }
  }
};
</script>
<style lang="scss" scoped>
.right-pd-zero {
  right: 0 !important;
}
body .white-row.loader-route {
  top: 0 !important;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-property: height, opacity;
  transition-timing-function: ease;
  overflow: hidden;
}
.project-route-index {
  .show-project-portal-listing {
    h4 {
      letter-spacing: 0.28px;
      color: #323f54;
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 0;
      padding-bottom: 7px;
    }
    p {
      margin: 0;
      letter-spacing: 0.28px;
      color: #2a1c0b;
    }
    section {
      border-bottom: 1px solid #ebebeb;
      padding: 30px 0;
      &.client-projects {
        padding-bottom: 0px;
        padding-top: 0;
        border: none;
        h4 {
          padding: 5px 0 25px;
        }
        .wrap-box {
          background: #faf9f7 0% 0% no-repeat padding-box;
          border-radius: 3px;
          padding: 20px 15px;
          min-height: auto;
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
          .box {
            position: relative;
            .project-details {
              p {
                &.project-id {
                  background: #ece9df 0% 0% no-repeat padding-box;
                  border-radius: 3px;
                  display: inline-block;
                  letter-spacing: 0.24px;
                  color: #323f54;
                  font-size: 12px;
                  padding: 4px 10px;
                }
                &.project-status {
                  letter-spacing: 0.24px;
                  color: #323f54;
                  font-size: 12px;
                  padding: 3px 0 0;
                  font-weight: 400;
                  &:last-child {
                    padding-bottom: 15px;
                  }
                }
              }
              .project-listing {
                padding: 15px 0 15px;
                p {
                  margin: 0;
                  letter-spacing: 0.28px;
                  color: #323f54;
                  font-size: 14px;
                  font-weight: bold;
                  text-transform: inherit;
                  line-height: 25px;
                }
              }
            }
            .footer-box {
              display: block;
              position: relative;
              width: 100%;
              padding: 0;
              border-top: 1px solid rgba(0, 0, 0, 0.1);
              .relv {
                position: relative;
                padding: 11px 0;
                border-bottom: 1px solid rgba(0, 0, 0, 0.1);
                .usr-role-name-glb {
                  top: 8px;
                  right: -23px;
                }
              }
              .usr-role {
                p {
                  letter-spacing: 0.24px;
                  color: #918a82;
                  font-weight: 300;
                  font-size: 12px;
                }
              }
            }
          }
        }
      }
      &.paginations-section {
        padding: 0;
        border: none;
      }
    }
  }
}
// Extra large devices (lg and less)
@media screen and (max-width: 1199px) {
}
// Extra large devices (md and less)
@media screen and (max-width: 991px) {
  body .top-gen-heading {
    padding-bottom: 10px;
  }
}

// Extra large devices (sm and up)
@media screen and (max-width: 767px) {
}

// Extra large devices (xs and up)
@media screen and (max-width: 575px) {
}

// Extra large devices (xl, 1200px and up)
@media (min-width: 1200) {
}
</style>
