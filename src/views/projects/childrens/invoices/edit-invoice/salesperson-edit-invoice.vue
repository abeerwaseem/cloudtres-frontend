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
      <div v-else class="edit-invoice-wrapper">
        <section class="top-heading-section-invoice">
          <div class=" invoices-tab">
            <div class="row">
              <div class="col-sm-12">
                <h4 class="sub-heading">Edit Invoice:</h4>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="form-area">
            <div class="col-sm-12">
              <div class="row">
                <div class="col-sm-12">
                  <form
                    class="project-invoice-form"
                    v-on:submit.prevent="onSubmit($event)"
                  >
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="row">
                          <div class="form-group">
                            <label for="invoice_number"
                              >Invoice Number: <span>*</span></label
                            >
                            <input
                              v-model="formData.invoice_number"
                              type="text"
                              class="form-control"
                              placeholder="Invoice Number"
                              :class="{
                                'input-border-errors':
                                  $v.formData.invoice_number.$dirty &&
                                  !$v.formData.invoice_number.required
                              }"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                        <div class="row">
                          <div class="form-group">
                            <label for="client_id" class="control-label"
                              >Select Client<span>*</span></label
                            >
                            <Select2
                              v-model="formData.client_id"
                              :options="clinet_options"
                              :settings="{ placeholder: 'Select Client' }"
                              :class="{
                                'input-border-errors':
                                  $v.formData.client_id.$dirty &&
                                  !$v.formData.client_id.required
                              }"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                        <div class="row">
                          <div class="form-group">
                            <label for="currency_id" class="control-label"
                              >Currency <span>*</span>
                            </label>
                            <Select2
                              v-model="formData.currency_id"
                              :options="currency_options"
                              :settings="{
                                placeholder: 'Select Currency'
                              }"
                              :class="{
                                'input-border-errors':
                                  $v.formData.currency_id.$dirty &&
                                  !$v.formData.currency_id.required
                              }"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                        <div class="row">
                          <div class="form-group">
                            <label for="due_date"
                              >Due Date: <span>*</span></label
                            >
                            <datepicker
                              :minimumView="'day'"
                              :maximumView="'month'"
                              :initialView="'month'"
                              v-model="formData.due_date"
                              :class="{
                                'input-border-errors':
                                  $v.formData.due_date.$dirty &&
                                  !$v.formData.due_date.required
                              }"
                            >
                              <span
                                slot="afterDateInput"
                                class="animated-placeholder"
                              >
                                <i class="far fa-calendar-alt"></i>
                              </span>
                            </datepicker>
                          </div>
                        </div>
                      </div>

                      <section
                        class="invoice-itmes-section"
                        v-if="
                          typeof formData.items !== 'undefined' &&
                            Object.keys(formData.items).length
                        "
                      >
                        <div
                          class="list-item-cart"
                          v-for="(item, key) in formData.items"
                          :key="key"
                          id="item-list"
                        >
                          <hr />
                          <div class="row">
                            <div class="col-sm-9">
                              <div class="row">
                                <div class="col-md-12">
                                  <div class="form-group">
                                    <label
                                      :for="
                                        formData.items[key].id + '_item_name'
                                      "
                                      class="control-label hidden-md hidden-lg"
                                      >Item</label
                                    >
                                    <input
                                      type="text"
                                      class="form-control item_name"
                                      v-model="formData.items[key].item_name"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-md-12">
                                  <div class="form-group">
                                    <label
                                      :for="
                                        formData.items[key].id +
                                          '_item_description'
                                      "
                                      class="control-label hidden-md hidden-lg"
                                      >Item Description</label
                                    >
                                    <textarea
                                      class="form-control item_description"
                                      v-model="
                                        formData.items[key].item_description
                                      "
                                    ></textarea>
                                  </div>
                                </div>
                              </div>
                              <div class="col-sm-12">
                                <div class="row">
                                  <div class="col-md-4">
                                    <div class="row">
                                      <div class="form-group">
                                        <label
                                          :for="
                                            formData.items[key].id + '_type'
                                          "
                                          class="control-label hidden-md hidden-lg"
                                          >Type</label
                                        >
                                        <Select2
                                          v-model="formData.items[key].type"
                                          :options="invoice_type"
                                          :settings="{
                                            placeholder: 'Select type'
                                          }"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-md-4">
                                    <div class="row">
                                      <div class="form-group">
                                        <label
                                          :for="
                                            formData.items[key].id + '_quantity'
                                          "
                                          class="control-label hidden-md hidden-lg"
                                          >Qty/Hrs</label
                                        >
                                        <input
                                          type="number"
                                          min="1"
                                          class="form-control quantity"
                                          v-model="formData.items[key].quantity"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-md-4">
                                    <div class="row">
                                      <div class="form-group">
                                        <label
                                          :for="
                                            formData.items[key].id +
                                              '_cost_per_item'
                                          "
                                          class="control-label hidden-md hidden-lg"
                                          >Price</label
                                        >
                                        <input
                                          type="number"
                                          min="1"
                                          class="form-control cost_per_item"
                                          v-model="
                                            formData.items[key].cost_per_item
                                          "
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-sm-3">
                              <div class="row">
                                <div class="col-md-6 text-center">
                                  <label
                                    class="control-label hidden-md hidden-lg"
                                    >Amount</label
                                  >
                                  <p class="form-control-static">
                                    <span class="amount-html">
                                      {{ currency_symbol_view
                                      }}{{
                                        (formData.items[key].quantity *
                                          parseInt(
                                            formData.items[key].cost_per_item
                                          ))
                                          | numFormat
                                      }}
                                    </span>
                                  </p>
                                </div>
                                <div
                                  class="col-md-6 text-xl-right text-lg-right text-md-right text-sm-center text-center"
                                >
                                  <div class="form-group-btn">
                                    <button
                                      v-if="key != 0"
                                      @click="removeItem(key)"
                                      type="button"
                                      class="btn remove-item btn-circle btn-danger"
                                    >
                                      <i class="fas fa-times-circle"></i>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xs-12 m-t-5">
                          <div class="form-group-add-item item-add-btn">
                            <button
                              @click.prevent="attachedRow"
                              type="button"
                              class="default-global-btn"
                              id="add-item"
                            >
                              <i class="fa fa-plus"></i> Add Item
                            </button>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-sm-12 text-right">
                            <p>
                              Sub Total
                              <span class="sub-total">
                                {{ currency_symbol_view
                                }}{{ getSubtltal | numFormat }}
                              </span>
                            </p>
                          </div>
                          <div class="col-sm-12 text-right">
                            <p>
                              Discount
                              <span class="discount-amount"
                                >{{ currency_symbol_view
                                }}{{ getDiscountedTotal | numFormat }}</span
                              >
                            </p>
                          </div>
                          <div class="col-sm-12 text-right">
                            <p>
                              Tax
                              <span class="tax-percent"
                                >{{ currency_symbol_view
                                }}{{ getTaxTotal | numFormat }}
                              </span>
                            </p>
                          </div>
                          <div class="col-sm-12 text-right">
                            <p>
                              Total
                              <span class="total">
                                {{ currency_symbol_view
                                }}{{ getTotal | numFormat }}
                              </span>
                            </p>
                          </div>
                        </div>
                      </section>

                      <div class="col-sm-12">
                        <div class="row">
                          <div class="form-actions">
                            <button
                              :disabled="disableSubmitBtn"
                              type="submit"
                              id="save-form"
                              class="default-global-btn"
                            >
                              Update Invoice
                            </button>
                            <div
                              v-if="disableSubmitBtn"
                              class="form_submit_loader"
                            >
                              <div class="lds-ellipsis">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
