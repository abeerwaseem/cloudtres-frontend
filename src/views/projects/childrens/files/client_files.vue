<template>
  <div class="project-files-tb">
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
      <div v-else key="2" class="file-wrapper">
        <section class="upload-file-form-area">
          <h4 class="general-sub-heading">Upload File</h4>
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
        </section>
        <section class="file-listing">
          <div class="top-area">
            <div class="row">
              <div class="col-xl-8 col-lg-8 col-md-6 col-sm-6">
                <div class="">
                  <h4 class="general-sub-heading">
                    All Files
                    <a
                      @click.prevent="refreshProjectFiles"
                      href=""
                      class="refreshData"
                      ><i class="fas fa-redo-alt"></i
                    ></a>
                  </h4>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div class="general-filters form-area">
                  <div class="col-sm-12">
                    <form>
                      <div class="row">
                        <div class="form-group serach-form">
                          <label for="gender" class="control-label"
                            >&nbsp;</label
                          >
                          <div class="input-group">
                            <input
                              v-model="formData.search"
                              type="text"
                              class="form-control"
                              placeholder="Search..."
                              @keyup="getProjectFiles(1, 'search')"
                            />
                            <div class="input-group-append">
                              <button class="btn btn-secondary" type="button">
                                <i class="fa fa-search"></i>
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
          </div>
        </section>
        <section class="files-listing">
          <div
            class="row"
            v-if="
              typeof project_files.data !== 'undefined' &&
                Object.keys(project_files.data).length
            "
          >
            <div v-if="loadMoreLoader" class="white-row loader-route">
              <div class="lds-sub-ripple">
                <div></div>
                <div></div>
              </div>
            </div>

            <div
              v-for="(file, file_index) in project_files.data"
              :key="file_index"
              class="col-xl-3 col-lg-3 col-md-4 col-sm-6"
            >
              <div class="file-listing-wrapper">
                <div class="file-box">
                  <div class="img-box">
                    <img
                      v-if="file.image_ext == 'zip'"
                      v-lazy="global_image_url"
                    />
                    <img v-else-if="file.image_ext == 'psd'" v-lazy="psd_url" />
                    <img
                      v-else-if="
                        file.image_ext == 'odt' || file.image_ext == 'docx'
                      "
                      v-lazy="doc_file_url"
                    />
                    <img
                      v-else-if="file.image_ext == 'xlsx'"
                      v-lazy="excel_file_url"
                    />
                    <img v-else v-lazy="file.image_url" />
                  </div>
                  <div class="icons-wrap">
                    <div class="icons-bar">
                      <a target="_blank" :href="file.image_url"
                        ><i class="fas fa-eye"></i
                      ></a>
                    </div>
                  </div>
                </div>
                <div class="file-details-box">
                  <h5>
                    <a target="_blank" :href="file.image_url">{{
                      file.filename
                    }}</a>
                  </h5>
                  <p>
                    {{ file.id }}Added by {{ file.user_name }} about
                    {{ file.created_at }} {{ file.size }}KB
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <no-record-found></no-record-found>
          </div>
          <div
            class="row"
            v-if="
              typeof project_files.data !== 'undefined' &&
                Object.keys(project_files.data).length
            "
          >
            <div v-if="disable_pagination" class="col-sm-12">
              <div class="loadMoreBtn">
                <a
                  @click.prevent="getProjectFiles(next_page, 'loadmore')"
                  href="#"
                  >More....</a
                >
              </div>
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
import norecordfound from "../../../../components/no-record-found";

