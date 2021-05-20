<template>
  <div class="viewDashBoard project-route-index" v-cloak>
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
                      {{ formData.name }}
                    </h1>
                  </div>
                </div>
                <div class="col-sm-12">
                  <form
                    class="emp-create-form"
                    v-on:submit.prevent="submit($event)"
                  >
                    <div class="row">
                      <div class="col-sm-6">
                        <div class="row">
                          <div class="form-group">
                            <label for="name"
                              >Employee Name: <span>*</span></label
                            >
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
                            <label for="email"
                              >Employee Email: <span>*</span></label
                            >
                            <input
                              v-model="formData.email"
                              type="email"
                              class="form-control"
                              placeholder="Employee Email"
                              :class="{
                                'input-border-errors':
                                  $v.formData.email.$dirty &&
                                  (!$v.formData.email.required ||
                                    !$v.formData.email.email)
                              }"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="row">
                          <div class="form-group">
                            <label for="password"
                              >Password:
                              <span
                                >(Leave this blank for default password.)</span
                              ></label
                            >
                            <input
                              v-model="formData.password"
                              type="password"
                              class="form-control"
                              placeholder="Password"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="row">
                          <div class="form-group">
                            <label for="mobile">Mobile:</label>
                            <input
                              v-model="formData.mobile"
                              type="tel"
                              class="form-control"
                              placeholder="Mobile"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-12">
                        <div class="row">
                          <div class="form-group">
                            <label for="address">Address:</label>
                            <textarea
                              v-model="formData.address"
                              class="form-control"
                              placeholder="Address"
                            ></textarea>
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
                              class="btn btn-primary default-global-btn"
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
</template>

<script>
import { validationMixin } from "vuelidate";

const {
  required,
  minLength,
  email,
  numeric
} = require("vuelidate/lib/validators");

export default {
  mixins: [validationMixin],
  components: {},
  computed: {
    getActiveUserData() {
      return this.$store.state.auth;
    }
  },
  data() {
    return {
      loader: true,
      formData: {
        id: null,
        name: null,
        email: null,
        password: null,
        mobile: null,
        address: "",
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
      },
      disableSubmitBtn: false
    };
  },
  mounted() {
    document.title = this.$router.app._route.meta.pageTitle;
    this.getEmployeeData();
    this.loader = false;
  },
  methods: {
    async getEmployeeData() {
      if (typeof this.getActiveUserData.user.id !== "undefined") {
        const $this = this;
        const data = $this.$store.dispatch("getHttp", {
          url:
            "settings/get-employee-profile-settings/" +
            this.getActiveUserData.user.id +
            "?timezone=" +
            Intl.DateTimeFormat().resolvedOptions().timeZone
        });
        await data.then(function(response) {
          console.log(response);
          if (typeof response !== "undefined") {
            $this.formData.id = response.data.data.id;
            $this.formData.name = response.data.data.name;
            $this.formData.email = response.data.data.email;
            $this.formData.mobile = response.data.data.mobile;
            $this.formData.address = response.data.data.user_details.address;
          }
        });
      }
    },
    resetValues() {
      this.formData.brand_id = null;
    },
    async submit(event) {
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
        url: "settings/get-employee-profile-settings",
        formDetails: this.formData,
        formEvent: event.target
      });
      await data.then(function(response) {
        if (typeof response !== "undefined") {
          $this.$store.dispatch("displayMessageErrors", {
            response: response,
            formEvent: event.target
          });
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
      }
      //   joining_date: {
      //     required
      //   },
      //   gender: {
      //     required
      //   },
      //   job_title: {
      //     required
      //   },
      //   hourly_rate: {
      //     required,
      //     minValue: 0,
      //     numeric
      //   },
      //   brand_id: {
      //     required
      //   },
      //   role_id: {
      //     required
      //   }
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
body .form-area .form-group label span {
  color: red;
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
