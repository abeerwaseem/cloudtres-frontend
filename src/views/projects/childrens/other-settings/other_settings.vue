/* eslint-disable */
<template>
  <div class="project-invoice-section">
    <section class="project-status">
      <div v-if="project_status_loader" class="white-row loader-route">
        <div class="lds-sub-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div class="status-left-side">
            <h5 class="sub-heading">
              Project Status : {{ project_status_name }}
            </h5>
          </div>
        </div>
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div class="stauts-form form-area rel">
            <form
              class="project-status-form"
              v-on:submit.prevent="onUpdateStatus($event)"
            >
              <div class="row">
                <div class="col-sm-12">
                  <div class="form-group">
                    <label for="gender" class="control-label"></label>
                    <Select2
                      v-model="project_status_val"
                      :options="project_status_category"
                      :settings="{ placeholder: 'Update Status' }"
                    />
                  </div>
                </div>

                <div class="form-actions">
                  <button
                    :disabled="disableSubmitBtnProjectStatus"
                    type="submit"
                    id="save-form"
                    class="default-global-btn"
                  >
                    Update
                  </button>
                  <div
                    v-if="disableSubmitBtnProjectStatus"
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
            </form>
          </div>
        </div>
      </div>
    </section>
    <section class="project-member">
      <div v-if="project_member_loader" class="white-row loader-route">
        <div class="lds-sub-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div class="status-left-side">
            <h5 class="sub-heading">Project Members :</h5>
            <div class="">
              <div class="member-form form-area">
                <form
                  class="add-members-form"
                  v-on:submit.prevent="onAddProjectMembers($event)"
                >
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label for="gender" class="control-label"></label>
                        <Select2
                          v-model="project_member_option_val"
                          :options="project_member_options"
                          :settings="{
                            placeholder: 'Update Members',
                            multiple: true
                          }"
                          :class="{
                            'input-border-errors':
                              $v.project_member_option_val.$dirty &&
                              !$v.project_member_option_val.required
                          }"
                        />
                      </div>
                    </div>
                    <div class="form-actions">
                      <button
                        :disabled="disableSubmitBtnMem"
                        type="submit"
                        id="save-form"
                        class="default-global-btn"
                      >
                        Add Member
                      </button>
                      <div
                        v-if="disableSubmitBtnMem"
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
                </form>
              </div>
            </div>
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th>Member Name</th>
                    <th>Member Email</th>
                    <th class="text-right">Action</th>
                  </tr>
                </thead>
                <tbody
                  v-if="
                    typeof project_members.data !== 'undefined' &&
                      Object.keys(project_members.data).length
                  "
                >
                  <tr
                    v-for="(p_mem, pm_index) in project_members.data"
                    :key="pm_index"
                  >
                    <td>
                      {{ p_mem.name }}
                    </td>
                    <td>
                      <p class="invoice-total bold-cls">
                        {{ p_mem.email }}
                      </p>
                    </td>
                    <td>
                      <div class="download-box text-right">
                        <a
                          data-toggle="tooltip"
                          title="Delete!"
                          class="invoice-icon"
                          data-placement="top"
                          v-confirm="{
                            loader: true,
                            ok: dialog =>
                              onDeleteProjectMember(dialog, pm_index),
                            cancel: doNothing,
                            message: 'Are you sure? you want to remove.'
                          }"
                          href="#"
                        >
                          <p class="invoice-icon">
                            <i class="fas fa-times"></i>
                          </p>
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
                <tbody v-else>
                  <tr>
                    <td colspan="3">
                      No Record Found.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="project-am">
      <div v-if="project_am_loader" class="white-row loader-route">
        <div class="lds-sub-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div class="status-left-side">
            <h5 class="sub-heading">Project Accoun Manager :</h5>
            <div class="">
              <div class="stauts-form form-area">
                <form
                  class="am-form"
                  v-on:submit.prevent="onAddProjectAccountManager($event)"
                >
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label for="gender" class="control-label"></label>
                        <Select2
                          v-model="project_am_option_val"
                          :options="project_am_options"
                          :settings="{
                            placeholder: 'Add Account Manager',
                            multiple: true
                          }"
                          :class="{
                            'input-border-errors':
                              $v.project_am_option_val.$dirty &&
                              !$v.project_am_option_val.required
                          }"
                        />
                      </div>
                    </div>
                    <div class="form-actions">
                      <button
                        :disabled="disableSubmitBtnAm"
                        type="submit"
                        id="save-form"
                        class="default-global-btn"
                      >
                        Add AM
                      </button>
                      <div v-if="disableSubmitBtnAm" class="form_submit_loader">
                        <div class="lds-ellipsis">
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th>AM Name</th>
                    <th>AM Email</th>
                    <th class="text-right">Action</th>
                  </tr>
                </thead>
                <tbody
                  v-if="
                    typeof project_am.data !== 'undefined' &&
                      Object.keys(project_am.data).length
                  "
                >
                  <tr
                    v-for="(am_data, am_index) in project_am.data"
                    :key="am_index"
                  >
                    <td>
                      {{ am_data.name }}
                    </td>
                    <td>
                      <p class="invoice-total bold-cls">
                        {{ am_data.email }}
                      </p>
                    </td>
                    <td>
                      <div class="download-box text-right">
                        <a
                          data-toggle="tooltip"
                          title="Delete!"
                          class="invoice-icon"
                          data-placement="top"
                          v-confirm="{
                            loader: true,
                            ok: dialog =>
                              onDeleteAccountManager(dialog, am_index),
                            cancel: doNothing,
                            message: 'Are you sure, you want to delete ?'
                          }"
                          href="#"
                        >
                          <p class="invoice-icon">
                            <i class="fas fa-times"></i>
                          </p>
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
                <tbody v-else>
                  <tr>
                    <td colspan="3">
                      No Data Found.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="project-client">
      <div class="row">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div class="status-left-side">
            <h5 class="sub-heading">Project Client :</h5>
            <div class="">
              <div class="stauts-form form-area">
                <form
                  class="client-form"
                  v-on:submit.prevent="onAddProjectClient($event)"
                >
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label for="gender" class="control-label"></label>
                        <Select2
                          v-model="project_client_option_val"
                          :options="project_client_options"
                          :settings="{
                            placeholder: 'Add Client',
                            multiple: true
                          }"
                          :class="{
                            'input-border-errors':
                              $v.project_client_option_val.$dirty &&
                              !$v.project_client_option_val.required
                          }"
                        />
                      </div>
                    </div>
                    <div class="form-actions">
                      <button
                        :disabled="disableSubmitBtnClient"
                        type="submit"
                        id="save-form"
                        class="default-global-btn"
                      >
                        Add Client
                      </button>
                      <div
                        v-if="disableSubmitBtnClient"
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
                </form>
              </div>
            </div>
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th>Client Name</th>
                    <th>Client Email</th>
                    <th class="text-right">Action</th>
                  </tr>
                </thead>
                <tbody
                  v-if="
                    typeof project_client.data !== 'undefined' &&
                      Object.keys(project_client.data).length
                  "
                >
                  <tr
                    v-for="(client, cl_index) in project_client.data"
                    :key="cl_index"
                  >
                    <td>
                      {{ client.name }}
                    </td>
                    <td>
                      <p class="invoice-total bold-cls">
                        {{ client.email }}
                      </p>
                    </td>
                    <td>
                      <div class="download-box text-right">
                        <a
                          data-toggle="tooltip"
                          title="Delete!"
                          class="invoice-icon"
                          data-placement="top"
                          v-confirm="{
                            loader: true,
                            ok: dialog => onDeleteClient(dialog, cl_index),
                            cancel: doNothing,
                            message: 'Are you sure, you want to delete ?'
                          }"
                          href="#"
                        >
                          <p class="invoice-icon">
                            <i class="fas fa-times"></i>
                          </p>
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
                <tbody v-else>
                  <tr>
                    <td colspan="3">
                      Data Not Found.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

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
  name: "projects.tools",
  components: {
    Select2
  },
  computed: {},
  validations: {
    project_member_option_val: {
      required
    },
    project_am_option_val: {
      required
    },
    project_client_option_val: {
      required
    }
  },
  data() {
    return {
      disableSubmitBtnProjectStatus: false,
      disableSubmitBtnMem: false,
      disableSubmitBtnAm: false,
      disableSubmitBtn: false,
      project_id: this.$route.params.project_id,
      user_gender: [],

      project_status_category: null,
      project_status_val: null,

      project_status_name: null,
      project_status_loader: true,

      project_members: {},
      project_member_options: null,
      project_member_option_val: null,
      project_member_loader: true,

      project_am: {},
      project_am_options: null,
      project_am_option_val: null,
      project_am_loader: true,

      project_client: {},
      project_client_options: null,
      project_client_option_val: null,
      project_client_loader: true,
      disableSubmitBtnClient: false
    };
  },
  mounted() {
    this.getprojectstatuscategory();
    this.getprojectstatuscategoryData();
    this.getprojectmem();
    this.getprojectam();
    this.getprojectclient();
    this.getprojectmemberfileter();
    this.getprojectaccountmanagerfileter();
    this.getprojectclientfileter();
  },
  methods: {
    async onUpdateStatus(event) {
      const $this = this;
      $this.disableSubmitBtnProjectStatus = true;

      const data = $this.$store.dispatch("postHttp", {
        url: "projects/update-project-status/" + $this.$route.params.project_id,
        formDetails: { project_status: this.project_status_val },
        formEvent: event.target
      });
      await data.then(function(response) {
        if (typeof response !== "undefined") {
          $this.$store.dispatch("displayMessageErrors", {
            response: response,
            formEvent: event.target
          });
          $this.disableSubmitBtnProjectStatus = false;
        }
      });
      $this.disableSubmitBtnProjectStatus = false;
    },
    async getprojectstatuscategory() {
      const $this = this;
      const getProjectCats = $this.$store.dispatch("getHttp", {
        url: "/filters/get-project-status-category"
      });
      await getProjectCats.then(function(response) {
        if (typeof response !== "undefined") {
          $this.project_status_category = response.data.data;
        }
        $this.loader = false;
      });
    },
    async getprojectmemberfileter() {
      const $this = this;
      const getProjectMem = $this.$store.dispatch("getHttp", {
        url:
          "/filters/get-sales-team-for-members?project_id=" +
          $this.$route.params.project_id
      });
      await getProjectMem.then(function(response) {
        if (typeof response !== "undefined") {
          $this.project_member_options = response.data.data;
        }
      });
    },
    async onAddProjectMembers(event) {
      const $this = this;
      $this.disableSubmitBtnMem = true;
      $this.$v.project_member_option_val.$touch();

      if ($this.$v.project_member_option_val.$invalid) {
        $this.$store.dispatch("showtostrMessageNotifications", {
          message: "Please fill all the fields to proceed form!",
          type: "error"
        });
        $this.disableSubmitBtnMem = false;
        return;
      }

      const data = $this.$store.dispatch("postHttp", {
        url:
          "projects/update-project-members/" + $this.$route.params.project_id,
        formDetails: {
          project_members: $this.project_member_option_val,
          action: "add-member"
        },
        formEvent: event.target
      });
      await data.then(function(response) {
        if (typeof response !== "undefined") {
          $this.$store.dispatch("displayMessageErrors", {
            response: response,
            formEvent: event.target
          });
          $this.getprojectmem();
          $this.getprojectmemberfileter();
          $this.$v.project_member_option_val.$reset();
          $this.project_member_option_val = null;
          $this.disableSubmitBtnMem = false;
        }
      });
      $this.disableSubmitBtnMem = false;
    },
    async onDeleteProjectMember(dialog, dataDetails) {
      const $this = this;
      let member_id = this.project_members.data[dataDetails].id;
      const data = $this.$store.dispatch("postHttp", {
        url:
          "projects/update-project-members/" + $this.$route.params.project_id,
        formDetails: { project_members: member_id, action: "remove-member" },
        formEvent: ""
      });
      await data.then(function(response) {
        if (typeof response !== "undefined") {
          $this.$store.dispatch("showtostrMessageNotifications", {
            message: response.data.message,
            type: "success"
          });
          $this.project_member_option_val = null;
          $this.getprojectmem();
          $this.getprojectmemberfileter();
          $this.disableSubmitBtnMem = false;
        }
      });
      $this.disableSubmitBtnMem = false;
      dialog.close();
    },
    async getprojectaccountmanagerfileter() {
      const $this = this;
      const getProjectAms = $this.$store.dispatch("getHttp", {
        url:
          "/filters/update-project-am?project_id=" +
          this.$route.params.project_id
      });
      await getProjectAms.then(function(response) {
        if (typeof response !== "undefined") {
          $this.project_am_options = response.data.data;
        }
      });
    },
    async onAddProjectAccountManager(event) {
      const $this = this;
      $this.disableSubmitBtnAm = true;
      $this.$v.project_am_option_val.$touch();

      if ($this.$v.project_am_option_val.$invalid) {
        $this.$store.dispatch("showtostrMessageNotifications", {
          message: "Please fill all the fields to proceed form!",
          type: "error"
        });
        $this.disableSubmitBtnAm = false;
        return;
      }

      const data = $this.$store.dispatch("postHttp", {
        url: "projects/update-project-am/" + $this.$route.params.project_id,
        formDetails: {
          project_am: $this.project_am_option_val,
          action: "add-am"
        },
        formEvent: event.target
      });
      await data.then(function(response) {
        if (typeof response !== "undefined") {
          $this.$store.dispatch("displayMessageErrors", {
            response: response,
            formEvent: event.target
          });
          $this.getprojectam();
          $this.getprojectaccountmanagerfileter();
          $this.$v.project_am_option_val.$reset();
          $this.project_am_option_val = null;
          $this.disableSubmitBtnAm = false;
        }
      });
      $this.disableSubmitBtnMem = false;
    },
    async onDeleteAccountManager(dialog, dataDetails) {
      const $this = this;
      let am_id = this.project_am.data[dataDetails].id;
      console.log(am_id);
      const data = $this.$store.dispatch("postHttp", {
        url: "projects/update-project-am/" + $this.$route.params.project_id,
        formDetails: { project_am: am_id, action: "remove-am" },
        formEvent: ""
      });
      await data.then(function(response) {
        if (typeof response !== "undefined") {
          $this.$store.dispatch("showtostrMessageNotifications", {
            message: response.data.message,
            type: "success"
          });
          $this.project_am_option_val = null;
          $this.getprojectam();
          $this.getprojectaccountmanagerfileter();
        }
      });
      dialog.close();
    },
    async getprojectclientfileter() {
      const $this = this;
      const getProjectMem = $this.$store.dispatch("getHttp", {
        url:
          "/filters/get-project-clients?project_id=" +
          $this.$route.params.project_id
      });
      await getProjectMem.then(function(response) {
        if (typeof response !== "undefined") {
          $this.project_client_options = response.data.data;
        }
      });
    },
    async onAddProjectClient(event) {
      const $this = this;
      $this.disableSubmitBtnClient = true;
      $this.$v.project_client_option_val.$touch();

      if ($this.$v.project_client_option_val.$invalid) {
        $this.$store.dispatch("showtostrMessageNotifications", {
          message: "Please fill all the fields to proceed form!",
          type: "error"
        });
        $this.disableSubmitBtnClient = false;
        return;
      }

      const data = $this.$store.dispatch("postHttp", {
        url: "projects/update-project-client/" + $this.$route.params.project_id,
        formDetails: {
          project_client: $this.project_client_option_val,
          action: "add-client"
        },
        formEvent: event.target
      });
      await data.then(function(response) {
        if (typeof response !== "undefined") {
          $this.$store.dispatch("displayMessageErrors", {
            response: response,
            formEvent: event.target
          });
          $this.getprojectclient();
          $this.getprojectclientfileter();
          $this.$v.project_client_option_val.$reset();
          $this.project_client_option_val = null;
          $this.disableSubmitBtnClient = false;
        }
      });
      $this.disableSubmitBtnClient = false;
    },
    async onDeleteClient(dialog, dataDetails) {
      const $this = this;
      let client_id = this.project_client.data[dataDetails].id;
      const data = $this.$store.dispatch("postHttp", {
        url: "projects/update-project-client/" + $this.$route.params.project_id,
        formDetails: {
          project_client: client_id,
          action: "remove-client"
        },
        formEvent: ""
      });
      await data.then(function(response) {
        if (typeof response !== "undefined") {
          $this.$store.dispatch("showtostrMessageNotifications", {
            message: response.data.message,
            type: "success"
          });
          $this.project_client_option_val = null;
          $this.getprojectclient();
          $this.getprojectclientfileter();
        }
      });
      dialog.close();
    },
    async getprojectstatuscategoryData() {
      const $this = this;
      const getProjectCats = $this.$store.dispatch("getHttp", {
        url:
          "/projects/get-project-tools-data/" +
          this.$route.params.project_id +
          "?action=project_status"
      });
      await getProjectCats.then(function(response) {
        if (typeof response !== "undefined") {
          $this.project_status_val = response.data.data.id;
          $this.project_status_name = response.data.data.status_name;
          $this.project_status_loader = false;
        }
        $this.loader = false;
      });
    },
    async getprojectmem() {
      const $this = this;
      const getProjectCats = $this.$store.dispatch("getHttp", {
        url:
          "/projects/get-project-tools-data/" +
          this.$route.params.project_id +
          "?action=project_mem"
      });
      await getProjectCats.then(function(response) {
        if (typeof response !== "undefined") {
          $this.project_members = response.data;
        }
        $this.project_member_loader = false;
      });
    },
    async getprojectam() {
      const $this = this;
      const getProjectCats = $this.$store.dispatch("getHttp", {
        url:
          "/projects/get-project-tools-data/" +
          this.$route.params.project_id +
          "?action=project_am"
      });
      await getProjectCats.then(function(response) {
        if (typeof response !== "undefined") {
          $this.project_am = response.data;
        }
        $this.project_am_loader = false;
      });
    },
    async getprojectclient() {
      const $this = this;
      const getProjectCats = $this.$store.dispatch("getHttp", {
        url:
          "/projects/get-project-tools-data/" +
          this.$route.params.project_id +
          "?action=project_client"
      });
      await getProjectCats.then(function(response) {
        if (typeof response !== "undefined") {
          $this.project_client = response.data;
        }
        $this.project_client_loader = false;
      });
    },
    doNothing: function() {
      // Do nothing or some other stuffs
    }
  }
};
</script>
<style lang="scss" scoped>
body .form-area .form-group {
  padding: 0 0 18px;
}
section {
  position: relative;
  padding: 25px 0;
  border-bottom: 1px solid #ebebeb;
  .white-row.loader-route {
    top: 0;
    position: absolute;
    z-index: 99;
    width: 100%;
    height: 100%;
    .lds-sub-ripple {
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  &.project-status {
    padding-top: 10px;
  }
  &.project-member {
    padding-bottom: 0;
    h4 {
      padding: 0;
    }
    .table-responsive {
      padding-top: 25px;
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
  &.project-am {
    padding-bottom: 0;
    h4 {
      padding: 0;
    }
    .table-responsive {
      padding-top: 25px;
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
  &.project-client {
    padding-bottom: 0;
    h4 {
      padding: 0;
    }
    .table-responsive {
      padding-top: 25px;
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

  .pagination {
    padding-top: 30px;
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
}

// Extra large devices (xl, 1200px and up)
@media (min-width: 1200) {
}
</style>
