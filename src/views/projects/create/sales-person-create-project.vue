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
      <div v-else key="2" class="white-row">
        <div class="show-project-portal-listing">
          <!-- Create Project Form  -->
          <div class="form-area">
            <div class="col-sm-12">
              <div class="row">
                <div class="col-sm-12">
                  <div class="row top-gen-heading">
                    <h1 class="global-style-heading">
                      Create Projects
                    </h1>
                  </div>
                </div>
                <div class="col-sm-12">
                  <form
                    class="project-form"
                    v-on:submit.prevent="onSubmit($event)"
                  >
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="row">
                          <div class="form-group">
                            <label for="email"
                              >Project Name: <span>*</span></label
                            >
                            <input
                              v-model="formData.project_name"
                              type="text"
                              class="form-control"
                              placeholder="Project Name"
                              :class="{
                                'input-border-errors':
                                  $v.formData.project_name.$dirty &&
                                  !$v.formData.project_name.required
                              }"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="row">
                          <div class="form-group">
                            <label for="gender" class="control-label"
                              >Select Brands<span>*</span></label
                            >
                            <Select2
                              v-model="formData.brand_id"
                              @change="getAmOfBrand"
                              :options="brand_options"
                              :settings="{ placeholder: 'Select Brands' }"
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
                              >Select Account Manager <span>*</span>
                            </label>
                            <Select2
                              v-model="formData.am_id"
                              @change="getAmClients"
                              :options="ams_options"
                              :settings="{
                                placeholder: 'Select Account Manager',
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
                      <div class="col-sm-6">
                        <div class="row">
                          <div class="form-group">
                            <label for="gender" class="control-label"
                              >Project Client</label
                            >
                            <Select2
                              v-model="formData.client_id"
                              :options="client_options"
                              :settings="{
                                placeholder: 'Project Client',
                                multiple: true
                              }"
                              :class="{
                                'input-border-errors':
                                  $v.formData.client_id.$dirty &&
                                  !$v.formData.client_id.required
                              }"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="row">
                          <div class="form-group">
                            <label for="gender" class="control-label"
                              >Project Category</label
                            >
                            <Select2
                              v-model="formData.category_id"
                              :options="cat_options"
                              :settings="{ placeholder: 'Project Category' }"
                              :class="{
                                'input-border-errors':
                                  $v.formData.category_id.$dirty &&
                                  !$v.formData.category_id.required
                              }"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="row">
                          <div class="form-group">
                            <label for="gender" class="control-label"
                              >Select Project Status*</label
                            >
                            <Select2
                              v-model="formData.project_status"
                              :options="status_options"
                              :settings="{
                                placeholder: 'Select Project Status*'
                              }"
                              :class="{
                                'input-border-errors':
                                  $v.formData.project_status.$dirty &&
                                  !$v.formData.project_status.required
                              }"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="row">
                          <div class="form-group">
                            <label for="gender" class="control-label"
                              >Add In House Team Member</label
                            >
                            <Select2
                              v-model="formData.in_house_team_member"
                              :options="inhouse_team_options"
                              :settings="{
                                placeholder: 'Add In House Team Member',
                                multiple: true
                              }"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="row">
                          <div class="form-group">
                            <label for="email"
                              >Start Date: <span>*</span></label
                            >
                            <datepicker
                              :minimumView="'day'"
                              :maximumView="'month'"
                              :initialView="'month'"
                              v-model="formData.start_date"
                              :class="{
                                'input-border-errors':
                                  $v.formData.start_date.$dirty &&
                                  !$v.formData.start_date.required
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
                      <div class="col-sm-6">
                        <div class="row">
                          <div class="form-group">
                            <label for="email">End Date: <span>*</span></label>
                            <datepicker
                              :minimumView="'day'"
                              :maximumView="'month'"
                              :initialView="'month'"
                              v-model="formData.end_date"
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
                      <div class="col-sm-12">
                        <div class="row">
                          <div class="form-group">
                            <label class="control-label">Package details</label>
                            <ckeditor
                              v-model="formData.project_summary"
                              :config="editorConfig"
                              :class="{
                                'input-border-errors':
                                  $v.formData.project_summary.$dirty &&
                                  !$v.formData.project_summary.required
                              }"
                            ></ckeditor>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-12">
                        <div class="row">
                          <div class="form-group">
                            <label for="email"
                              >Project Note: <span>*</span></label
                            >
                            <textarea
                              v-model="formData.project_note"
                              class="form-control"
                              placeholder="Project Note"
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
  components: {
    Select2,
    Datepicker
  },
  computed: {
    getActiveUserData() {
      return this.$store.state.auth;
    }
  },
  validations: {
    formData: {
      project_name: {
        required
      },
      brand_id: {
        required
      },
      am_id: {
        required
      },
      client_id: {
        required
      },
      category_id: {
        required
      },
      project_status: {
        required
      },
      start_date: {
        required
      },
      project_summary: {
        required
      }
    }
  },
  data() {
    return {
      loader: true,
      formData: {
        project_name: null,
        brand_id: null,
        am_id: null,
        client_id: null,
        category_id: null,
        project_status: null,
        in_house_team_member: null,
        start_date: null,
        end_date: null,
        project_summary: null,
        project_note: null,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
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
      disableSubmitBtn: false,
      editorConfig: {
        toolbarGroups: [
          { name: "document", groups: ["mode", "document", "doctools"] },
          { name: "basicstyles", groups: ["basicstyles", "cleanup"] },
          {
            name: "paragraph",
            groups: ["list", "indent", "blocks", "align", "bidi"]
          },
          { name: "links" },
          { name: "styles" },
          { name: "colors" },
          { name: "tools" },
          { name: "others" },
          { name: "about" }
        ],
        // The configuration of the editor.
        extraPlugins: "font"
      },
      brand_options: null,
      ams_options: null,
      client_options: null,
      cat_options: null,
      status_options: null,
      inhouse_team_options: null
    };
  },
  mounted() {
    document.title = this.$router.app._route.meta.pageTitle;
    this.getprojectbrands();
    this.getProjectCategory();
    this.getProjectStatusCategory();
    this.getProjectInhouseMembers();
    this.loader = false;
  },
  methods: {
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
        url: "projects/create",
        formDetails: this.formData,
        formEvent: event.target
      });
      await data.then(function(response) {
        if (typeof response !== "undefined") {
          $this.$store.dispatch("displayMessageErrors", {
            response: response,
            formEvent: event.target
          });
          $this.$router.push({ path: "/projects" });
          $this.disableSubmitBtn = false;
        }
      });
      $this.disableSubmitBtn = false;
    },
    async getprojectbrands() {
      const $this = this;
      const data = $this.$store.dispatch("getHttp", {
        url: "/filters/get-project-brand"
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
          $this.$store.dispatch("generalLoader", {
            response: false
          });
        }
      });
    },
    async getProjectClients(brandid, am_ids) {
      const $this = this;
      const data = $this.$store.dispatch("getHttp", {
        url: "/filters/get-clients?brand_id=" + brandid + "&am_id=" + am_ids
      });
      await data.then(function(response) {
        if (typeof response !== "undefined") {
          $this.client_options = response.data.data;
          $this.$store.dispatch("generalLoader", {
            response: false
          });
        }
      });
    },
    async getProjectCategory() {
      const $this = this;
      const data = $this.$store.dispatch("getHttp", {
        url: "/filters/get-project-category"
      });
      await data.then(function(response) {
        if (typeof response !== "undefined") {
          $this.cat_options = response.data.data;
        }
      });
    },
    async getProjectStatusCategory() {
      const $this = this;
      const data = $this.$store.dispatch("getHttp", {
        url: "/filters/get-project-status-category"
      });
      await data.then(function(response) {
        if (typeof response !== "undefined") {
          $this.status_options = response.data.data;
        }
      });
    },
    async getProjectInhouseMembers() {
      const $this = this;
      const data = $this.$store.dispatch("getHttp", {
        url: "/filters/get-inhouse-team-members"
      });
      await data.then(function(response) {
        if (typeof response !== "undefined") {
          $this.inhouse_team_options = response.data.data;
        }
      });
    },
    getAmOfBrand() {
      this.$store.dispatch("generalLoader", {
        response: true
      });
      const $this = this;
      $this.formData.am_id = null;
      $this.formData.client_id = null;
      if ($this.formData.brand_id) {
        $this.getProjectAms($this.formData.brand_id);
      } else {
        $this.ams_options = null;
      }
    },
    getAmClients() {
      this.$store.dispatch("generalLoader", {
        response: true
      });
      const $this = this;
      if ($this.formData.brand_id && $this.formData.am_id) {
        $this.getProjectClients($this.formData.brand_id, $this.formData.am_id);
      }
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
