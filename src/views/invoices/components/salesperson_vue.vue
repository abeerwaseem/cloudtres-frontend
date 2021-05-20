<template>
  <div class="viewDashBoard">
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
      <div v-else key="2" class="container">
        <div class="white-row">
          <section class="top-heading-section-invoice">
            <div class=" invoices-tab">
              <div class="row">
                <div class="col-sm-8">
                  <h4 class="global-style-heading">
                    Invoices:
                    <a
                      @click.prevent="refreshInvoiceTable"
                      href=""
                      class="refreshData"
                      ><i class="fas fa-redo-alt"></i
                    ></a>
                  </h4>
                </div>
                <div class="col-sm-4">
                  <div class="general-filters">
                    <div class="form-actions text-right">
                      <router-link
                        class="btn btn-primary"
                        :to="{
                          path: '/invoices/create-invoice'
                        }"
                        tag="button"
                      >
                        <i class="fas fa-plus-circle"></i> Generate Invoice
                      </router-link>
                    </div>
                  </div>
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
              <div key="1" v-if="data_loader" class="white-row loader-route">
                <div class="lds-sub-ripple">
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div v-else key="2" class=" invoices-tab">
                <div class="table-responsive">
                  <div class="table-responsive">
                    <table class="table">
                      <thead>
                        <tr>
                          <th>Invoice Number</th>
                          <th>Total</th>
                          <th>Status</th>
                          <th>Issue Date</th>
                          <th>Due Date</th>
                          <th class="text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody
                        v-if="
                          typeof invoice_data.data !== 'undefined' &&
                            Object.keys(invoice_data.data).length
                        "
                      >
                        <tr
                          v-for="(invoice, inv_index) in invoice_data.data"
                          :key="inv_index"
                        >
                          <td>
                            <router-link
                              class="invoice-title color-blk customize-global-link gl-lk-blk"
                              :to="{ path: '/invoices/show/' + invoice.id }"
                              tag="a"
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
                                @click.prevent="downloadInvoice(inv_index)"
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
                              <!-- <router-link
                                class="invoice-icon"
                                title="Edit!"
                                data-placement="top"
                                :to="{ path: '/invoices/edit-invoice/'+invoice.id }"
                                tag="a"
                              >
                                <p class="invoice-icon">
                                  <i class="far fa-edit"></i>
                                </p>
                              </router-link> -->
                            </div>
                          </td>
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
              </div>
            </transition>
            <div class="row">
              <div class="col-sm-12">
                <pagination
                  class="pagination justify-content-center"
                  :data="invoice_data"
                  :limit="1"
                  @pagination-change-page="getInvoicesData"
                ></pagination>
              </div>
            </div>
          </section>
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
  computed: {
    getActiveUserData() {
      return this.$store.state.auth;
    }
  },
  data() {
    return {
      invoice_data: {},
      loader: true,
      data_loader: true
    };
  },
  mounted() {
    document.title = this.$router.app._route.meta.pageTitle;
    this.loader = false;
    this.getInvoicesData();
  },
  methods: {
    refreshInvoiceTable() {
      this.getInvoicesData();
    },
    async downloadInvoice(inv_index) {
      const $this = this;
      $this.$store.dispatch("generalLoader", {
        response: true
      });
      let inv_id = $this.invoice_data.data[inv_index].id;
      await window
        .axios({
          url:
            "invoices/download/" +
            inv_id +
            "?timezone=" +
            Intl.DateTimeFormat().resolvedOptions().timeZone,
          method: "GET",
          responseType: "blob" // important
        })
        .then(response => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute(
            "download",
            $this.invoice_data.data[inv_index].invoice_number + ".pdf"
          ); //or any other extension
          document.body.appendChild(link);
          link.click();
          $this.$store.dispatch("generalLoader", {
            response: false
          });
        });
    },
    async getInvoicesData(page = 1, action = null) {
      const $this = this;
      $this.data_loader = true;
      const data = $this.$store.dispatch("getHttp", {
        url: "invoices" + "?" + "&page=" + page
      });
      await data.then(function(response) {
        if (typeof response !== "undefined") {
          $this.invoice_data = response.data;
          $this.data_loader = false;
        }
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
  &.top-heading-section-invoice {
  }
  .pagination {
    padding-top: 30px;
  }
}
</style>
