/*global unescape, define */
<template>
  <div class="viewDashBoard" v-cloak>
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
      <div v-else class="dash-board-wrapper>">
        <div key="1" class="white-row">
          <!-- // Filter Area -->
          <div class="general-filters">
            <div class="col-sm-12">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                  <div class="date-range-col">
                    <div class="new-dashboard">
                      <div class="form-group">
                        <label for="dateRange" class="control-label"
                          >&nbsp;</label
                        >
                        <date-range-picker
                          :locale-data="{ firstDay: 1, format: 'DD-MM-YYYY' }"
                          :ranges="false"
                          :opens="opens"
                          v-model="formData.dateRange"
                          @update="updateValues"
                          :autoApply="true"
                        >
                          <template
                            v-slot:input="picker"
                            style="min-width: 350px;"
                          >
                            {{ picker.startDate | date }} -
                            {{ picker.endDate | date }}
                          </template>
                        </date-range-picker>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                  <div class="form-group">
                    <label for="gender" class="control-label">&nbsp;</label>
                    <Select2
                      v-model="formData.brand_id"
                      :options="brands_options"
                      :settings="{ placeholder: 'Select Brand' }"
                    />
                  </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                  <div class="form-actions text-right">
                    <button
                      :disabled="disableSubmitBtn"
                      @click.prevent="getInvoicesData"
                      type="submit"
                      id="save-form"
                      class="btn btn-primary"
                    >
                      Filter
                    </button>
                    <button
                      @click.prevent="ResetValues($event)"
                      type="reset"
                      class="btn btn-primary"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Dash Bord Firs Box -->
          <div class="filter-Calculation-Area">
            <transition
              name="fade"
              mode="out-in"
              @beforeLeave="beforeLeave"
              @enter="enter"
              @afterEnter="afterEnter"
            >
              <div
                key="1"
                v-if="filter_area_loader"
                class="white-row loader-route"
              >
                <div class="lds-sub-ripple">
                  <div></div>
                  <div></div>
                </div>
              </div>

              <div key="2" v-else>
                <div
                  class="row"
                  v-if="
                    typeof filtersData.data !== 'undefined' &&
                      Object.keys(filtersData.data).length
                  "
                >
                  <div class="col-xl-2 col-lg-4 col-md-4 col-sm-6 col-12 ">
                    <div class="row">
                      <div class="box-dash-wraper">
                        <div class="box-dash">
                          <span class="icon-Path-5637"></span>
                          <p class="txt">Total Projects</p>
                          <p class="numb">
                            {{ filtersData.data.total_project | numFormat }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-2 col-lg-4 col-md-4 col-sm-6 col-12 ">
                    <div class="row">
                      <div class="box-dash-wraper">
                        <div class="box-dash">
                          <span class="icon-Group-5014"></span>
                          <p class="txt">Total Employees</p>
                          <p class="numb">
                            {{ filtersData.data.total_employee | numFormat }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-2 col-lg-4 col-md-4 col-sm-6 col-12 ">
                    <div class="row">
                      <div class="box-dash-wraper">
                        <div class="box-dash">
                          <span class="icon-Group-5015"></span>
                          <p class="txt">Total Clients</p>
                          <p class="numb">
                            {{ filtersData.data.total_client | numFormat }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-2 col-lg-4 col-md-4 col-sm-6 col-12 ">
                    <div class="row">
                      <div class="box-dash-wraper">
                        <div class="box-dash">
                          <span class="icon-Path-5636"></span>
                          <p class="txt">Paid Invoices</p>
                          <p class="numb">
                            {{
                              filtersData.data.total_paid_invoice | numFormat
                            }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-2 col-lg-4 col-md-4 col-sm-6 col-12 ">
                    <div class="row">
                      <div class="box-dash-wraper">
                        <div class="box-dash">
                          <span class="icon-Group-5017"></span>
                          <p class="txt">Unpaid Invoices</p>
                          <p class="numb">
                            {{
                              filtersData.data.total_unpaid_invoice | numFormat
                            }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-2 col-lg-4 col-md-4 col-sm-6 col-12 ">
                    <div class="row">
                      <div class="box-dash-wraper">
                        <div class="box-dash">
                          <i class="fas fa-tasks"></i>
                          <p class="txt">Comp Projects</p>
                          <p class="numb">
                            {{
                              filtersData.data.total_completed_project
                                | numFormat
                            }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-else class="row">
                  <div class="col-sm-12">
                    No Record Found.
                  </div>
                </div>
                <div class="horizontal-row">
                  <hr />
                </div>
                <div
                  v-if="
                    typeof filtersData.data !== 'undefined' &&
                      Object.keys(filtersData.data).length
                  "
                >
                  <div
                    v-for="(brand, brand_index) in filtersData.data.brands"
                    :key="brand_index"
                    class="row"
                  >
                    <div class="col-xl-4 col-lg-12 col-md-12 col-sm-12">
                      <div class="currency-box-dash-wrapper">
                        <div class="currency-box-dash">
                          <div class="wrap-icon">
                            <i class="fas fa-dollar-sign"></i>
                          </div>
                          <div class="row">
                            <div class="col-xl-7 col-lg-7 col-md-7 col-sm-6">
                              <div class="">
                                <p class="txt">
                                  <b
                                    >Total Amount<br />
                                    {{ brand.name }} ({{
                                      brand.currency_name
                                    }})</b
                                  >
                                </p>
                              </div>
                            </div>
                            <div class="col-xl-5 col-lg-5 col-md-5 col-sm-6">
                              <div class="row">
                                <div class=" text-right width-100">
                                  <p class="numb text-right-xs">
                                    {{ brand.currency }}
                                    {{ brand.total_brand_amount | numFormat }}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                      <div class="currency-box-dash-wrapper">
                        <div class="currency-box-dash">
                          <div class="wrap-icon">
                            <i class="fas fa-dollar-sign"></i>
                          </div>
                          <div class="row">
                            <div class="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                              <div class="">
                                <p class="txt">
                                  Unpaid Amount<br />
                                  {{ brand.name }} (Dollars)
                                </p>
                              </div>
                            </div>
                            <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                              <div class="row">
                                <div
                                  class=" text-right text-right-custom width-100"
                                >
                                  <p class="numb text-right-xs">
                                    {{ brand.currency }}
                                    {{
                                      brand.total_brand_paid_amount | numFormat
                                    }}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                      <div class="currency-box-dash-wrapper">
                        <div class="currency-box-dash">
                          <div class="wrap-icon">
                            <i class="fas fa-dollar-sign"></i>
                          </div>
                          <div class="row">
                            <div class="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                              <div class="">
                                <p class="txt">
                                  Paid Amount<br />
                                  {{ brand.name }} (Dollars)
                                </p>
                              </div>
                            </div>
                            <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                              <div class="row">
                                <div
                                  class=" text-right text-right-custom width-100"
                                >
                                  <p class="numb text-right-xs">
                                    {{ brand.currency }}
                                    {{
                                      brand.total_brand_unpaid_amount
                                        | numFormat
                                    }}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>

        <!-- Messages Area -->
        <div key="2" class="white-row message-wraper-area margin-top-50">
          <h3 class="global-style-heading">
            Messages
            <a @click.prevent="refreshMessages" href="" class="refreshData"
              ><i class="fas fa-redo-alt"></i
            ></a>
          </h3>

          <transition
            name="fade"
            mode="out-in"
            @beforeLeave="beforeLeave"
            @enter="enter"
            @afterEnter="afterEnter"
          >
            <div key="1" v-if="message_loader" class="white-row loader-route">
              <div class="lds-sub-ripple">
                <div></div>
                <div></div>
              </div>
            </div>
            <div key="2" v-else>
              <div
                class="message-wrapper"
                v-if="
                  typeof project_messages.data !== 'undefined' &&
                    Object.keys(project_messages.data).length
                "
              >
                <div
                  v-for="(message, mes_index) in project_messages.data"
                  :key="mes_index"
                  :class="[
                    mes_index == 0
                      ? 'thr-loop-row margin-top-20'
                      : 'thr-loop-row'
                  ]"
                >
                  <div class="row">
                    <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                      <div class="thrd-name">
                        <router-link
                          class="eclipse-para color-blk customize-global-link"
                          :to="{
                            path: '/projects/show/'+message.project_id+'/messages/show/'+message.id
                          }"
                          tag="a"
                        >
                          {{ message.porject_thread_subtitle }}
                        </router-link>
                      </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-8 col-sm-12">
                      <div class="row">
                        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                          <div class="per-name">
                            <p class="eclipse-para">
                              {{ message.last_message.user.name }}
                            </p>
                          </div>
                        </div>
                        <div class="col-xl-9 col-lg-9 col-md-9 col-sm-12">
                          <div class="pers-last-mesg">
                            <p class="eclipse-para">
                              {{ message.last_message.message }}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-2 col-lg-2 col-md-4 col-sm-12">
                      <div class="thr-time text-right">
                        {{ message.last_message.created_at }}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="view-more-btn"
                  v-if="
                    typeof project_messages.data !== 'undefined' &&
                      Object.keys(project_messages.data).length
                  "
                >
                  <div
                    v-if="project_messages.meta.total > 10"
                    class="loadMoreBtn"
                  >
                    <router-link
                      :to="{
                        path: '/messages'
                      }"
                      tag="a"
                    >
                      More....
                    </router-link>
                  </div>
                </div>
              </div>
              <div v-else>
                <no-record-found></no-record-found>
              </div>
            </div>
          </transition>
        </div>

        <!-- Invoice Section Area -->
        <div key="3" class="white-row margin-top-50 invoices-tab">
          <transition
            name="fade"
            mode="out-in"
            @beforeLeave="beforeLeave"
            @enter="enter"
            @afterEnter="afterEnter"
          >
            <div
              key="1"
              v-if="invoice_area_loader"
              class="white-row loader-route"
            >
              <div class="lds-sub-ripple">
                <div></div>
                <div></div>
              </div>
            </div>
            <div v-else key="2" class="invoice-wrapper-home">
              <h3 class="global-style-heading">
                Invoices
                <a @click.prevent="refreshInvoices" href="" class="refreshData"
                  ><i class="fas fa-redo-alt"></i
                ></a>
              </h3>
              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Invoice Number</th>
                      <th>Project Name</th>
                      <th>Total</th>
                      <th>Status</th>
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
                          class="invoice-title color-blk customize-global-link"
                          :to="{
                            path: '/invoices/show/' + invoice.id
                          }"
                          tag="a"
                        >
                          {{ invoice.invoice_number }}
                        </router-link>
                      </td>
                      <td>
                        <router-link
                          class="invoice-title color-blk customize-global-link"
                          :to="{
                            path: '/projects/show/' + invoice.invoice_project_id
                          }"
                          tag="a"
                        >
                          {{ invoice.invoice_project }}
                        </router-link>
                      </td>
                      <td>
                        <p class="invoice-total bold-cls">
                          {{ invoice.currency_symbol }}
                          {{ invoice.total | numFormat }}
                        </p>
                      </td>
                      <td>
                        <p
                          :class="
                            invoice.status == 'unpaid'
                              ? 'invoice-status danger'
                              : 'invoice-status success'
                          "
                        >
                          {{ invoice.status }}
                        </p>
                      </td>
                    </tr>
                  </tbody>
                  <tbody v-else>
                    <tr>
                      <td colspan="4">
                        <p>
                          <no-record-found></no-record-found>
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div
                  class="view-more-btn"
                  v-if="
                    typeof invoice_data.data !== 'undefined' &&
                      Object.keys(invoice_data.data).length
                  "
                >
                  <div v-if="invoice_data.meta.total > 10" class="loadMoreBtn">
                    <router-link
                      :to="{
                        path: '/invoices'
                      }"
                      tag="a"
                    >
                      More....
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import DateRangePicker from "vue2-daterange-picker";
//you need to import the CSS manually (in case you want to override it)
import "vue2-daterange-picker/dist/vue2-daterange-picker.css";
import Select2 from "v-select2-component";
import norecordfound from "../../../components/no-record-found";