import Datepicker from "vuejs-datepicker";
import Select2 from "v-select2-component";

import { validationMixin } from "vuelidate";
const {
  required,
  minLength,
  email,
  numeric,
  url
} = require("vuelidate/lib/validators");

export default {
  mixins: [validationMixin],
  name: "invoices.create",
  components: {
    Select2,
    Datepicker
  },
  validations: {
    formData: {
      invoice_number: {
        required
      },
      client_id: {
        required
      },
      currency_id: {
        required
      },
      due_date: {
        required
      }
    }
  },
  data() {
    return {
      loader: true,
      formData: {
        invoice_number: null,
        client_id: null,
        currency_id: null,
        due_date: null,
        project_id: this.$route.params.project_id,
        items: [],
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        sub_total: 0,
        disscount: 0,
        total: 0
      },
      counter: 0,
      currency_symbol_view: "$",
      tax: null,
      invoice_type: [
        {
          id: "item",
          text: "Item"
        },
        {
          id: "discount",
          text: "Discount"
        },
        {
          id: "tax",
          text: "Tax"
        }
      ],
      disableSubmitBtn: false,
      formListingData: {
        id: "",
        item_name: "",
        item_description: "",
        type: "",
        quantity: 1,
        cost_per_item: 0
      },
      clinet_options: null,
      currency_options: null
    };
  },
  mounted() {
    this.EditInvoice();
    this.getProjectClients();
    this.getCurrency();
    this.loader = false;
  },
  computed: {
    getSubtltal() {
      var t_amount = 0;
      this.formData.items.filter(item => {
        if (item.type != "" && item.type == "item") {
          t_amount = t_amount + parseInt(item.cost_per_item) * item.quantity;
        }
      });
            this.formData.sub_total = t_amount;// eslint-disable-line
      return t_amount;
    },

    getDiscountedTotal() {
      var t_amount = 0;
      this.formData.items.filter(item => {
        if (item.type != "" && item.type == "discount") {
          t_amount = t_amount + parseInt(item.cost_per_item) * item.quantity;
        }
      });
            this.formData.disscount = t_amount;// eslint-disable-line
      return t_amount;
    },
    getTaxTotal() {
      var t_amount = 0;
      this.formData.items.filter(item => {
        if (item.type != "" && item.type == "tax") {
          t_amount = t_amount + parseInt(item.cost_per_item) * item.quantity;
        }
      });
            this.tax = t_amount;// eslint-disable-line
      return t_amount;
    },

    getTotal() {
      // var get_percentage = (this.getDiscountedTotal / 100 ) * this.getSubtltal;
            this.formData.total = (this.getSubtltal - this.getDiscountedTotal) + this.getTaxTotal;// eslint-disable-line
            return this.formData.total;// eslint-disable-line
    }
  },
  methods: {
    async EditInvoice() {
      const $this = this;
      const currnecy = $this.$store.dispatch("getHttp", {
        url:
          "invoices/edit/" +
          $this.$route.params.invoice_id +
          "?timezone=" +
          $this.formData.timezone
      });
      await currnecy.then(function(response) {
        if (typeof response !== "undefined") {
          $this.formData.invoice_number = response.data.data.invoice_number;
          $this.formData.client_id = response.data.data.client_id;
          $this.formData.currency_id = response.data.data.currency_id;
          $this.formData.due_date = response.data.data.due_date;
          $this.formData.items = response.data.data.items;
        }
      });
    },
    async getCurrency() {
      const $this = this;
      const currnecy = $this.$store.dispatch("getHttp", {
        url: "filters/get-curriens"
      });
      await currnecy.then(function(response) {
        if (typeof response !== "undefined") {
          $this.currency_options = response.data.data;
        }
      });
    },
    async getProjectClients() {
      const $this = this;
      const getProjectCl = $this.$store.dispatch("getHttp", {
        url: "filters/get-clients?project_id=" + this.$route.params.project_id
      });
      await getProjectCl.then(function(response) {
        if (typeof response !== "undefined") {
          $this.clinet_options = response.data.data;
        }
      });
    },
    async onSubmit(event) {
      const $this = this;
      $this.disableSubmitBtn = true;
      $this.$v.$touch();

      if ($this.$v.$invalid) {
        $this.$store.dispatch("showtostrMessageNotifications", {
          message: "Please fill all the fields to proceed form!",
          type: "error"
        });
        $this.disableSubmitBtn = false;
        return;
      }

      // alert("hello");

      const data = $this.$store.dispatch("postHttp", {
        url: "invoices/update/" + this.$route.params.invoice_id,
        formDetails: this.formData,
        formEvent: event.target
      });
      await data.then(function(response) {
        if (typeof response !== "undefined") {
          $this.$store.dispatch("displayMessageErrors", {
            response: response,
            formEvent: event.target
          });
          // $this.$router.push({path: '/projects/show/'+$this.$route.params.project_id+'/invoices/'});
          $this.disableSubmitBtn = false;
        }
      });
      $this.disableSubmitBtn = false;
    },
    removeItem(key) {
      this.formData.items.splice(key, 1);
    },
    attachedRow() {
      this.addFormData();
    },
    addFormData() {
      this.formData.items.push(
        window.Vue.util.extend({}, this.formListingData)
      );
      this.formData.items[this.counter].id =
        "_" +
        Math.random()
          .toString(36)
          .substr(2, 9);
      ++this.counter;
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
body .form-area .form-group label span {
  color: red;
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
  width: 100%;
  &.top-heading-section-invoice {
    border-bottom: none;
    padding-top: 0;
    padding-bottom: 0;
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
  &.invoice-itmes-section {
    padding-top: 0;
    border: none;
    .list-item-cart {
      hr {
        width: 98%;
      }
    }
    .item-add-btn {
      padding: 10px 13px 0;
    }
  }
}
</style>
