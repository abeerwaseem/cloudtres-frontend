<template>
  <div class="viewDashBoard project-route-index" v-cloak>
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
            <!-- Create Project Form  -->
            <div class="form-area">
              <div class="col-sm-12">
                <div class="row">
                  <div class="col-sm-12">
                    <div class="row top-gen-heading">
                      <h1 class="global-style-heading">
                        Edit Client
                      </h1>
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <form
                      class="create-client-form"
                      v-on:submit.prevent="onSubmit($event)"
                    >
                      <div class="row">
                        <div class="col-sm-6">
                          <div class="row">
                            <div class="form-group">
                              <label for="name">Name: <span>*</span></label>
                              <input
                                v-model="formData.name"
                                type="text"
                                class="form-control"
                                placeholder="Employee Name"
                                :class="{
                                  'input-border-errors':
                                    $v.formData.name.$dirty &&
                                    !$v.formData.name.required
                                }"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="row">
                            <div class="form-group">
                              <label for="email">Email: <span>*</span></label>
                              <input
                                v-model="formData.email"
                                type="email"
                                class="form-control"
                                placeholder="Email"
                                :class="{
                                  'input-border-errors':
                                    $v.formData.email.$dirty &&
                                    !$v.formData.email.required
                                }"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="row">
                            <div class="form-group">
                              <label for="password"
                                >Password: <span>*</span></label
                              >
                              <input
                                v-model="formData.password"
                                type="password"
                                class="form-control"
                                placeholder="Password"
                                autocomplete="new-password"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="row">
                            <div class="form-group">
                              <label for="mobile">Mobile: <span>*</span></label>
                              <input
                                v-model="formData.mobile"
                                type="tel"
                                class="form-control"
                                placeholder="Mobile"
                                :class="{
                                  'input-border-errors':
                                    $v.formData.mobile.$dirty &&
                                    !$v.formData.mobile.required
                                }"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="row">
                            <div class="form-group">
                              <label for="company_name">Company Name:</label>
                              <input
                                v-model="formData.company_name"
                                type="text"
                                class="form-control"
                                placeholder="Company Name"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="row">
                            <div class="form-group">
                              <label for="url">Client Website Url</label>
                              <input
                                v-model="formData.website_url"
                                type="text"
                                class="form-control"
                                placeholder="Company Name"
                                :class="{
                                  'input-border-errors':
                                    $v.formData.website_url.$dirty &&
                                    !$v.formData.website_url.url
                                }"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="row">
                            <div class="form-group">
                              <label for="gender" class="control-label"
                                >Select Brand<span>*</span></label
                              >
                              <Select2
                                @change="getAmOfBrand"
                                v-model="formData.brand_id"
                                :options="brand_options"
                                :settings="{
                                  placeholder: 'Select Brands',
                                  allowClear: true
                                }"
                                :class="{
                                  'input-border-errors':
                                    $v.formData.brand_id.$dirty &&
                                    !$v.formData.brand_id.required
                                }"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="row">
                            <div class="form-group">
                              <label for="gender" class="control-label"
                                >Client Account Manager <span>*</span>
                              </label>
                              <Select2
                                v-model="formData.am_id"
                                :options="ams_options"
                                :settings="{
                                  placeholder: 'Client Account Manager',
                                  multiple: true
                                }"
                                :class="{
                                  'input-border-errors':
                                    $v.formData.am_id.$dirty &&
                                    !$v.formData.am_id.required
                                }"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-12">
                          <div class="row">
                            <div class="form-actions">
                              <button
                                :disabled="disableSubmitBtn"
                                type="submit"
                                id="save-form"
                                class="btn btn-primary"
                              >
                                Update
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
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
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
  components: {
    Select2
  },
  computed: {
    getActiveUserData() {
      return this.$store.state.auth;
    }
  },
  data() {
    return {
      loader: true,
      formData: {
        name: null,
        email: null,
        password: null,
        mobile: null,
        company_name: null,
        website_url: null,
        brand_id: null,
        am_id: null
      },
      brand_options: null,
      ams_options: null,
      disableSubmitBtn: false
    };
  },
  mounted() {
    document.title = this.$router.app._route.meta.pageTitle;
    this.getprojectbrands();
    this.getClientDetial();
    this.loader = false;
  },
  methods: {
    async getClientDetial() {
      const $this = this;
      await window.axios
        .get("/clients/edit/" + this.$route.params.client_id)
        .then(resps => {
          $this.formData.name = resps.data.data.name;
          $this.formData.email = resps.data.data.email;
          $this.formData.mobile = resps.data.data.mobile;
          $this.formData.company_name = resps.data.data.company_name;
          $this.formData.website_url = resps.data.data.website_url;
          $this.formData.brand_id = resps.data.data.brand_id;
          $this.formData.am_id = resps.data.data.account_manager;
          $this.getProjectAms(resps.data.data.brand_id);
        })
        .catch(function(error) {
          $this.$store.dispatch("displayMessageErrors", {
            response: error.response,
            formEvent: null
          });
          $this.loader = false;
        });
    },
    async getprojectbrands() {
      const $this = this;
      const data = $this.$store.dispatch("getHttp", {
        url: "filters/get-project-brand"
      });
      await data.then(function(response) {
        if (typeof response !== "undefined") {
          $this.brand_options = response.data.data;
        }
      });
    },
    async getProjectAms(brandid) {
      const $this = this;
      const data = $this.$store.dispatch("getHttp", {
        url: "/filters/get-employees?brand_id=" + brandid
      });
      await data.then(function(response) {
        if (typeof response !== "undefined") {
          $this.ams_options = response.data.data;
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

      const data = $this.$store.dispatch("postHttp", {
        url: "clients/update/" + $this.$route.params.client_id,
        formDetails: this.formData,
        formEvent: event.target
      });
      await data.then(function(response) {
        if (typeof response !== "undefined") {
          // console.log(response);
          $this.$store.dispatch("displayMessageErrors", {
            response: response,
            formEvent: event.target
          });
          // $this.$router.push({path: '/clients'});
        }
      });
      $this.disableSubmitBtn = false;
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
    getAmOfBrand() {
      const $this = this;
      $this.formData.am_id = null;
      if ($this.formData.brand_id) {
        $this.getProjectAms($this.formData.brand_id);
      } else {
        $this.ams_options = null;
      }
    }
  },
  validations: {
    formData: {
      name: {
        required
      },
      email: {
        required,
        email
      },
      website_url: {
        url
      },
      mobile: {
        required
      },
      brand_id: {
        required
      },
      am_id: {
        required
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
.project-route-index {
  .show-project-portal-listing {
    .general-filters {
      .form-group {
        width: 100%;
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
    }
  }
}
</style>
