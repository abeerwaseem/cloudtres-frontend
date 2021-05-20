/* eslint-disable */
<template>
  <div class="project-invoice-section">
    <div class="container">
      <div class="white-row">
        <section class="top-heading-section-invoice">
          <div class=" invoices-tab">
            <div class="row">
              <div class="col-sm-12">
                <h4 class="sub-heading">Create Invoice:</h4>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="form-area">
            <div class="col-sm-12">
              <div class="row">
                <div class="col-sm-12">
                  <form>
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="row">
                          <div class="form-group">
                            <label for="email"
                              >Invoice Number: <span>*</span></label
                            >
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Invoice Number"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                        <div class="row">
                          <div class="form-group">
                            <label for="gender" class="control-label"
                              >Select Client<span>*</span></label
                            >
                            <Select2
                              :options="user_gender"
                              :settings="{ placeholder: 'Select Client' }"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                        <div class="row">
                          <div class="form-group">
                            <label for="gender" class="control-label"
                              >Currency <span>*</span>
                            </label>
                            <Select2
                              :options="user_gender"
                              :settings="{
                                placeholder: 'Select Currency'
                              }"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                        <div class="row">
                          <div class="form-group">
                            <label for="email">Due Date: <span>*</span></label>
                            <datepicker
                              :minimumView="'day'"
                              :maximumView="'month'"
                              :initialView="'month'"
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
                          typeof items !== 'undefined' &&
                            Object.keys(items).length
                        "
                      >
                        <div
                          class="list-item-cart"
                          v-for="(item, key) in items"
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
                                      :for="items[key].id + '_item_name'"
                                      class="control-label hidden-md hidden-lg"
                                      >Item</label
                                    >
                                    <input
                                      type="text"
                                      class="form-control item_name"
                                      v-model="items[key].item_name"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-md-12">
                                  <div class="form-group">
                                    <label
                                      :for="items[key].id + '_item_description'"
                                      class="control-label hidden-md hidden-lg"
                                      >Item Description</label
                                    >
                                    <textarea
                                      class="form-control item_description"
                                      v-model="items[key].item_description"
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
                                          :for="items[key].id + '_type'"
                                          class="control-label hidden-md hidden-lg"
                                          >Type</label
                                        >
                                        <Select2
                                          v-model="items[key].type"
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
                                          :for="items[key].id + '_quantity'"
                                          class="control-label hidden-md hidden-lg"
                                          >Qty/Hrs</label
                                        >
                                        <input
                                          type="number"
                                          min="1"
                                          class="form-control quantity"
                                          v-model="items[key].quantity"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-md-4">
                                    <div class="row">
                                      <div class="form-group">
                                        <label
                                          :for="
                                            items[key].id + '_cost_per_item'
                                          "
                                          class="control-label hidden-md hidden-lg"
                                          >Price</label
                                        >
                                        <input
                                          type="text"
                                          min="0"
                                          class="form-control cost_per_item"
                                          v-model="items[key].cost_per_item"
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
                                        items[key].quantity *
                                          parseInt(items[key].cost_per_item)
                                      }}
                                    </span>
                                  </p>
                                </div>
                                <div
                                  class="col-md-6 text-xl-right text-lg-right text-md-right text-sm-center text-center"
                                >
                                  <div class="form-group">
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
                          <div class="form-group item-add-btn">
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
                                {{ currency_symbol_view }}{{ getSubtltal }}
                              </span>
                              <input
                                type="hidden"
                                class="sub-total-field"
                                name="sub_total"
                                value="NaN"
                              />
                            </p>
                          </div>
                          <div class="col-sm-12 text-right">
                            <p>
                              Discount
                              <span class="discount-amount"
                                >{{ currency_symbol_view
                                }}{{ getDiscountedTotal }}</span
                              >
                            </p>
                          </div>
                          <div class="col-sm-12 text-right">
                            <p>
                              Tax
                              <span class="tax-percent"
                                >{{ currency_symbol_view }}{{ getTaxTotal }}
                              </span>
                            </p>
                          </div>
                          <div class="col-sm-12 text-right">
                            <p>
                              Total
                              <span class="total">
                                {{ currency_symbol_view }}{{ getTotal }}
                              </span>
                            </p>
                            <input
                              type="hidden"
                              class="total-field"
                              name="total"
                              value="NaN"
                            />
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
                              Create Invoice
                            </button>
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
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Datepicker from "vuejs-datepicker";
import Select2 from "v-select2-component";

export default {
  name: "invoices.create",
  components: {
    Select2,
    Datepicker
  },
  data() {
    return {
      formData: {
        project_name: null,
        brand_id: null,
        category_id: null,
        client_id: null,
        start_date: null,
        end_date: null,
        project_summary: null,
        notes: "",
        am_id: null,
        completion_percent: null,
        project_status: null,
        in_house_team_member: null
      },
      user_gender: [
        {
          id: "pnc-logos",
          text: "PNC Logos"
        },
        {
          id: "female",
          text: "PNC AU"
        },
        {
          id: "other",
          text: "Other"
        }
      ],
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
      items: [],
      formListingData: {
        id: "",
        item_name: "",
        item_description: "",
        type: "",
        quantity: 1,
        cost_per_item: 0
      },
      counter: 0,
      currency_symbol_view: "$",
      sub_total: null,
      disscount: null,
      tax: null,
      total: null
    };
  },
  mounted() {
    this.attachedRow();
  },
  computed: {
    getSubtltal() {
      var t_amount = 0;
      this.items.filter(item => {
        if (item.type != "" && item.type == "item") {
          t_amount = t_amount + parseInt(item.cost_per_item) * item.quantity;
        }
      });
            this.sub_total = t_amount;// eslint-disable-line
      return t_amount;
    },

    getDiscountedTotal() {
      var t_amount = 0;
      this.items.filter(item => {
        if (item.type != "" && item.type == "discount") {
          t_amount = t_amount + parseInt(item.cost_per_item) * item.quantity;
        }
      });
            this.disscount = t_amount;// eslint-disable-line
      return t_amount;
    },
    getTaxTotal() {
      var t_amount = 0;
      this.items.filter(item => {
        if (item.type != "" && item.type == "tax") {
          t_amount = t_amount + parseInt(item.cost_per_item) * item.quantity;
        }
      });
            this.tax = t_amount;// eslint-disable-line
      return t_amount;
    },

    getTotal() {
      // var get_percentage = (this.getDiscountedTotal / 100 ) * this.getSubtltal;
            this.total = (this.getSubtltal - this.getDiscountedTotal) + this.getTaxTotal;// eslint-disable-line
            return this.total;// eslint-disable-line
    }
  },
  methods: {
    removeItem(key) {
      this.items.splice(key, 1);
    },
    attachedRow() {
      this.addFormData();
    },
    addFormData() {
      this.items.push(window.Vue.util.extend({}, this.formListingData));
      this.items[this.counter].id =
        "_" +
        Math.random()
          .toString(36)
          .substr(2, 9);
      ++this.counter;
    }
  }
};
</script>
<style lang="scss" scoped>
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
