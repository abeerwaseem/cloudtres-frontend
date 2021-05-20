/* eslint-disable */
<template>
  <div class="project-invoice-section">
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
      <div key="2" v-else class="project-files-wrapper">
        <section class="top-heading-section-invoice">
          <div class=" invoices-tab">
            <div class="row">
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <h4 class="sub-heading">
                  Invoices:
                  <a
                    @click.prevent="refreshProjectInvoices"
                    href=""
                    class="refreshData"
                    ><i class="fas fa-redo-alt"></i
                  ></a>
                </h4>
              </div>
            </div>
          </div>
        </section>
        <section class="invoices-area">
          <transition
            name="fade"
            mode="out-in"
            @beforeLeave="beforeLeave"
            @enter="enter"
            @afterEnter="afterEnter"
          >
            <div
              v-if="table_data_loader"
              key="3"
              class="white-row loader-route"
            >
              <div class="lds-sub-ripple">
                <div></div>
                <div></div>
              </div>
            </div>
            <div key="4" v-else class=" invoices-tab">
              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Invoice Number</th>
                      <th>Total</th>
                      <th>Status</th>
                      <th>Issue Date</th>
                      <th>Due Date</th>
                      <!-- <th class="text-right">Action</th> -->
                    </tr>
                  </thead>
                  <tbody
                    v-if="
                      typeof project_invoices.data !== 'undefined' &&
                        Object.keys(project_invoices.data).length
                    "
                  >
                    <tr
                      v-for="(invoice, inv_index) in project_invoices.data"
                      :key="inv_index"
                    >
                      <td>
                        <router-link
                          class="invoice-title global-para-link2"
                          :to="{
                            path:
                              '/projects/show/' +
                              $route.params.project_id +
                              '/invoices/show/' +
                              invoice.id
                          }"
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
                      <!-- <td>
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
                      </td> -->
                    </tr>
                  </tbody>
                  <tbody v-else>
                    <tr>
                      <td colspan="6">
                        <no-record-found></no-record-found>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </transition>
        </section>
        <section class="pagination-list">
          <div class="row">
            <div class="col-sm-12">
              <pagination
                class="pagination justify-content-center"
                :data="project_invoices"
                :limit="1"
                @pagination-change-page="getProjectInvoices"
              ></pagination>
            </div>
          </div>
        </section>
      </div>
    </transition>
  </div>
</template>

<script>
import norecordfound from "../../../../components/no-record-found";

export default {
  name: "projects.invoices",
  components: {
    "no-record-found": norecordfound
  },
  computed: {},
  data() {
    return {
      project_invoices: {},
      disableSubmitBtn: false,
      project_id: this.$route.params.project_id,
      loader: true,
      table_data_loader: true,
      formData: {
        search: ""
      }
    };
  },
  mounted() {
    this.getProjectInvoices();
  },
  methods: {
    refreshProjectInvoices() {
      this.getProjectInvoices();
    },
    async getProjectInvoices(page = 1, action = null) {
      const $this = this;
      $this.table_data_loader = true;
      const getProducts = $this.$store.dispatch("getHttp", {
        url:
          "invoices/get-project-invoices-data/" +
          this.$route.params.project_id +
          "?" +
          "&page=" +
          page +
          "&timezone=" +
          Intl.DateTimeFormat().resolvedOptions().timeZone
      });
      await getProducts.then(function(response) {
        if (typeof response !== "undefined") {
          $this.project_invoices = response.data;
        }
        $this.table_data_loader = false;
        $this.loader = false;
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
section {
  padding: 25px 0;
  border-bottom: 1px solid #ebebeb;
  &.top-heading-section-invoice {
    border-bottom: none;
    padding-bottom: 0;
    padding-top: 0;
    .general-filters {
      .form-actions {
        padding: 0;
        button {
          padding: 6px 25px;
          margin-left: 0;
        }
      }
    }
    .sub-heading {
      padding: 10px 0;
      margin: 0;
    }
  }
  &.invoices-area {
    position: relative;
    .white-row.loader-route {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      .lds-sub-ripple {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    h4 {
      padding: 0;
    }
    .table-responsive {
      table {
        margin-bottom: 0;
        thead {
          th {
            letter-spacing: 0.28px;
            color: #2a1c0b;
            font-weight: 200;
            white-space: nowrap;
          }
        }
        tbody {
          tr {
            td {
              vertical-align: middle;
              white-space: nowrap;
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
              .download-box {
                .invoice-icon {
                  margin-left: 5px;
                  &:first-child {
                    margin-left: 0;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  &.pagination-list {
    padding: 0;
    border: none;
    .pagination {
      padding-top: 30px;
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
}

// Extra large devices (xs and up)
@media screen and (max-width: 575px) {
  section.top-heading-section-invoice {
    padding-top: 10px;
  }
  .sub-heading {
    padding: 10px 0 15px;
    margin: 0;
  }
}

// Extra large devices (xl, 1200px and up)
@media (min-width: 1200) {
}
</style>
