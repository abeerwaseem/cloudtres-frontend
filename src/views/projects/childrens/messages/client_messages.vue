<template>
  <div class="project-files-tb" v-cloak>
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
      <div key="2" v-else class="project-messages-wrapper">
        <section class="messages-heading-top">
          <div class="top-area">
            <div class="row">
              <div class="col-xl-8 col-lg-8 col-md-8 col-sm-6">
                <div class="">
                  <h4 class="general-sub-heading">
                    Messages
                    <a
                      @click.prevent="refreshProjectMessages"
                      href=""
                      class="refreshData"
                      ><i class="fas fa-redo-alt"></i
                    ></a>
                  </h4>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                <div class="general-filters form-area text-right">
                  <button
                    @click="showHideMessageModel"
                    class="btn btn-primary default-global-btn"
                  >
                    Create a New Thread
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="upload-file-form-area">
          <transition name="slide">
            <form
              v-on:submit.prevent="onSubmit($event)"
              class="main-thread-message-form"
              enctype="multipart/form-data"
              v-show="showMessageModel"
            >
              <div class="form-group">
                <label for="thread_title">Enter Thread Title</label>
                <input
                  type="text"
                  v-model="formData.thread_title"
                  class="form-control"
                  :class="{
                    'input-border-errors':
                      $v.formData.thread_title.$dirty &&
                      !$v.formData.thread_title.required
                  }"
                />
              </div>
              <div class="form-group">
                <label for="messagebody">Enter Thread Body</label>
                <ckeditor
                  v-model="formData.messagebody"
                  :config="editorConfig"
                  :class="{
                    'input-border-errors':
                      $v.formData.messagebody.$dirty &&
                      !$v.formData.messagebody.required
                  }"
                >
                </ckeditor>
              </div>
              <dropzone
                id="foo"
                ref="createPost"
                :options="options"
                v-on:vdropzone-sending="sendingEvent"
                v-on:vdropzone-success="successEvent"
                v-on:vdropzone-error="errorEvent"
                v-on:vdropzone-success-multiple="multipleUploadComplete"
                v-on:vdropzone-error-multiple="multipleServerError"
              >
              </dropzone>
              <div class="form-actions">
                <button
                  :disabled="disableSubmitBtn"
                  type="submit"
                  id="save-form"
                  class="btn btn-primary default-global-btn"
                >
                  Create Message
                </button>
                <div v-if="disableSubmitBtn" class="form_submit_loader">
                  <div class="lds-ellipsis">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
            </form>
          </transition>
        </section>
        <section class="thread-listing">
          <div
            class="message-thread-wrapper"
            v-if="
              typeof project_messages.data !== 'undefined' &&
                Object.keys(project_messages.data).length
            "
          >
            <div v-if="sub_loader" class="white-row loader-route subloader">
              <div class="lds-sub-ripple">
                <div></div>
                <div></div>
              </div>
            </div>
            <div
              v-for="(message, mes_index) in project_messages.data"
              :key="mes_index"
              class="thr-loop-row margin-top-20"
            >
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                  <div class="thrd-name">
                    <router-link
                      class="eclipse-para global-para-link2"
                      :to="{
                        path:
                          '/projects/show/' +
                          $route.params.project_id +
                          '/messages/show/' +
                          message.id
                      }"
                      tag="p"
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
          </div>
          <div class="message-thread-wrapper" v-else>
            <div class="thr-loop-row margin-top-20">
              <no-record-found></no-record-found>
            </div>
          </div>
        </section>
      </div>
    </transition>
  </div>
</template>

