<template>
  <div class="viewDashBoard project-invoice-show">
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
      <div key="2" v-else>
        <div
          class="white-row"
          v-if="
            typeof invoice_data.data !== 'undefined' &&
              Object.keys(invoice_data.data).length
          "
        >
          <section class="project-invoice-header">
            <div class="main-title-header">
              <div class="row">
                <div class="col-sm-7">
                  <router-link
                    :to="{
                      path:
                        '/projects/show/' +
                        invoice_data.data.invoice_project_id +
                        '/invoices'
                    }"
                    tag="h4"
                  >
                    <span>
                      {{ invoice_data.data.invoice_project }} - #{{
                        invoice_data.data.invoice_project_id
                      }}
                    </span>
                  </router-link>
                </div>
                <div class="col-sm-5">
                  <div class="top-btns text-right">
                    <button
                      class="default-global-btn"
                      @click.prevent="downloadInvoice"
                    >
                      <i class="fas fa-download"></i> Download PDF
                    </button>
                    <button
                      class="default-global-btn"
                      @click.prevent="sendEmailReminder"
                    >
                      Send Reminder
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div class="seperator">
            <hr />
          </div>
          <section class="firm-details">
            <div class="row">
              <div
                v-if="
                  invoice_data.data.invoice_project_brand.name
                    .toLowerCase()
                    .trim() == 'pnc logos'
                "
                class="col-sm-12"
              >
                <div class="row">
                  <div class="col-md-4">
                    <div class="brand-logo">
                      <img
                        src="https://www.pnclogos.com/wp-content/themes/pnc-logos/pnc-assets/images/website-logo.gif"
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="support text-right">
                      <p>PNC Workbench Support</p>
                      <p>
                        <span>
                          <a href="tel:1-800-213-7640">1-800-213-7640</a>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="address text-right">
                      <p>
                        PNC Logos - 219 N <br />
                        Brown Ave Suite D Orlando <br />
                        FL 32801
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                v-else-if="
                  invoice_data.data.invoice_project_brand.name
                    .toLowerCase()
                    .trim() == 'platinum design services'
                "
                class="col-sm-12"
              >
                <div class="row">
                  <div class="col-md-4">
                    <div class="brand-logo">
                      <img
                        src="https://platinumdesignservices.com/wp-content/uploads/2019/06/logo-new.png"
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="support text-right">
                      <p>PNC Workbench Support</p>
                      <p>
                        <span>
                          <a href="tel:(407) 401-8320">(407) 401-8320</a>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="address text-right">
                      <p>
                        Platinum Design Services - 142 W <br />
                        Lakeview Ave #2060a, <br />
                        Lake Mary, FL 32746, USA
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                v-else-if="
                  invoice_data.data.invoice_project_brand.name
                    .toLowerCase()
                    .trim() == 'pnc au'
                "
                class="col-sm-12"
              >
                <div class="row">
                  <div class="col-md-4">
                    <div class="brand-logo">
                      <img
                        src="https://www.pnclogos.com/wp-content/themes/pnc-logos/pnc-assets/images/website-logo.gif"
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="support text-right">
                      <p>PNC Workbench Support</p>
                      <p>
                        <span>
                          <a href="tel:+61 390 216 942">+61 390 216 942</a>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="address text-right">
                      <p>
                        PNC Logos - Level 8, <br />
                        805/220 Collins St, <br />
                        Melbourne VIC 3000
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else class="col-sm-12">
                <div class="row">
                  <div class="col-md-4">
                    <div class="brand-logo">
                      <img
                        src="https://www.pnclogos.com/wp-content/themes/pnc-logos/pnc-assets/images/website-logo.gif"
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="support text-right">
                      <p>PNC Workbench Support</p>
                      <p>
                        <span>
                          <a href="tel:1-800-213-7640">1-800-213-7640</a>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="address text-right">
                      <p>
                        PNC Logos - 219 N <br />
                        Brown Ave Suite D Orlando <br />
                        FL 32801
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="firm-details">
            <div class="row">
              <div class="col-sm-12">
                <div class="row">
                  <div class="col-md-4">
                    <div class="support text-left">
                      <p><b>Build To</b></p>
                      <p v-text="invoice_data.data.user.name"></p>
                      <p v-text="invoice_data.data.user.email"></p>
                      <p
                        v-text="
                          invoice_data.data.user.mobile
                            ? invoice_data.data.user.mobile
                            : 'N/A'
                        "
                      ></p>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="support text-right">
                      <p><b>Issue Date</b></p>
                      <p v-text="invoice_data.data.issue_date"></p>
                      <p><b>Due Date</b></p>
                      <p v-text="invoice_data.data.due_date"></p>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="support text-right">
                      <p>
                        <b>{{
                          invoice_data.data.status == "paid"
                            ? "Invoice Number"
                            : "Invoice Proforma"
                        }}</b>
                      </p>
                      <p v-text="invoice_data.data.invoice_number"></p>
                      <p><b>Total Amount</b></p>
                      <p
                        v-text="
                          invoice_data.data.currency.currency_symbol +
                            ' ' +
                            invoice_data.data.total
                        "
                      ></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div class="seperator">
            <hr />
          </div>
          <section class="item-area-invoice">
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Item Description</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(item, itm_index) in invoice_data.data.invoice_items"
                    :key="itm_index"
                  >
                    <td>{{ item.item_name }}</td>
                    <td>
                      <p
                        v-for="(des, des_index) in item.item_description"
                        :key="des_index"
                        v-text="des"
                      ></p>
                    </td>
                    <td>{{ item.quantity | numFormat }}</td>
                    <td>
                      {{ invoice_data.data.currency.currency_symbol }}
                      {{ item.unit_price | numFormat }}
                    </td>
                    <td>
                      {{ invoice_data.data.currency.currency_symbol }}
                      {{ (item.quantity * item.unit_price) | numFormat }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="total-area-calculation">
              <div class="cal-box">
                <p>Sub Total :</p>
                <p class="text-right">
                  {{ invoice_data.data.currency.currency_symbol }}
                  {{ invoice_data.data.sub_total | numFormat }}
                </p>
              </div>
              <div class="cal-box">
                <p>Discount :</p>
                <p class="text-right">
                  {{ invoice_data.data.currency.currency_symbol }}
                  {{ invoice_data.data.discount | numFormat }}
                </p>
              </div>
              <div class="cal-box">
                <h3>Total :</h3>
                <h3 class="text-right">
                  {{ invoice_data.data.currency.currency_symbol }}
                  {{ invoice_data.data.total | numFormat }}
                </h3>
              </div>
            </div>
          </section>
          <div class="seperator">
            <hr />
          </div>
          <section class="payments-area-invoice">
            <h4 class="sub-heading">Payment</h4>

            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Getway</th>
                    <th>Transection Id</th>
                    <th>Customer</th>
                    <th>Paid On</th>
                    <th>Error</th>
                  </tr>
                </thead>
                <tbody
                  v-if="
                    typeof invoice_data.data.payments !== 'undefined' &&
                      Object.keys(invoice_data.data.payments).length
                  "
                >
                  <tr
                    v-for="(payment, pay_index) in invoice_data.data.payments"
                    :key="pay_index"
                  >
                    <td>
                      {{ invoice_data.data.currency.currency_symbol }}
                      {{ payment.amount }}
                    </td>
                    <td>
                      <p
                        :class="[
                          payment.status == 'complete'
                            ? 'label label-success'
                            : 'label label-danger'
                        ]"
                        v-text="payment.status"
                      ></p>
                    </td>
                    <td v-text="payment.gateway"></td>
                    <td v-text="payment.transaction_id"></td>
                    <td>{{ invoice_data.data.user.email }}</td>
                    <td v-text="payment.paid_on"></td>
                    <td v-text="payment.error_message"></td>
                  </tr>
                </tbody>
                <tbody v-else>
                  <tr>
                    <td colspan="7">
                      No Data Found
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
        <div v-else class="white-row">
          Data Not Found.
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  components: {},
  computed: {
    getActiveUserData() {
      return this.$store.state.auth;
    }
  },
  watch: {
    "$route.params.invoice_id"(newId, oldId) {
      this.getInvoicesDetail(newId);
    },
    "$route.query.reload"(oldId) {
      this.getInvoicesDetail(this.$route.params.invoice_id);
    }
  },
  data() {
    return {
      loader: true,
      brand_name: "pnc au",
      invoice_project_brand: "pnc logos",
      invoice_data: {},
      mainloaderDiv: true,
      project: {
        project_id: 107871,
        project_name: "Vue CLient Portal Testing"
      }
    };
  },
  mounted() {
    document.title = this.$router.app._route.meta.pageTitle;
    this.getInvoicesDetail();
  },
  methods: {
    async sendEmailReminder(inv_id = null) {
      const $this = this;
      $this.$store.dispatch("generalLoader", {
        response: true
      });
      const getInvoiceNum = $this.$store.dispatch("getHttp", {
        url: "invoices/send-reminder/" + this.$route.params.invoice_id
      });
      await getInvoiceNum.then(function(response) {
        if (typeof response !== "undefined") {
          $this.$store.dispatch("displayMessageErrors", {
            response: response,
            formEvent: null
          });
          $this.$store.dispatch("generalLoader", {
            response: false
          });
        }
      });
    },
    async downloadInvoice(inv_id = null) {
      const $this = this;
      $this.$store.dispatch("generalLoader", {
        response: true
      });
      await window
        .axios({
          url:
            "invoices/download/" +
            this.$route.params.invoice_id +
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
            $this.invoice_data.data.invoice_number + ".pdf"
          );
          document.body.appendChild(link);
          link.click();
          $this.$store.dispatch("generalLoader", {
            response: false
          });
        });
    },
    async getInvoicesDetail(inv_id = null) {
      const $this = this;
      const data = $this.$store.dispatch("getHttp", {
        url:
          "invoices/invoice-details/" +
          (inv_id === null ? this.$route.params.invoice_id : inv_id) +
          "?timezone=" +
          Intl.DateTimeFormat().resolvedOptions().timeZone
      });
      await data.then(function(response) {
        if (typeof response !== "undefined") {
          $this.invoice_data = response.data;
          $this.loader = false;
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
.project-invoice-show {
  .main-title-header {
    padding: 0 0 30px;
    h4 {
      margin: 0;
      padding: 0;
      letter-spacing: 0px;
      color: #313f53;
      font-weight: 500;
      font-size: 24px;
      line-height: 33px;
      cursor: pointer;
      &:hover {
        color: #3fae2a;
      }
    }
    .top-date {
      p {
        margin: 0;
        padding: 6px 0 0;
        letter-spacing: 0.28px;
        color: #2a1c0b;
      }
    }
  }
  .top-btns {
    button {
      margin-left: 10px;
      &:first-child {
        margin-left: 0;
      }
    }
  }
  section {
    &:after {
      content: "";
      display: block;
      clear: both;
    }
    p {
      margin: 0;
      letter-spacing: 0.28px;
      color: #2a1c0b;
      font-weight: 200;
      line-height: 26px;
      span {
        letter-spacing: 0.28px;
        color: #323f54;
        font-weight: bold;
        a {
          letter-spacing: 0.28px;
          color: #323f54;
          font-weight: bold;
        }
      }
    }
    &.firm-details {
      padding: 25px 0;
    }
    &.item-area-invoice {
      padding: 25px 0px;
      .table {
        thead {
          th {
            border-bottom: none;
            border-top: none;
            vertical-align: middle;
          }
        }
        tbody {
          tr {
            background: #f9f9f9 0% 0% no-repeat padding-box;
            border-radius: 26px !important;
            td {
              border-bottom: 8px solid #fff;
              border-top: none;
              vertical-align: middle;
              letter-spacing: 0.28px;
              color: #2a1c0b;
              font-weight: 200;
            }
          }
        }
      }
      .total-area-calculation {
        float: right;
        background: #f9f9f9 0% 0% no-repeat padding-box;
        border-radius: 3px;
        padding: 20px 19px;
        width: 330px;
        &:after {
          content: "";
          display: block;
          clear: both;
        }
        .cal-box {
          display: table;
          width: 100%;
          p {
            display: table-cell;
            letter-spacing: 0.28px;
            color: #2a1c0b;
            line-height: 26px;
            vertical-align: middle;
          }
          h3 {
            font-size: 14px;
            display: table-cell;
            letter-spacing: 0.28px;
            color: #323f54;
            line-height: 36px;
            font-weight: bold;
            vertical-align: middle;
          }
        }
      }
    }
    &.payments-area-invoice {
      padding: 25px 0;
      .table {
        thead {
          th {
            border-bottom: none;
            border-top: none;
            vertical-align: middle;
          }
        }
        tbody {
          tr {
            background: #f9f9f9 0% 0% no-repeat padding-box;
            border-radius: 26px !important;
            td {
              border-bottom: 8px solid #fff;
              border-top: none;
              vertical-align: middle;
              letter-spacing: 0.28px;
              color: #2a1c0b;
              font-weight: 200;
            }
          }
        }
      }
    }
  }
}
</style>
