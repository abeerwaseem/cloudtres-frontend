/*global unescape, define */
<template>
  <div class="viewDashBoard" v-cloak>
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
      <div v-else class="dash-board-wrapper>">
        <!-- Invoice Section Area -->
        <div key="3" class="white-row invoices-tab">
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
            <div v-else key="2" class="invoice-wrapper-home">
              <h3 class="global-style-heading text-center">
                Under Maintenance
              </h3>
            </div>
          </transition>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
//you need to import the CSS manually (in case you want to override it)
import "vue2-daterange-picker/dist/vue2-daterange-picker.css";

export default {
  components: {},
  data() {
    return {
      disableSubmitBtn: false,
      loader: true
    };
  },
  mounted() {
    document.title =
      "PNC Work Bench - " + this.$router.app._route.meta.pageTitle;
    // Set The Date of Date Range picker on First Day of Month
    this.loader = false;
  },
  computed: {
    getActiveUserData() {
      return this.$store.state.auth;
    }
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
.viewDashBoard {
  .white-row {
    min-height: 220px;
    background: #fff;
    padding: 40px 33px 40px;
    box-shadow: 0 0 10px #00000029;
    border-radius: 10px;
    // Top Filter Css
    .filter-Calculation-Area {
      padding: 40px 15px 0;
      position: relative;
      .white-row.loader-route {
        z-index: 1;
        width: 100%;
        background: #fff;
        .lds-sub-ripple {
          position: relative;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .box-dash-wraper {
        width: 100%;
        padding: 0 9px 0 13px;
        margin-bottom: 15px;
        .box-dash {
          background: #faf9f7;
          padding: 20px 15px;
          p {
            margin: 0;
            &.txt {
              margin: 0;
              letter-spacing: 0.28px;
              color: #323f54;
              font-size: 14px;
              font-weight: bold;
              padding: 12px 0 15px;
            }
            &.numb {
              margin: 0;
              letter-spacing: 0.28px;
              color: #323f54;
              font-size: 28px;
              font-weight: bold;
              padding: 0;
            }
          }
          i,
          span,
          svg {
            color: #2d9cea;
            font-size: 23px;
            &:before {
              color: #2d9cea;
            }
          }
        }
      }
      .horizontal-row {
        padding: 30px 0 23px;
        hr {
          margin: 0;
        }
        &:after {
          content: "";
          display: block;
          clear: both;
        }
      }
      .currency-box-dash-wrapper {
        width: 100%;
        margin-bottom: 20px;
        .currency-box-dash {
          position: relative;
          background: #faf9f7;
          padding: 15px 20px 15px 45px;

          .wrap-icon {
            position: absolute;
            top: 23px;
            left: 15px;
            width: 26px;
            height: 26px;
            background: #3fae2a;
            color: #fff;
            border-radius: 50%;
            padding: 0 8px;
            font-size: 17px;
          }
          p {
            margin: 0;
            letter-spacing: 0.28px;
            color: #2a1c0b;
            &.txt {
              padding: 1px 0 1px 7px;
            }
            &.numb {
              width: 100%;
              letter-spacing: 0px;
              color: #364460;
              font-size: 15px;
              font-weight: bold;
              padding-top: 9px;
              padding-right: 5px;
            }
          }
        }
      }
    }
    // Message Section Css
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

    // invoicrd tab
    &.invoices-tab {
      h3 {
        margin-bottom: 30px;
      }
      .white-row.loader-route {
        .lds-sub-ripple {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .invoice-wrapper-home {
        .table-responsive {
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
                      display: inline-block;
                      background: #ece9df 0% 0% no-repeat padding-box;
                      border: 1px solid #00000000;
                      border-radius: 15px;
                      padding: 3px 17px;
                    }
                    &.invoice-icon {
                      display: inline-block;
                      background: #1190ee;
                      color: #fff !important;
                      padding: 6px 10px;
                      border-radius: 5px;
                    }
                    &.invoice-status {
                      font-size: 10px;
                      border-radius: 10px;
                      text-transform: capitalize;
                      font-weight: bold !important;
                      line-height: 20px !important;
                      padding: 0 10px;
                      text-align: center;
                      display: inline-block;
                      border: 1px solid #00000000;
                      width: 100%;
                      &.danger {
                        background: red;
                        color: #fff !important;
                      }
                      &.success {
                        background: rgba(0, 128, 0, 0.72);
                        color: #fff !important;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

// custom Styling
.viewDashBoard .white-row .filter-Calculation-Area .horizontal-row {
  padding-top: 10px;
}

// Extra large devices (lg and less)
@media screen and (max-width: 1199px) {
  .text-right-custom {
    text-align: right;
  }
}
// Extra large devices (md and less)
@media screen and (max-width: 991px) {
  .text-right-custom {
    text-align: right;
  }
  .viewDashBoard
    .white-row
    .filter-Calculation-Area
    .currency-box-dash-wrapper
    .currency-box-dash
    p.numb {
    font-size: 17px;
    padding-top: 8px;
  }
}

// Extra large devices (sm and up)
@media screen and (max-width: 767px) {
  .text-right-custom {
    text-align: left;
  }
  p {
    &.payment-custom-padding {
      padding-top: 0 !important;
      padding-left: 8px;
    }
  }
  .viewDashBoard
    .white-row
    .filter-Calculation-Area
    .currency-box-dash-wrapper
    .currency-box-dash
    p.numb {
    font-size: 15px;
    padding-top: 0;
    text-align: left;
    padding-left: 23px;
  }
}

// Extra large devices (xs and up)
@media screen and (max-width: 575px) {
  .text-right-custom {
    text-align: left;
  }
  .text-right-xs {
    text-align: left;
    padding-top: 0 !important;
    padding-left: 23px;
  }
  .viewDashBoard
    .white-row
    .filter-Calculation-Area
    .currency-box-dash-wrapper
    .currency-box-dash
    p.numb {
    font-size: 15px;
    padding-top: 0;
  }
}

// Extra large devices (xl, 1200px and up)
@media (min-width: 1200) {
  .text-right-custom {
    text-align: right;
  }
}
</style>
