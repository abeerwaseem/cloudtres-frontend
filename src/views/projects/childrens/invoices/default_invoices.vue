/* eslint-disable */
<template>
  <div class="project-invoice-section">
    <section class="top-heading-section-invoice">
      <div class=" invoices-tab">
        <div class="row">
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <h4 class="sub-heading">Invoices:</h4>
          </div>
        </div>
      </div>
    </section>
    <section class="invoices-area">
      <div class=" invoices-tab">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Invoice Number</th>
                <th>Total</th>
                <th>Status</th>
                <th>Issue Date</th>
                <th>Due Date</th>
                <th class="text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Vue CLient Portal Testing- #107871
                </td>
                <td>
                  <p class="invoice-total bold-cls">$ {{ 1928 | numFormat }}</p>
                </td>
                <td>
                  <p class="invoice-status success">
                    Paid
                  </p>
                </td>
                <td>
                  <p class="">
                    07/21/2020
                  </p>
                </td>
                <td>
                  <p class="">
                    07/21/2020
                  </p>
                </td>
                <td>
                  <div class="download-box text-right">
                    <a
                      data-toggle="tooltip"
                      title="Download!"
                      class="invoice-icon"
                      data-placement="top"
                      href="#"
                    >
                      <p class="invoice-icon">
                        <i class="fas fa-download"></i>
                      </p>
                    </a>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  Vue CLient Portal Testing- #107871
                </td>
                <td>
                  <p class="invoice-total bold-cls">$ {{ 1928 | numFormat }}</p>
                </td>
                <td>
                  <p class="invoice-status danger">
                    Unpaid
                  </p>
                </td>
                <td>
                  <p class="">
                    07/21/2020
                  </p>
                </td>
                <td>
                  <p class="">
                    07/21/2020
                  </p>
                </td>
                <td>
                  <div class="download-box text-right">
                    <a
                      data-toggle="tooltip"
                      title="Download!"
                      class="invoice-icon"
                      data-placement="top"
                      href="#"
                    >
                      <p class="invoice-icon">
                        <i class="fas fa-download"></i>
                      </p>
                    </a>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  Vue CLient Portal Testing- #107871
                </td>
                <td>
                  <p class="invoice-total bold-cls">$ {{ 1200 | numFormat }}</p>
                </td>
                <td>
                  <p class="invoice-status danger">
                    Unpaid
                  </p>
                </td>
                <td>
                  <p class="">
                    07/21/2020
                  </p>
                </td>
                <td>
                  <p class="">
                    07/21/2020
                  </p>
                </td>
                <td>
                  <div class="download-box text-right">
                    <a
                      data-toggle="tooltip"
                      title="Download!"
                      class="invoice-icon"
                      data-placement="top"
                      href="#"
                    >
                      <p class="invoice-icon">
                        <i class="fas fa-download"></i>
                      </p>
                    </a>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  Vue CLient Portal Testing- #107871
                </td>
                <td>
                  <p class="invoice-total bold-cls">$ {{ 1928 | numFormat }}</p>
                </td>
                <td>
                  <p class="invoice-status danger">
                    Unpaid
                  </p>
                </td>
                <td>
                  <p class="">
                    07/21/2020
                  </p>
                </td>
                <td>
                  <p class="">
                    07/21/2020
                  </p>
                </td>
                <td>
                  <div class="download-box text-right">
                    <a
                      data-toggle="tooltip"
                      title="Download!"
                      class="invoice-icon"
                      data-placement="top"
                      href="#"
                    >
                      <p class="invoice-icon">
                        <i class="fas fa-download"></i>
                      </p>
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <ul class="pagination justify-content-center">
            <li class="page-item active">
              <a class="page-link" href="javascript:void(0);">Previous</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:void(0);">1</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:void(0);">2</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:void(0);">Next</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "projects.invoices",
  components: {},
  computed: {},
  data() {
    return {
      disableSubmitBtn: false,
      project_id: this.$route.params.project_id
    };
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
section {
  padding: 25px 0;
  border-bottom: 1px solid #ebebeb;
  &.top-heading-section-invoice {
    border-bottom: none;
    padding-bottom: 0;
    padding-top: 0;
    .general-filters {
      .form-actions {
        padding: 0;
        button {
          padding: 6px 25px;
          margin-left: 0;
        }
      }
    }
    .sub-heading {
      padding: 10px 0;
      margin: 0;
    }
  }
  &.invoices-area {
    h4 {
      padding: 0;
    }
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
  section.top-heading-section-invoice {
    padding-top: 10px;
  }
  .sub-heading {
    padding: 10px 0 15px;
    margin: 0;
  }
}

// Extra large devices (xl, 1200px and up)
@media (min-width: 1200) {
}
</style>