<script>
import Dropzone from "nuxt-dropzone";
import "nuxt-dropzone/dropzone.css";
import $ from "jquery";
import { validationMixin } from "vuelidate";
import norecordfound from "../../../../components/no-record-found";
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
    Dropzone,
    "no-record-found": norecordfound
  },
  computed: {},
  validations: {
    formData: {
      thread_title: {
        required
      },
      messagebody: {
        required
      }
    }
  },
  data() {
    return {
      sub_loader: true,
      project_messages: {},
      loader: true,
      threadListing: {},
      disableSubmitBtn: false,
      updateListDataView: false,
      refreshThumbData: false,
      doc_file_url: "https://pncworkbench.com/img/file_doc.png",
      excel_file_url: "https://pncworkbench.com/img/excel.png",
      global_image_url: "https://pncworkbench.com/img/archive.png",
      psd_url: "https://pncworkbench.com/img/psd.png",
      roleurl: "https://pncworkbench.com",
      pre: "",
      showMessageModel: false,
      projectFilesThumbView: {},
      formData: {
        thread_title: "",
        project_id: this.$route.params.project_id,
        messagebody: ""
      },
      editorData: "",
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
        extraPlugins: "font",
        disableNativeSpellChecker: false
      },
      options: {
        addRemoveLinks: true,
        autoProcessQueue: false,
        parallelUploads: 100000,
        timeout: 500000,
        maxFilesize: 500,
        uploadMultiple: true,
        withCredentials: true,
        url: window.api_homeurl + "/thread-message/store"
      }
    };
  },
  mounted() {
    this.getProjectMessages();
  },
  methods: {
    refreshProjectMessages() {
      this.getProjectMessages();
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
      if (this.$refs.createPost.dropzone.files.length > 0) {
        this.$refs.createPost.processQueue();
      } else {
        const data = $this.$store.dispatch("postHttp", {
          url: "thread-message/store",
          formDetails: this.formData,
          formEvent: event.target
        });
        await data.then(function(response) {
          if (typeof response !== "undefined") {
            $this.$store.dispatch("displayMessageErrors", {
              response: response,
              formEvent: event.target
            });
            $this.$router.push({
              path:
                "/projects/show/" +
                $this.$route.params.project_id +
                "/messages/show/" +
                response.data.thread_id
            });
            $this.disableSubmitBtn = false;
          }
        });
        $this.disableSubmitBtn = false;
      }
    },
    async getProjectMessages(page = 1, action = null) {
      const $this = this;
      $this.sub_loader = true;
      const getProducts = $this.$store.dispatch("getHttp", {
        url:
          "thread-message/get-project-messages-data/" +
          this.$route.params.project_id +
          "?" +
          "&timezone=" +
          Intl.DateTimeFormat().resolvedOptions().timeZone
      });
      await getProducts.then(function(response) {
        if (typeof response !== "undefined") {
          $this.project_messages = response.data;
        }
        $this.sub_loader = false;
        $this.loader = false;
      });
    },
    showHideMessageModel() {
      if (this.showMessageModel) {
        this.showMessageModel = false;
      } else {
        this.showMessageModel = true;
      }
    },
    sendingEvent(file, xhr, formData) {
      formData.append("messagebody", this.formData.messagebody);
      formData.append("thread_title", this.formData.thread_title);
      formData.append("project_id", this.formData.project_id);
    },
    successEvent(file, response) {},
    multipleUploadComplete(files, response) {
      const $this = this;
      $this.$store.dispatch("showtostrMessageNotifications", {
        message: response.message,
        type: response.status
      });
      $this.$router.push({
        path:
          "/projects/show/" +
          $this.$route.params.project_id +
          "/messages/show/" +
          response.thread_id
      });
      $this.disableSubmitBtn = false;
    },
    multipleServerError(files, response) {
      if (response.error) {
        this.showtostrMessages(response.error, "error");
      } else {
        this.showtostrMessages(response.message, "error");
        let $this = this;
        $.each(response.errors, function(key, value) {
          $this.displayErrors(key);
        });
      }
      this.disableSubmitBtn = false;
    },
    errorEvent(file, errorMessage, xhr) {
      file.status = "queued";
      return file.previewElement.classList.remove("dz-error");
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
.message-thread-wrapper {
  position: relative;
  .white-row.loader-route.subloader {
    position: absolute;
    z-index: 99999;
    top: 0;
    width: 100%;
    height: 100%;
  }
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
  &.upload-file-form-area {
    padding-top: 0;
    padding-bottom: 0;
  }
  &.messages-heading-top {
    border: none;
    padding-bottom: 10px;
    padding-top: 0;
    .top-area {
      padding-bottom: 10px;
      h4.general-sub-heading {
        line-height: 30px;
      }
    }
  }
  &.upload-file-form-area {
    .form-actions {
      padding-top: 20px;
      padding-bottom: 20px;
    }
  }
  &.thread-listing {
    border: none;
    padding-bottom: 0;
    padding-top: 0;
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
  }
}

.slide-enter-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}

.slide-leave-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to,
.slide-leave {
  max-height: 100px;
  overflow: hidden;
}

.slide-enter,
.slide-leave-to {
  overflow: hidden;
  max-height: 0;
}
</style>
