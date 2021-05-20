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
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-6">
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
            </div>
          </div>
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
import norecordfound from "../../../../components/no-record-found";
export default {
  components: {
    "no-record-found": norecordfound
  },
  computed: {},
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
      projectFilesThumbView: {}
    };
  },
  mounted() {
    this.getProjectMessages();
  },
  methods: {
    refreshProjectMessages() {
      this.getProjectMessages();
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
