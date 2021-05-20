<template>
  <header class="navigation-top">
    <div class="col-sm-12">
      <div class="row">
        <!-- Logo  -->
        <div class="col-xl-2 col-lg-2 col-md-3 col-sm-3 col-4">
          <div class="logo">
            <router-link
              :to="{
                path: '/home'
              }"
              tag="a"
            >
              <img src="/images/pnc-workbench-log.png" />
            </router-link>
          </div>
        </div>
        <!-- Mobile Nav Button  -->
        <div
          class="col-xl-8 col-lg-8 col-md-5 col-sm-5 col-4 d-md-block d-sm-block d-xs-block d-lg-none d-xl-none"
        >
          <div class="row">
            <div class="mobile-btn-menu text-center">
              <button
                @click="isShow = !isShow"
                class="navbar-toggler mobile-menu-btn"
                type="button"
              >
                Menu <i class="fas fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
        <!-- Desktop Nav  -->
        <div
          class="col-xl-8 col-lg-8 col-md-4 col-sm-4 col-4 d-none d-lg-block d-xl-block"
        >
          <div class="top-navigation-center">
            <ul class="nav justify-content-center">
              <li class="nav-item">
                <router-link
                  class="nav-link active"
                  :to="{
                    path: '/home'
                  }"
                  tag="a"
                >
                  <span class="icon-home"></span> Home
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  :to="{
                    path: '/employees'
                  }"
                  tag="a"
                >
                  <span class="icon-empoyees"></span> Employee
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link active"
                  :to="{
                    path: '/clients'
                  }"
                  tag="a"
                >
                  <span class="icon-clients"></span> Clients
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  :to="{
                    path: '/projects'
                  }"
                  tag="a"
                >
                  <span class="icon-projucts"></span> Projects
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  :to="{
                    path: '/invoices'
                  }"
                  tag="a"
                >
                  <span class="icon-invoices"></span> Invoices
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link "
                  :to="{
                    path: '/messages'
                  }"
                  tag="a"
                >
                  <span class="icon-messages"></span> Messages
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link "
                  :to="{
                    path: '/all-notifications'
                  }"
                  tag="a"
                >
                  <span class="fas fa-bell"></span> Notifications
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link "
                  :to="{
                    path: '/leads'
                  }"
                  tag="a"
                >
                  <span class="fa-crosshairs fa-fw fa"></span> Leads
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <!-- Notification Start -->
        <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-4">
          <div class="top-right text-right">
            <notification></notification>
            <settingsNav></settingsNav>
          </div>
        </div>
        <!-- Mobile Nav  -->
        <div
          class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 d-md-block d-sm-block d-xs-block d-lg-none d-xl-none"
        >
          <div class="container">
            <div class="">
              <transition name="fade">
                <div
                  v-if="isShow"
                  class="top-navigation-center Mobile-navigation"
                >
                  <ul class="nav justify-content-center">
                    <li class="nav-item">
                      <router-link
                        class="nav-link active"
                        :to="{
                          path: '/home'
                        }"
                        tag="a"
                      >
                        <span class="icon-home"></span> Home
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link
                        class="nav-link"
                        :to="{
                          path: '/employees'
                        }"
                        tag="a"
                      >
                        <span class="icon-empoyees"></span> Employee
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link
                        class="nav-link active"
                        :to="{
                          path: '/clients'
                        }"
                        tag="a"
                      >
                        <span class="icon-clients"></span> Clients
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link
                        class="nav-link active"
                        :to="{
                          path: '/projects'
                        }"
                        tag="a"
                      >
                        <span class="icon-projucts"></span> Projects
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link
                        class="nav-link active"
                        :to="{
                          path: '/invoices'
                        }"
                        tag="a"
                      >
                        <span class="icon-invoices"></span> Invoices
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link
                        class="nav-link active"
                        :to="{
                          path: '/messages'
                        }"
                        tag="a"
                      >
                        <span class="icon-messages"></span> Messages
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link
                        class="nav-link "
                        :to="{
                          path: '/all-notifications'
                        }"
                        tag="a"
                      >
                        <span class="fa-crosshairs fa-fw fa"></span> Notifications
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link
                        class="nav-link "
                        :to="{
                          path: '/leads'
                        }"
                        tag="a"
                      >
                        <span class="fas fa-bell"></span> Leads
                      </router-link>
                    </li>
                  </ul>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import notificationComponent from "../notification";
import settingsNav from "../settings-nav";

export default {
  data() {
    return {
      pre: "",
      homepre: "",
      isShow: false
    };
  },
  components: {
    notification: notificationComponent,
    settingsNav: settingsNav
  },
  computed: {
    getActiveUserData() {
      return this.$store.state.auth;
    }
  },
  methods: {
    logOutSection() {
      this.$store.dispatch("logOutSection");
    }
  }
};
</script>

<style lang="scss" scoped>
.Mobile-navigation {
  background: #fff;
  box-shadow: 0 0 10px #00000029;
  border-radius: 10px;
  padding: 10px 15px;
  ul {
    li {
      display: block;
      width: 100%;
      border-bottom: 1px solid #ebebeb;
      a {
        font-size: 13px;
      }
    }
  }
}
.mobile-btn-menu.text-center {
  width: 100%;
}

// Small devices (landscape phones, 576px and up)
@media (max-width: 575px) {
  .mobile-btn-menu.text-center {
    padding: 10px 0;
    width: 100%;
    button {
      font-size: 16px;
    }
  }
  body header .top-right .dropdown button {
    width: 30px;
    height: 30px;
  }
  body header .top-right .dropdown .dropdown-menu.prof-len {
    width: 270px;
  }
  body header .top-right .dropdown .dropdown-menu.not-len {
    width: 240px;
    padding: 15px 10px 10px;
  }
  body
    header
    .top-right
    .dropdown
    .dropdown-menu
    .not-groups
    .notifications-listing
    .list-group-flush
    li.list-group-item
    .media
    h6 {
    line-height: 21px;
    font-size: 14px;
  }
  body
    header
    .top-right
    .dropdown
    .dropdown-menu
    .not-groups
    .notifications-listing
    .list-group-flush
    li.list-group-item
    .media
    p {
    font-size: 13px;
  }
  body
    header
    .top-right
    .dropdown
    .dropdown-menu
    .not-groups
    .notifications-listing
    .list-group-flush
    li.list-group-item
    .media
    .vue-avatar--wrapper.mr-3 {
    width: 35px !important;
    height: 35px !important;
    font-size: 12px !important;
    margin-right: 10px !important;
  }
  body {
    header {
      .logo {
        img {
          width: 76px;
        }
      }
    }
  }
}

@media (min-width: 576px) {
  .mobile-btn-menu.text-center {
    padding: 14px 0;
  }
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
  .mobile-btn-menu.text-center {
    padding: 14px 0;
  }
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
}
</style>