export default {
  components: {
    Select2,
    DateRangePicker,
    "no-record-found": norecordfound
  },
  filters: {
    date(val) {
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];

      return val
        ? months[val.getMonth()] +
            " " +
            val.getDate() +
            ", " +
            val.getFullYear()
        : "";
    }
  },
  data() {
    return {
      filter_area_loader: true,
      opens: "right",
      single: true,
      formData: {
        dateRange: {
          startDate: "",
          endDate: ""
        },
        brand_id: null
      },
      brands_options: null,
      filtersData: {},
      disableSubmitBtn: false,
      project_messages: {},
      message_loader: true,
      invoice_area_loader: true,
      invoice_data: {},
      loader: true
    };
  },
  mounted() {
    document.title =
      "PNC Work Bench - " + this.$router.app._route.meta.pageTitle;
    // Set The Date of Date Range picker on First Day of Month
    this.getBrandData();
    this.resetDate();
    this.getInvoicesData();
    this.getMessageData();
    this.getInvoiceData();
    this.loader = false;
  },
  computed: {
    getActiveUserData() {
      return this.$store.state.auth;
    }
  },
  methods: {
    refreshInvoices() {
      this.getInvoiceData();
    },
    refreshMessages() {
      this.getMessageData();
    },
    async getBrandData() {
      const $this = this;
      const data = $this.$store.dispatch("getHttp", {
        url: "filters/get-project-brand"
      });
      await data.then(function(response) {
        if (typeof response !== "undefined") {
          $this.brands_options = response.data.data;
        }
      });
    },
    resetDate() {
      var date = new Date(),
        y = date.getFullYear(),
        m = date.getMonth();
      this.formData.dateRange.startDate = this.$options.filters.date(
        new Date(y, m, 1)
      );
      this.formData.dateRange.endDate = this.$options.filters.date(new Date());
    },
    updateValues(dates) {
      this.formData.dateRange.startDate = this.$options.filters.date(
        dates.startDate
      );
      this.formData.dateRange.endDate = this.$options.filters.date(
        dates.endDate
      );
    },
    async ResetValues(event) {
      this.resetDate();
      let FormDataFields = this.formData;
      Object.keys(FormDataFields).map(function(objectKey, index) {
        if (objectKey == "brand_id") {
          FormDataFields[objectKey] = null;
        }
      });
      this.getInvoicesData();
    },
    async getInvoicesData() {
      const $this = this;
      $this.filter_area_loader = true;
      const data = $this.$store.dispatch("getHttp", {
        url:
          "dashboard/get-dashboard-general-info?brand_id=" +
          this.formData.brand_id +
          "&startDate=" +
          this.formData.dateRange.startDate +
          "&endDate=" +
          this.formData.dateRange.endDate
      });
      await data.then(function(response) {
        if (typeof response !== "undefined") {
          $this.filtersData = response.data;
        }
        $this.filter_area_loader = false;
      });
    },
    async getMessageData() {
      const $this = this;
      $this.message_loader = true;
      const data = $this.$store.dispatch("getHttp", {
        url:
          "dashboard/get-dashboad-thread-messages?timezone=" +
          Intl.DateTimeFormat().resolvedOptions().timeZone
      });
      await data.then(function(response) {
        if (typeof response !== "undefined") {
          $this.project_messages = response.data;
        }
        $this.message_loader = false;
      });
    },
    async getInvoiceData() {
      const $this = this;
      $this.invoice_area_loader = true;
      const data = $this.$store.dispatch("getHttp", {
        url: "dashboard/get-dashboad-invoices"
      });
      await data.then(function(response) {
        if (typeof response !== "undefined") {
          $this.invoice_data = response.data;
        }
        $this.invoice_area_loader = false;
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
.viewDashBoard {
  .white-row {
    min-height: 220px;
    background: #fff;
    padding: 40px 33px 40px;
    box-shadow: 0 0 10px #00000029;
    border-radius: 10px;
    // Top Filter Css
    .filter-Calculation-Area {
      padding: 40px 15px 0;
      position: relative;
      .white-row.loader-route {
        z-index: 1;
        width: 100%;
        background: #fff;
        .lds-sub-ripple {
          position: relative;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .box-dash-wraper {
        width: 100%;
        padding: 0 9px 0 13px;
        margin-bottom: 15px;
        .box-dash {
          background: #faf9f7;
          padding: 20px 15px;
          p {
            margin: 0;
            &.txt {
              margin: 0;
              letter-spacing: 0.28px;
              color: #323f54;
              font-size: 14px;
              font-weight: bold;
              padding: 12px 0 15px;
            }
            &.numb {
              margin: 0;
              letter-spacing: 0.28px;
              color: #323f54;
              font-size: 28px;
              font-weight: bold;
              padding: 0;
            }
          }
          i,
          span,
          svg {
            color: #2d9cea;
            font-size: 23px;
            &:before {
              color: #2d9cea;
            }
          }
        }
      }
      .horizontal-row {
        padding: 30px 0 23px;
        hr {
          margin: 0;
        }
        &:after {
          content: "";
          display: block;
          clear: both;
        }
      }
      .currency-box-dash-wrapper {
        width: 100%;
        margin-bottom: 20px;
        .currency-box-dash {
          position: relative;
          background: #faf9f7;
          padding: 15px 20px 15px 45px;

          .wrap-icon {
            position: absolute;
            top: 23px;
            left: 15px;
            width: 26px;
            height: 26px;
            background: #3fae2a;
            color: #fff;
            border-radius: 50%;
            padding: 0 8px;
            font-size: 17px;
          }
          p {
            margin: 0;
            letter-spacing: 0.28px;
            color: #2a1c0b;
            &.txt {
              padding: 1px 0 1px 7px;
            }
            &.numb {
              width: 100%;
              letter-spacing: 0px;
              color: #364460;
              font-size: 15px;
              font-weight: bold;
              padding-top: 9px;
              padding-right: 5px;
            }
          }
        }
      }
    }
    // Message Section Css
    .thr-loop-row {
      border-bottom: 1px solid #ebebeb;
      padding: 20px 0;
      p {
        margin: 0;
        letter-spacing: 0.28px;
        color: #2a1c0b;
      }
      .thrd-name {
        p {
          letter-spacing: 0.28px;
          color: #323f54;
          font-weight: bold;
        }
      }
      .per-name {
        p {
          font-weight: 400;
        }
      }
      .pers-last-mesg {
        p {
          font-weight: 100;
        }
      }
      .thr-time {
        font-weight: 100;
      }
    }

    // invoicrd tab
    &.invoices-tab {
      h3 {
        margin-bottom: 30px;
      }
      .white-row.loader-route {
        .lds-sub-ripple {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .invoice-wrapper-home {
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
                      display: inline-block;
                      background: #ece9df 0% 0% no-repeat padding-box;
                      border: 1px solid #00000000;
                      border-radius: 15px;
                      padding: 3px 17px;
                    }
                    &.invoice-icon {
                      display: inline-block;
                      background: #1190ee;
                      color: #fff !important;
                      padding: 6px 10px;
                      border-radius: 5px;
                    }
                    &.invoice-status {
                      font-size: 10px;
                      border-radius: 10px;
                      text-transform: capitalize;
                      font-weight: bold !important;
                      line-height: 20px !important;
                      padding: 0 10px;
                      text-align: center;
                      display: inline-block;
                      border: 1px solid #00000000;
                      width: 100%;
                      &.danger {
                        background: red;
                        color: #fff !important;
                      }
                      &.success {
                        background: rgba(0, 128, 0, 0.72);
                        color: #fff !important;
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
    &.message-wraper-area {
      position: relative;
      .white-row.loader-route {
        margin-top: 20px;
        .lds-sub-ripple {
          position: relative;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
}

// custom Styling
.viewDashBoard .white-row .filter-Calculation-Area .horizontal-row {
  padding-top: 10px;
}

// Extra large devices (lg and less)
@media screen and (max-width: 1199px) {
  .text-right-custom {
    text-align: right;
  }
}
// Extra large devices (md and less)
@media screen and (max-width: 991px) {
  .text-right-custom {
    text-align: right;
  }
  .viewDashBoard
    .white-row
    .filter-Calculation-Area
    .currency-box-dash-wrapper
    .currency-box-dash
    p.numb {
    font-size: 17px;
    padding-top: 8px;
  }
}

// Extra large devices (sm and up)
@media screen and (max-width: 767px) {
  .text-right-custom {
    text-align: left;
  }
  p {
    &.payment-custom-padding {
      padding-top: 0 !important;
      padding-left: 8px;
    }
  }
  .viewDashBoard
    .white-row
    .filter-Calculation-Area
    .currency-box-dash-wrapper
    .currency-box-dash
    p.numb {
    font-size: 15px;
    padding-top: 0;
    text-align: left;
    padding-left: 23px;
  }
}

// Extra large devices (xs and up)
@media screen and (max-width: 575px) {
  .text-right-custom {
    text-align: left;
  }
  .text-right-xs {
    text-align: left;
    padding-top: 0 !important;
    padding-left: 23px;
  }
  .viewDashBoard
    .white-row
    .filter-Calculation-Area
    .currency-box-dash-wrapper
    .currency-box-dash
    p.numb {
    font-size: 15px;
    padding-top: 0;
  }
}

// Extra large devices (xl, 1200px and up)
@media (min-width: 1200) {
  .text-right-custom {
    text-align: right;
  }
}
</style>