export default {
  components: {
    Dropzone,
    "no-record-found": norecordfound
  },
  computed: {},
  data() {
    return {
      project_files: {},
      loadMoreLoader: false,
      disable_pagination: false,
      next_page: null,
      loader: true,
      updateListDataView: false,
      refreshThumbData: false,
      doc_file_url: "https://s3-us-west-2.amazonaws.com/www.pncworkbench.com/pncworkbenchlogo/file_doc.png",
      excel_file_url: "https://s3-us-west-2.amazonaws.com/www.pncworkbench.com/pncworkbenchlogo/excel.png",
      global_image_url: "https://s3-us-west-2.amazonaws.com/www.pncworkbench.com/pncworkbenchlogo/archive.png",
      psd_url: "https://s3-us-west-2.amazonaws.com/www.pncworkbench.com/pncworkbenchlogo/psd.png",
      roleurl: "https://pncworkbench.com",
      projectFilesThumbView: {},
      options: {
        addRemoveLinks: true,
        autoProcessQueue: true,
        parallelUploads: 100000,
        timeout: 15000000,
        paramName: "file",
        maxFilesize: 5000,
        uploadMultiple: true,
        withCredentials: true,
        url: window.api_homeurl + "/files/" + this.$route.params.project_id
      },
      formData: {
        search: ""
      }
    };
  },
  mounted() {
    this.getProjectFiles();
  },
  methods: {
    refreshProjectFiles() {
      this.getProjectFiles();
    },
    async getProjectFiles(page = 1, action = null) {
      const $this = this;
      $this.loadMoreLoader = true;
      if (action == "search") {
        if ($this.formData.search.length < 2 && $this.formData.search != "") {
          $this.loadMoreLoader = false;
          return true;
        }
      }
      const getProducts = $this.$store.dispatch("getHttp", {
        url:
          "files/get-project-files-data/" +
          this.$route.params.project_id +
          "?" +
          "&page=" +
          page +
          "&search=" +
          $this.formData.search +
          "&timezone=" +
          Intl.DateTimeFormat().resolvedOptions().timeZone
      });
      await getProducts.then(function(response) {
        if (typeof response !== "undefined") {
          if (response.data.links.next != null) {
            var url = new URL(response.data.links.next);
          } else {
            url = "";
          }

          if (
            response.data.meta.current_page !== response.data.meta.last_page
          ) {
            $this.disable_pagination = true;
            $this.next_page = url.searchParams.get("page");
          } else {
            $this.disable_pagination = false;
            $this.next_page = null;
          }

          if (action == "loadmore") {
            Object.keys(response.data.data).forEach(function(key) {
              $this.project_files.data.push(response.data.data[key]);
            });
          } else {
            $this.project_files = response.data;
          }
        }
        $this.loadMoreLoader = false;
        $this.loader = false;
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
    },
    updateListVal() {
      this.updateListDataView = false;
    },
    updateThumbVal() {
      this.refreshThumbData = false;
    },
    reFreshBothLists() {
      // this.updateListDataView = true;
      // this.refreshThumbData = true;
    },
    showtostrMessages(message, type) {
      this.$toastr("add", {
        msg: message, // Message
        timeout: 3000, // Timeout in ms
        position: "toast-top-right", // Toastr position
        type: type // Toastr type
      });
    },
    sendingEvent(file, xhr, formData) {},
    successEvent(file, response) {},
    multipleUploadComplete(files, response) {
      const $this = this;
      $this.$store.dispatch("showtostrMessageNotifications", {
        message: response.message,
        type: response.status
      });
      $this.getProjectFiles("1");
      files.forEach(function(file) {
        file.previewElement.remove();
      });
      $(".dropzone").removeClass("dz-started");
    },
    multipleServerError(files, response) {
      const $this = this;
      $this.$store.dispatch("showtostrMessageNotifications", {
        message: response.message,
        type: "error"
      });
      // $this.$store.dispatch("showtostrMessageNotifications", {
      //   message: response.errors.file[0],
      //   type : 'error',
      // });
    },
    errorEvent(file, errorMessage, xhr) {}
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
.top-area {
  padding-bottom: 15px;
  .general-filters {
    .form-group {
      padding: 0;
    }
  }
}
section {
  padding: 25px 0;
  border-bottom: 1px solid #ebebeb;
  &.upload-file-form-area {
    padding-top: 0;
    padding-bottom: 40px;
  }
  &.file-listing {
    padding-bottom: 0;
    border-bottom: none;
  }
  &.files-listing {
    padding-top: 10px;
    position: relative;
    .white-row.loader-route {
      position: absolute !important;
      width: 100%;
      z-index: 9;
      height: 100% !important;
      .lds-sub-ripple {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .file-listing-wrapper {
      text-align: center;
      padding-bottom: 25px;
      .file-box {
        border: 1px solid #ece9df;
        border-radius: 10px;
        height: 210px;
        max-width: 100%;
        position: relative;
        display: table;
        width: 100%;
        padding: 15px;
        max-height: 210px;
        overflow: hidden;
        .img-box {
          display: table-cell;
          vertical-align: middle;
          img {
            width: 85%;
          }
        }
        .icons-wrap {
          position: absolute;
          top: 5px;
          z-index: 3;
          width: 54px;
          right: 6px;
          .icons-bar {
            display: inline-block;
            margin-left: 8px;
            a {
              color: #323f54;
              svg {
                cursor: pointer;
              }
              &:hover {
                svg {
                  color: #3fae2a;
                }
              }
            }
          }
        }
      }
      .file-details-box {
        padding: 0 25px;
        h5 {
          letter-spacing: 0.28px;
          color: #323f54;
          font-size: 14px;
          margin: 0;
          line-height: 23px;
          font-weight: bold;
          padding: 20px 0 10px;
          a {
            color: #323f54;
            word-break: break-word;
            &:hover {
              color: #3fae2a;
            }
          }
        }
        p {
          display: -webkit-box;
          max-width: 100%;
          height: 41px;
          margin: 0 auto;
          line-height: 1;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          line-height: 20px;
          letter-spacing: 0.24px;
          color: #2a1c0b;
          font-size: 12px;
        }
      }
    }
    .loadMoreBtn {
      a {
        text-decoration: none;
        letter-spacing: 0.28px;
        color: #35c465;
        line-height: 20px;
      }
    }
  }
}
</style>
