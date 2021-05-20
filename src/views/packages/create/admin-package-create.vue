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
                      Add Server
                    </h1>
                  </div>
                </div>
                <div class="col-sm-12">
                  <form
                    class="create-client-form"
                    v-on:submit.prevent="onSubmit($event)"
                  >
                    <div class="row">
                      <div class="col-sm-3">
                        <div class="row">
                          <div class="form-group">
                            <label for="vendor" class="control-label"
                              >Vendor<span>*</span></label
                            >
                            <Select2
                              @select="vendorSelectEvent($event)"
                              v-model="formData.vendor"
                              :options="vendors"
                              :settings="{
                                placeholder: 'Select Vendor',
                                allowClear: true
                              }"
                              :class="{
                                'input-border-errors':
                                  $v.formData.vendor.$dirty &&
                                  !$v.formData.vendor.required
                              }"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="col-sm-3">
                        <div class="row">
                          <div class="form-group">
                            <label for="server" class="control-label"
                              >Server<span>*</span></label
                            >
                            <Select2
                              @select="serverSelectEvent($event)"
                              v-model="formData.server"
                              :options="servers"
                              :settings="{
                                placeholder: 'Select Server',
                                allowClear: true
                              }"
                              :class="{
                                'input-border-errors':
                                  $v.formData.server.$dirty &&
                                  !$v.formData.server.required
                              }"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-3">
                        <div class="row">
                          <div class="form-group">
                            <label for="image" class="control-label"
                              >OS<span>*</span></label
                            >
                            <Select2
                              v-model="formData.image"
                              :options="images"
                              :settings="{
                                placeholder: 'Select Image',
                                allowClear: true
                              }"
                              :class="{
                                'input-border-errors':
                                  $v.formData.image.$dirty &&
                                  !$v.formData.image.required
                              }"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-3">
                        <div class="row">
                          <div class="form-group">
                            <label for="amount">Title</label>
                            <input
                              v-model="formData.name"
                              type="text"
                              class="form-control"
                              placeholder="Server Name"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-12">
                        <div class="row">
                          <div class="form-group">
                            <p>Price: £<span>{{ formData.amount }}</span>/month</p>
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
                              Create
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
        vendor: null,
        server: null,
        amount: 0.00,
        image: null,
        name: 'Default'
      },
      vendors: [],
      images: [],
      servers: [],
      disableSubmitBtn: false
    };
  },
  mounted() {
    document.title = this.$router.app._route.meta.pageTitle;
    this.getVendors();
    this.loader = false;
  },
  methods: {
    async getVendors() {
      const $this = this;
      const data = $this.$store.dispatch("getHttp", {
        url: "vendors"
      });
      await data.then((response) => {
        if (typeof response !== "undefined") {
          let v = response.data.data;
          this.vendors = []
          v.forEach(i => {
            this.vendors.push(
              {
                id: i.id,
                text: i.name
              },
            )
          });
        }
      });
    },

    async getServers(vendor_id) {
      const $this = this;
      const data = $this.$store.dispatch("getHttp", {
        url: "/servers?vendor_id=" + vendor_id
      });
      await data.then((response) => {
        if (typeof response !== "undefined") {
          let v = response.data.data;
          this.servers = []
          v.forEach(i => {
            this.servers.push(
              {
                id: i.id,
                text: i.name,
                price: i.cost
              },
            )
          });
        }
      });
    },

    async getImages() {
      const $this = this;
      const currnecy = $this.$store.dispatch("getHttp", {
        url: "images"
      });
      await currnecy.then((response) => {
        if (typeof response !== "undefined") {
          let v = response.data.data;
          this.images = []
          v.forEach(i => {
            this.images.push(
              {
                id: i.id,
                text: i.name,
              },
            )
          });
        }
      });
    },

    vendorSelectEvent(event) {
      this.getServers(event.id)
    },

    serverSelectEvent(event) {
      this.formData.amount = event.price
      this.getImages(event.id)
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
        url: "/server/user/new/"+this.formData.server,
        formDetails: this.formData,
        formEvent: event.target
      });
      await data.then(function(response) {
        if (typeof response !== "undefined") {
          $this.$store.dispatch("displayMessageErrors", {
            response: response,
            formEvent: event.target
          });
          $this.$router.push({ path: "/servers" });
          $this.$v.$reset();
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
    // getAmOfBrand() {
    //   const $this = this;
    //   $this.formData.am_id = null;
    //   if ($this.formData.brand_id) {
    //     $this.getProjectAms($this.formData.brand_id);
    //   } else {
    //     $this.ams_options = null;
    //   }
    // }
  },
  validations: {
    formData: {
      vendor: {
        required
      },
      server: {
        required
      },
      image: {
        required
      },
      amount: {
        required
      },
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
