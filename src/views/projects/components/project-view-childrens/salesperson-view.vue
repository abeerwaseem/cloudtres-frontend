<template>
  <div class="viewDashBoard project-show">
    <div class="container">
      <div class="white-row">
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

          <div key="2" v-else class="project-show-details">
            <div
              class="project-wrapper"
              v-if="
                typeof project !== 'undefined' && Object.keys(project).length
              "
            >
              <div class="main-title-header">
                <div class="row">
                  <div class="col-sm-9">
                    <h4>
                      Project #{{ project.id }} -
                      <span>
                        {{ project.project_name }}
                      </span>
                    </h4>
                  </div>
                  <div class="col-sm-3">
                    <div class="top-date text-right">
                      <p>{{ project.created_at }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="project-nav-area">
                <nav>
                  <ul>
                    <router-link :to="{ name: 'projects.overview' }" tag="li">
                      Overview
                    </router-link>
                    <router-link :to="{ name: 'projects.files' }" tag="li">
                      Files
                    </router-link>
                    <router-link
                      :to="{
                        path:
                          '/projects/show/' +
                          this.$route.params.project_id +
                          '/invoices'
                      }"
                      tag="li"
                    >
                      Invoices
                    </router-link>
                    <router-link :to="{ name: 'projects.messages' }" tag="li">
                      Messages
                    </router-link>
                    <router-link
                      :to="{ name: 'projects.others.settings' }"
                      tag="li"
                    >
                      Tools
                    </router-link>
                  </ul>
                </nav>
              </div>
              <div class="project-content-area">
                <div v-if="displaySubChildren" class="inner-Router">
                  <router-view :key="$route.fullPath"></router-view>
                </div>
              </div>
            </div>
            <div v-else class="">
              No Record Found!
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  computed: {
    getActiveUserData() {
      return this.$store.state.auth;
    }
  },
  data() {
    return {
      loader: true,
      displaySubChildren: false,
      project: {}
    };
  },
  mounted() {
    document.title = this.$router.app._route.meta.pageTitle;
    this.getProject();
  },
  methods: {
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
    async getProject() {
      const $this = this;
      const getProducts = $this.$store.dispatch("getHttp", {
        url:
          "/projects/show/" +
          this.$route.params.project_id +
          "?timezone=" +
          Intl.DateTimeFormat().resolvedOptions().timeZone
      });
      await getProducts.then(function(response) {
        if (typeof response !== "undefined") {
          $this.project = response.data.data;
          $this.displaySubChildren = true;
        }
        $this.loader = false;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
body .white-row.loader-route {
  top: 0 !important;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-property: height, opacity;
  transition-timing-function: ease;
  overflow: hidden;
}
.project-show {
  .project-nav-area {
    nav {
      ul {
        margin: 0;
        text-decoration: none;
        padding: 0;
        list-style: none;
        border-bottom: 2px solid #ebebeb;
        li {
          display: inline-grid;
          padding: 5px 30px 5px 0;
          position: relative;
          cursor: pointer;
          &:after {
            content: "";
            display: inline-block;
            height: 0;
            width: 100%;
            position: relative;
            bottom: -7px;
            left: 0px;
            border: 1px solid transparent;
          }
          &.router-link-exact-active {
            &:after {
              border: 1px solid #3fae2a;
            }
          }
        }
      }
    }
  }
  .main-title-header {
    padding: 0 0 30px;
    h4 {
      margin: 0;
      padding: 0;
      letter-spacing: 0px;
      color: #313f53;
      font-weight: 400;
      font-size: 24px;
      span {
        font-weight: bold;
      }
    }
    .top-date {
      p {
        margin: 0;
        padding: 6px 0 0;
        letter-spacing: 0.28px;
        color: #2a1c0b;
      }
    }
  }
  .project-content-area {
    padding: 30px 0 0px;
  }
}
// Extra large devices (lg and less)
@media screen and (max-width: 1199px) {
}
// Extra large devices (md and less)
@media screen and (max-width: 991px) {
  .project-show .main-title-header h4 {
    font-size: 20px;
    line-height: 30px;
  }
  .project-show .project-nav-area nav ul li {
    padding: 5px 30px 11px 0;
    font-size: 13px;
  }
}

// Extra large devices (sm and up)
@media screen and (max-width: 767px) {
  .project-show .main-title-header h4 {
    font-size: 17px;
    line-height: 27px;
  }
}

// Extra large devices (xs and up)
@media screen and (max-width: 575px) {
  .project-show .main-title-header h4 {
    font-size: 16px;
    line-height: 27px;
  }
  .project-show .main-title-header .top-date p {
    text-align: left;
  }
  .project-show .main-title-header {
    padding: 0 0 20px;
    border-bottom: 2px solid #ebebeb;
    margin-bottom: 20px;
  }
  .project-show .project-nav-area nav ul li {
    padding: 0 0 8px 0;
    font-size: 13px;
    display: block;
  }
  .project-show .project-nav-area nav ul li:after {
    content: "";
    display: inline-block;
    height: 0;
    width: 100%;
    position: relative;
    bottom: 0;
    left: 0px;
    border: 1px solid transparent;
  }
  .project-show .project-content-area {
    padding: 0 0 0px;
  }
}

// Extra large devices (xl, 1200px and up)
@media (min-width: 1200) {
}
</style>
