<template>
  <div class="viewDashBoard clients-route-show">
    <div class="container">
      <div class="white-row">
        <div
          class="show-client-portal-details"
          v-if="
            typeof client_detail.data !== 'undefined' &&
              Object.keys(client_detail.data).length
          "
        >
          <h1 class="global-style-heading">{{ client_detail.data.name }}</h1>
          <section class="section-client-details">
            <div class="row">
              <div class="col-sm-4">
                <div class="full-name-client">
                  <h4>Full Name:</h4>
                  <p>{{ client_detail.data.name }}</p>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="client-contact-details">
                  <h4>Mobile:</h4>
                  <p>{{ client_detail.data.mobile }}</p>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="client-contact-details">
                  <h4>Email:</h4>
                  <p>{{ client_detail.data.email }}</p>
                </div>
              </div>
            </div>
          </section>
          <section class="section-client-account-manager-details">
            <div class="row">
              <div class="col-sm-4">
                <div class="full-name-of-am-client">
                  <p class="sub-heading">Account Managers:</p>
                </div>
              </div>
              <div class="col-sm-8">
                <div class="client-contact-details text-right">
                  <ul
                    class="list-inline"
                    v-if="
                      typeof client_detail.data.account_manager !==
                        'undefined' &&
                        Object.keys(client_detail.data.account_manager).length
                    "
                  >
                    <li
                      v-for="(am, am_index) in client_detail.data
                        .account_manager"
                      :key="am_index"
                      class="list-inline-item"
                    >
                      <div class="am-box-wrapper">
                        <div>
                          <img src="/images/user-profile-icon.png" />
                        </div>
                        <div>
                          <p>{{ am.name }}</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section class="client-projects">
            <h4 class="sub-heading">Projects</h4>
            <div
              class="row"
              v-if="
                typeof client_detail.data.client_projects !== 'undefined' &&
                  Object.keys(client_detail.data.client_projects).length
              "
            >
              <div
                v-for="(project_data, project_index) in client_detail.data
                  .client_projects"
                :key="project_index"
                class="col-sm-3"
              >
                <div class="wrap-box">
                  <div class="box">
                    <div class="project-details">
                      <p class="project-id">ID: {{ project_data.id }}</p>
                      <div class="project-listing">
                        <router-link
                          class="eclipse-para global-para-link2"
                          :to="{
                            path: '/projects/show/' + project_data.id
                          }"
                          tag="p"
                        >
                          {{ project_data.project_name }}
                        </router-link>
                      </div>
                      <p class="project-status">
                        Status: {{ project_data.project_status.status_name }}
                      </p>
                    </div>
                    <div class="footer-box">
                      <div class="relv">
                        <div class="usr-role">
                          <p>Account Managers:</p>
                        </div>
                        <div
                          v-if="project_data.project_account_manager.length"
                          class="usr-role-name-glb text-right"
                        >
                          <div
                            v-for="(am,
                            am_index) in project_data.project_account_manager"
                            :key="am_index"
                            :class="
                              avatarClass(
                                project_data.project_account_manager,
                                am_index
                              )
                            "
                          >
                            <avatar :inline="true" :username="am.name"></avatar>
                            {{
                              project_data.project_account_manager_total_count >
                                3 && am_index + 1 > 3
                                ? "+" +
                                  project_data.project_account_manager_remaining_count
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
                No project assign yet!
              </div>
            </div>
          </section>
          <section class="invoices-area">
            <div class=" invoices-tab">
              <h4 class="sub-heading">Invoices:</h4>

              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Invoice Number</th>
                      <th>Total</th>
                      <th>Status</th>
                      <th>Issue Date</th>
                      <th>Due Date</th>
                      <th class="text-right">Download</th>
                    </tr>
                  </thead>
                  <tbody
                    v-if="
                      typeof client_detail.data.client_invoice !==
                        'undefined' &&
                        Object.keys(client_detail.data.client_invoice).length
                    "
                  >
                    <tr
                      v-for="(invoice, inv_index) in client_detail.data
                        .client_invoice"
                      :key="inv_index"
                    >
                      <td>
                        <router-link
                          class="invoice-title global-para-link2"
                          :to="{ path: '/invoices/show/' + invoice.id }"
                          tag="p"
                        >
                          {{ invoice.invoice_number }}
                        </router-link>
                      </td>
                      <td>
                        <p class="invoice-total bold-cls">
                          $ {{ invoice.total | numFormat }}
                        </p>
                      </td>
                      <td>
                        <p
                          :class="[
                            invoice.status == 'paid'
                              ? 'invoice-status success'
                              : 'invoice-status danger'
                          ]"
                        >
                          {{ invoice.status }}
                        </p>
                      </td>
                      <td>
                        <p class="">
                          {{ invoice.issue_date }}
                        </p>
                      </td>
                      <td>
                        <p class="">
                          {{ invoice.due_date }}
                        </p>
                      </td>
                      <td>
                        <div class="download-box text-right">
                          <a
                            data-toggle="tooltip"
                            title="Download!"
                            class="invoice-icon"
                            data-placement="top"
                            href="#"
                          >
                            <p class="invoice-icon">
                              <i class="fas fa-download"></i>
                            </p>
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                  <tbody v-else>
                    <tr>
                      <td colspan="6">
                        No Data Found.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "vue-avatar";
export default {
  components: {
    Avatar
  },
  computed: {
    getActiveUserData() {
      return this.$store.state.auth;
    }
  },
  data() {
    return {
      client_detail: {}
    };
  },
  mounted() {
    document.title = this.$router.app._route.meta.pageTitle;
    this.getClientDetailData();
  },
  methods: {
    async getClientDetailData(page = 1, action = null) {
      const $this = this;
      $this.client_loader = true;
      const data = $this.$store.dispatch("getHttp", {
        url: "clients/show-client-details/" + this.$route.params.client_id
      });
      await data.then(function(response) {
        if (typeof response !== "undefined") {
          $this.client_detail = response.data;
        }
        $this.client_loader = false;
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
    }
  }
};
</script>
<style lang="scss" scoped>
.clients-route-show {
  .show-client-portal-details {
    h1 {
      border-bottom: 2px solid #ebebeb;
      padding-bottom: 25px;
    }
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
      &.section-client-details {
      }
      &.section-client-account-manager-details {
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
            padding: 9px 0;
          }
        }
      }
      &.client-projects {
        padding-bottom: 0px;
        h4 {
          padding: 5px 0 25px;
        }
        .wrap-box {
          background: #faf9f7 0% 0% no-repeat padding-box;
          border-radius: 3px;
          padding: 20px 15px;
          min-height: 231px;
          margin-bottom: 30px;
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
                  padding: 3px 0 15px;
                  font-weight: 400;
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
              padding: 20px 0 10px;
              border-top: 1px solid rgba(0, 0, 0, 0.1);
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
      &.invoices-area {
        h4 {
          padding: 5px 0 25px;
        }
        .table-responsive {
          table {
            margin-bottom: 0;
            thead {
              th {
                letter-spacing: 0.28px;
                color: #2a1c0b;
                font-weight: 200;
              }
            }
            tbody {
              tr {
                td {
                  vertical-align: middle;
                  p {
                    margin-bottom: 0px;
                    color: #323f54;
                    font-weight: 300;
                    letter-spacing: 0.28px;
                    &.invoice-title {
                      letter-spacing: 0.28px;
                      font-weight: bold;
                    }
                    &.invoice-total {
                      font-weight: bold;
                    }
                    &.invoice-status {
                      font-size: 10px;
                      border-radius: 10px;
                      text-transform: capitalize;
                      font-weight: bold !important;
                      line-height: 20px !important;
                      padding: 0 10px;
                      text-align: center;
                      &.success {
                        background: rgba(0, 128, 0, 0.72);
                        color: #fff !important;
                      }
                      &.danger {
                        background: red;
                        color: #fff !important;
                      }
                    }
                    &.invoice-icon {
                      display: inline-block;
                      background: #1190ee;
                      color: #fff !important;
                      padding: 6px 10px;
                      border-radius: 5px;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
