<template>
  <div class="viewDashBoard project-invoice-show">
    <div class="container">
      <div class="white-row">
        <section class="project-invoice-header">
          <div class="main-title-header">
            <div class="row">
              <div class="col-sm-7">
                <h4>
                  <span>
                    Vue CLient Portal Testing- #107871
                  </span>
                </h4>
              </div>
              <div class="col-sm-5">
                <div class="top-btns text-right">
                  <button class="default-global-btn">
                    <i class="fas fa-download"></i> Download PDF
                  </button>
                  <button
                    @click.prevent="scrollToForm"
                    class="default-global-btn"
                  >
                    Pay Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="seperator">
          <hr />
        </div>
        <section class="firm-details">
          <div class="row">
            <div
              v-if="brand_name.toLowerCase().trim() == 'pnc logos'"
              class="col-sm-12"
            >
              <div class="row">
                <div class="col-md-4">
                  <div class="brand-logo">
                    <img
                      src="https://www.pnclogos.com/wp-content/themes/pnc-logos/pnc-assets/images/website-logo.gif"
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="support text-right">
                    <p>PNC Workbench Support</p>
                    <p>
                      <span>
                        <a href="tel:1-800-213-7640">1-800-213-7640</a>
                      </span>
                    </p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="address text-right">
                    <p>
                      PNC Logos - 219 N <br />
                      Brown Ave Suite D Orlando <br />
                      FL 32801
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              v-else-if="
                brand_name.toLowerCase().trim() == 'platinum design services'
              "
              class="col-sm-12"
            >
              <div class="row">
                <div class="col-md-4">
                  <div class="brand-logo">
                    <img
                      src="https://platinumdesignservices.com/wp-content/uploads/2019/06/logo-new.png"
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="support text-right">
                    <p>PNC Workbench Support</p>
                    <p>
                      <span>
                        <a href="tel:(407) 401-8320">(407) 401-8320</a>
                      </span>
                    </p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="address text-right">
                    <p>
                      Platinum Design Services - 142 W <br />
                      Lakeview Ave #2060a, <br />
                      Lake Mary, FL 32746, USA
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              v-else-if="brand_name.toLowerCase().trim() == 'pnc au'"
              class="col-sm-12"
            >
              <div class="row">
                <div class="col-md-4">
                  <div class="brand-logo">
                    <img
                      src="https://www.pnclogos.com/wp-content/themes/pnc-logos/pnc-assets/images/website-logo.gif"
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="support text-right">
                    <p>PNC Workbench Support</p>
                    <p>
                      <span>
                        <a href="tel:+61 390 216 942">+61 390 216 942</a>
                      </span>
                    </p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="address text-right">
                    <p>
                      PNC Logos - Level 8, <br />
                      805/220 Collins St, <br />
                      Melbourne VIC 3000
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div v-else class="col-sm-12">
              <div class="row">
                <div class="col-md-4">
                  <div class="brand-logo">
                    <img
                      src="https://www.pnclogos.com/wp-content/themes/pnc-logos/pnc-assets/images/website-logo.gif"
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="support text-right">
                    <p>PNC Workbench Support</p>
                    <p>
                      <span>
                        <a href="tel:1-800-213-7640">1-800-213-7640</a>
                      </span>
                    </p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="address text-right">
                    <p>
                      PNC Logos - 219 N <br />
                      Brown Ave Suite D Orlando <br />
                      FL 32801
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="seperator">
          <hr />
        </div>
        <section class="item-area-invoice">
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Item Description</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Testing</td>
                  <td>
                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                  </td>
                  <td>1</td>
                  <td>$ 1200</td>
                  <td>$ 1200</td>
                </tr>
                <tr>
                  <td>Testing</td>
                  <td>
                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                  </td>
                  <td>1</td>
                  <td>$ 1200</td>
                  <td>$ 1200</td>
                </tr>
                <tr>
                  <td>Testing</td>
                  <td>
                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                  </td>
                  <td>1</td>
                  <td>$ 1200</td>
                  <td>$ 1200</td>
                </tr>
                <tr>
                  <td>Testing</td>
                  <td>
                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                  </td>
                  <td>1</td>
                  <td>$ 1200</td>
                  <td>$ 1200</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="total-area-calculation">
            <div class="cal-box">
              <p>Sub Total :</p>
              <p class="text-right">$ 4800</p>
            </div>
            <div class="cal-box">
              <p>Discount :</p>
              <p class="text-right">$0</p>
            </div>
            <div class="cal-box">
              <h3>Total :</h3>
              <h3 class="text-right">$ 4800</h3>
            </div>
          </div>
        </section>
        <div class="seperator">
          <hr />
        </div>
        <section class="payments-area-invoice">
          <h4 class="sub-heading">Payment</h4>

          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Getway</th>
                  <th>Transection Id</th>
                  <th>Customer</th>
                  <th>Paid On</th>
                  <th>Error</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>$2000s</td>
                  <td>
                    <p class="label label-success">COMPLETE</p>
                  </td>
                  <td>Stripe</td>
                  <td>ch_1HXBqZKrleAkZ85BMzKPsc5Q</td>
                  <td>andy617.ad@gmail.com</td>
                  <td>Sep 30 2020</td>
                  <td>Payment Not Received.</td>
                </tr>
                <tr>
                  <td>$2000s</td>
                  <td>
                    <p class="label label-success">COMPLETE</p>
                  </td>
                  <td>Stripe</td>
                  <td>ch_1HXBqZKrleAkZ85BMzKPsc5Q</td>
                  <td>andy617.ad@gmail.com</td>
                  <td>Sep 30 2020</td>
                  <td>Payment Not Received.</td>
                </tr>
                <tr>
                  <td>$2000s</td>
                  <td>
                    <p class="label label-success">COMPLETE</p>
                  </td>
                  <td>Stripe</td>
                  <td>ch_1HXBqZKrleAkZ85BMzKPsc5Q</td>
                  <td>andy617.ad@gmail.com</td>
                  <td>Sep 30 2020</td>
                  <td>---------</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section class="payment-tabs-area">
          <!-- Nav tabs -->
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link active" data-toggle="tab" href="#home"
                >New Card</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="tab" href="#menu1">Save Card</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="tab" href="#menu2">Paypal</a>
            </li>
          </ul>

          <!-- Tab panes -->
          <div class="tab-content" id="pay-now-project-invoice">
            <div class="form-area tab-pane container active" id="home">
              <h3 class="sub-heading">Billing Information</h3>
              <div class="row">
                <div class="col-sm-12">
                  <div class="">
                    <div class="form-group">
                      <label for="gender" class="control-label"></label>
                      <Select2
                        :options="user_gender"
                        :settings="{
                          placeholder: 'Select Previous Billing Addresses',
                          clear: true
                        }"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-sm-12">
                  <transition name="fade">
                    <div
                      v-if="formData.previous_billing_address_id == null"
                      class="new-address"
                    >
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="address_line1"
                              >Address Line One<span class="heightlight"
                                >*</span
                              ></label
                            >
                            <input
                              v-model="formData.address_line1"
                              type="text"
                              class="form-control"
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="address_line2"
                              >Address Line Two (optional)</label
                            >
                            <input
                              v-model="formData.address_line2"
                              type="text"
                              class="form-control"
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="address_state"
                              >State<span class="heightlight">*</span></label
                            >
                            <input
                              v-model="formData.address_state"
                              type="text"
                              class="form-control"
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="address_city"
                              >City<span class="heightlight">*</span></label
                            >
                            <input
                              v-model="formData.address_city"
                              type="text"
                              class="form-control"
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="address_country"
                              >Country<span class="heightlight">*</span></label
                            >
                            <input
                              v-model="formData.address_country"
                              type="text"
                              class="form-control"
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="address_zip"
                              >Zip Code<span class="heightlight">*</span></label
                            >
                            <input
                              v-model="formData.address_zip"
                              type="text"
                              class="form-control"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </transition>
                </div>
                <div class="col-sm-12">
                  <h3 class="sub-heading">Card Information</h3>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="card_holder_name"></label>
                        <input
                          placeholder="Card Holder Name: *"
                          v-model="formData.card_holder_name"
                          type="text"
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="card_number"></label>
                        <input
                          placeholder="Card Number: *"
                          v-model="formData.card_number"
                          type="tel"
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="form-group">
                        <label for="gender" class="control-label"></label>
                        <Select2
                          v-model="formData.expiration_month"
                          :options="expiry_month_array"
                          :settings="{ placeholder: 'Expiry Month' }"
                        />
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="form-group">
                        <label for="gender" class="control-label"></label>
                        <Select2
                          v-model="formData.expiration_year"
                          :options="years"
                          :settings="{ placeholder: 'Expiry year' }"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="">
                        <div class="form-group">
                          <label class="remMP" for="cvc"></label>
                          <input
                            v-model="formData.cvc"
                            type="tel"
                            class="form-control"
                            placeholder="CVC: *"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="row">
                        <div class="col-sm-4">
                          <div class="checkobx-styling">
                            <label class="form-check-label">
                              <input
                                v-model="formData.remember_my_card"
                                class="form-check-input"
                                type="checkbox"
                              />
                              Remember me
                            </label>
                          </div>
                        </div>
                        <div class="col-sm-8">
                          <div class="checkobx-styling">
                            <label class="form-check-label">
                              <input
                                v-model="formData.agree_terms_condition"
                                class="form-check-input"
                                type="checkbox"
                              />
                              I have read and agree to the
                              <a @click.prevent="showTermsCondition" href=""
                                >terms and conditions</a
                              >
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-actions">
                <button
                  :disabled="disableSubmitBtn"
                  type="submit"
                  id="save-form"
                  class="btn btn-primary"
                >
                  Pay Now
                </button>
              </div>
            </div>
            <div class="tab-pane container fade" id="menu1">
              <div class="row">
                <div class="col-sm-12">
                  <form class="form-area saved-card-form" id="save-card-form">
                    <div v-if="saved_form_loader" class="onCLikFormLoad">
                      <div class="lds-hourglass"></div>
                    </div>
                    <div class="form-group">
                      <label for="card_id" class="control-label"></label>
                      <Select2
                        v-model="savedCard.formData.card_id"
                        :options="save_card_list"
                        :settings="{ placeholder: 'Select Card' }"
                      />
                    </div>
                    <div class="form-actions">
                      <button
                        :disabled="disableSubmitBtn"
                        type="submit"
                        id="save-form"
                        class="btn btn-primary"
                      >
                        Pay Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="tab-pane container fade" id="menu2">
              <div id="paypal-button">Please Link paypal API Here.....</div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <!-- ProjectMember Modal -->
    <modal
      name="terms-and-condition-modal"
      height="auto"
      width="60%"
      :scrollable="true"
    >
      <div class="ModalLoader">
        <div class="general-form">
          <h4 class="sub-heading">
            Terms and Condition
            <a @click.prevent="hideTermsCondition" href=""
              ><i class="fa fa-times" aria-hidden="true"></i
            ></a>
          </h4>
          <div class="row">
            <div class="col-md-12">
              <div class="terms-condition">
                <div class="t-and-c-description-area">
                  <div v-if="invoice_project_brand.trim() == 'pnc logos'">
                    <h4>Refund Policy</h4>
                    <p>
                      In any occasion, any funds deposited will not be liable
                      for a refund if the initial design and concepts (after
                      delivery) are approved. All requests for refund will be as
                      per the following arrangement:
                    </p>

                    <p>
                      The client makes a solicitation where the underlying ideas
                      for a logo are provided. However once the client approves
                      or asks for changes in the initial designs, the refund
                      offer will be void and a request for refund will not be
                      approved.
                    </p>

                    <p>
                      Once the project enters the revision phase, the refund
                      offer will be void and a request for refund will not be
                      approved.
                    </p>

                    <p>
                      A refund request should have a legitimate reason which
                      must be qualified against the outline brief and client
                      input for revisions. Unless an idea has not been composed
                      as per the brief, a refund will not be approved.
                    </p>

                    <h4>Refund on Logo Packages</h4>
                    <p>
                      If a demand for refund is made before the delivery of
                      initial design concepts, then you would qualify for a full
                      refund (excluding 10% administration and preparing
                      charge).
                    </p>
                    <p>
                      If the refund request is made within 5 business days after
                      the initial design, you will only be eligible for a 66%
                      refund (excluding 10% administration and preparing
                      expense).
                    </p>
                    <p>
                      If the refund request is made after 5 business days and
                      within 12 business days after the initial design delivery,
                      you will only be eligible for a 33% refund (excluding 10%
                      service & processing free).
                    </p>
                    <p>
                      No refund request will be approved after 15 business days
                      of the initial design delivery. However, we believe in
                      100% customer satisfaction so you are requested to reach
                      out to us so we can address your concerns.
                    </p>
                    <p>
                      No refund will be approved after the final files have been
                      delivered.
                    </p>

                    <h4>Refund on Website Packages</h4>
                    <p>
                      If a demand for refund is made before the delivery of
                      Initial Website Mockup then you would qualify for a full
                      refund (excluding 10% administration and preparing
                      charge).
                    </p>
                    <p>
                      If the refund request is made within 5 business days after
                      the Initial Website Mockup, you will only be eligible for
                      a 66% refund (excluding 10% administration and preparing
                      expense).
                    </p>
                    <p>
                      No request for refund will be approved once the initial
                      design mockup of your website has been revised. No refund
                      request will be approved after 10 business days of the
                      Initial Website Mockup. However, we believe in 100%
                      customer satisfaction so you are requested to reach out to
                      us so we can address your concerns.
                    </p>
                    <p>
                      In case of websites, refunds will not be entertained once
                      the client has approved the design and the website is sent
                      for development.
                    </p>
                    <p>
                      In instances, where websites have been developed and
                      uploaded on test links or actual domains, no refunds will
                      be entertained. PNC LOGOS will only be liable to
                      troubleshoot problems (if and when) the customer has
                      subscribed to web support services.
                    </p>

                    <h4>Refund on Custom Packages</h4>
                    <p>
                      For custom bundles, our refund policy (as stated above)
                      will apply individually to each service of the bundle.
                    </p>
                    <p>
                      No refund request will be approved after 10 business days
                      of the Initial design. However, we believe in 100%
                      customer satisfaction so you are requested to reach out to
                      us so we can address your concerns.
                    </p>

                    <h4>Refund on Marketing Packages</h4>
                    <p>
                      All of our Social Media Marketing Packages, SEO Packages
                      and other marketing related projects are non-refundable
                      under any circumstances.
                    </p>

                    <h4>Refund on Domain & Hosting</h4>
                    <p>
                      Services including domain, hosting, SSL and other related
                      services will not be cancelled or refunded under any
                      circumstances. PNC Logos holds the rights to domains &
                      hosting that have been purchased via PNC Logos.
                    </p>
                    <p>
                      No request for refund will be approved after inaction by
                      the customer after 7 business days. If you wish to restart
                      the order, you will be charged a fee contingent upon your
                      venture.
                    </p>
                    <p>
                      No request for refund will be approved if the customer is
                      unresponsive at any point of time for 10 business days.
                    </p>
                    <p>
                      All refund request should be made to the support
                      department. PNC Logos reserves the right to approve or
                      reject any and all refund requests based on a case to case
                      basis.
                    </p>
                    <p>
                      Money Back Guarantee depends on that the request is set in
                      accordance with some basic honesty. Where a client has
                      placed design orders with more than one agency for the
                      same job, with the intention of claiming a refund, PNC
                      Logos does not consider this to be in good faith. In such
                      instances, we reserve the right to decline a refund
                      request.
                    </p>
                    <p>
                      All design jobs require client input before finishing the
                      design which is why the customer must be active throughout
                      the process and gives feedback in order to get the
                      required results.
                    </p>
                    <p>
                      100% unique design guarantee qualifies you for a new logo
                      if the logo designed by PNC Logos is found to be
                      considerably similar to another design that already
                      exists. Any likeness to a current outline will be
                      considered a fortuitous event and PNC Logos will not
                      acknowledge any responsibility or claim of any
                      compensation in such a case. It is the client’s
                      responsibility to get their artwork copyrighted.
                    </p>
                    <p>
                      All refund requests should be properly documented & must
                      be communicated through the channels mentioned in Section
                      6 with the reason for discontent. You agree to a 10%
                      processing fee deduction from the order amount when the
                      refund is processed. Refunds are issued within 8 to 10
                      business days from the day that the cancellation was
                      requested. You agree that your acceptance of the refund
                      shall constitute your sole and exclusive remedy with
                      respect to related Responses. Additionally, you
                      acknowledge that you will have no right (express or
                      implied) to use any Response or other work product,
                      content, or media, nor will you have any ownership
                      interest in or to the same. All sections of this Agreement
                      which, by their nature, shall survive termination, shall
                      survive including payment, indemnity and the disclaimers
                      of warranty and limitations of liability.
                    </p>
                    <h4>How to Claim Your Refund</h4>
                    <p>
                      To ensure that your refund request is processed
                      effectively and is approved, please make sure that you
                      meet the following requirements.
                    </p>
                    <p>
                      i. Toll free #
                      <a href="tel:1-800-213-7640">1-800-213-7640</a>
                    </p>
                    <p>
                      ii. Email.
                      <a href="mailto:solutions@pnclogos.com"
                        >(solutions@pnclogos.com)</a
                      >
                    </p>
                  </div>
                  <div
                    v-else-if="
                      invoice_project_brand.toLowerCase().trim() ==
                        'platinum design services'
                    "
                  >
                    <h4>Refund Policy</h4>
                    <p>
                      In any occasion, any funds deposited will not be liable
                      for a refund if the initial design and concepts (after
                      delivery) are approved. All requests for refund will be as
                      per the following arrangement:
                    </p>

                    <p>
                      The client makes a solicitation where the underlying ideas
                      for a logo are provided. However once the client approves
                      or asks for changes in the initial designs, the refund
                      offer will be void and a request for refund will not be
                      approved.
                    </p>

                    <p>
                      Once the project enters the revision phase, the refund
                      offer will be void and a request for refund will not be
                      approved.
                    </p>

                    <p>
                      A refund request should have a legitimate reason which
                      must be qualified against the outline brief and client
                      input for revisions. Unless an idea has not been composed
                      as per the brief, a refund will not be approved.
                    </p>

                    <h4>Refund on Logo Packages</h4>
                    <p>
                      If a demand for refund is made before the delivery of
                      initial design concepts, then you would qualify for a full
                      refund (excluding 10% administration and preparing
                      charge).
                    </p>
                    <p>
                      If the refund request is made within 5 business days after
                      the initial design, you will only be eligible for a 66%
                      refund (excluding 10% administration and preparing
                      expense).
                    </p>
                    <p>
                      If the refund request is made after 5 business days and
                      within 12 business days after the initial design delivery,
                      you will only be eligible for a 33% refund (excluding 10%
                      service & processing free).
                    </p>
                    <p>
                      No refund request will be approved after 15 business days
                      of the initial design delivery. However, we believe in
                      100% customer satisfaction so you are requested to reach
                      out to us so we can address your concerns.
                    </p>
                    <p>
                      No refund will be approved after the final files have been
                      delivered.
                    </p>

                    <h4>Refund on Website Packages</h4>
                    <p>
                      If a demand for refund is made before the delivery of
                      Initial Website Mockup then you would qualify for a full
                      refund (excluding 10% administration and preparing
                      charge).
                    </p>
                    <p>
                      If the refund request is made within 5 business days after
                      the Initial Website Mockup, you will only be eligible for
                      a 66% refund (excluding 10% administration and preparing
                      expense).
                    </p>
                    <p>
                      No request for refund will be approved once the initial
                      design mockup of your website has been revised. No refund
                      request will be approved after 10 business days of the
                      Initial Website Mockup. However, we believe in 100%
                      customer satisfaction so you are requested to reach out to
                      us so we can address your concerns.
                    </p>
                    <p>
                      In case of websites, refunds will not be entertained once
                      the client has approved the design and the website is sent
                      for development.
                    </p>
                    <p>
                      In instances, where websites have been developed and
                      uploaded on test links or actual domains, no refunds will
                      be entertained. Platinum Design Services will only be
                      liable to troubleshoot problems (if and when) the customer
                      has subscribed to web support services.
                    </p>

                    <h4>Refund on Custom Packages</h4>
                    <p>
                      For custom bundles, our refund policy (as stated above)
                      will apply individually to each service of the bundle.
                    </p>
                    <p>
                      No refund request will be approved after 10 business days
                      of the Initial design. However, we believe in 100%
                      customer satisfaction so you are requested to reach out to
                      us so we can address your concerns.
                    </p>

                    <h4>Refund on Marketing Packages</h4>
                    <p>
                      All of our Social Media Marketing Packages, SEO Packages
                      and other marketing related projects are non-refundable
                      under any circumstances.
                    </p>

                    <h4>Refund on Domain & Hosting</h4>
                    <p>
                      Services including domain, hosting, SSL and other related
                      services will not be cancelled or refunded under any
                      circumstances. Platinum Design Services holds the rights
                      to domains & hosting that have been purchased via Platinum
                      Design Services.
                    </p>
                    <p>
                      No request for refund will be approved after inaction by
                      the customer after 7 business days. If you wish to restart
                      the order, you will be charged a fee contingent upon your
                      venture.
                    </p>
                    <p>
                      No request for refund will be approved if the customer is
                      unresponsive at any point of time for 10 business days.
                    </p>
                    <p>
                      All refund request should be made to the support
                      department. Platinum Design Services reserves the right to
                      approve or reject any and all refund requests based on a
                      case to case basis.
                    </p>
                    <p>
                      Money Back Guarantee depends on that the request is set in
                      accordance with some basic honesty. Where a client has
                      placed design orders with more than one agency for the
                      same job, with the intention of claiming a refund,
                      Platinum Design Services does not consider this to be in
                      good faith. In such instances, we reserve the right to
                      decline a refund request.
                    </p>
                    <p>
                      All design jobs require client input before finishing the
                      design which is why the customer must be active throughout
                      the process and gives feedback in order to get the
                      required results.
                    </p>
                    <p>
                      100% unique design guarantee qualifies you for a new logo
                      if the logo designed by Platinum Design Services is found
                      to be considerably similar to another design that already
                      exists. Any likeness to a current outline will be
                      considered a fortuitous event and Platinum Design Services
                      will not acknowledge any responsibility or claim of any
                      compensation in such a case. It is the client’s
                      responsibility to get their artwork copyrighted.
                    </p>
                    <p>
                      All refund requests should be properly documented & must
                      be communicated through the channels mentioned in Section
                      6 with the reason for discontent. You agree to a 10%
                      processing fee deduction from the order amount when the
                      refund is processed. Refunds are issued within 8 to 10
                      business days from the day that the cancellation was
                      requested. You agree that your acceptance of the refund
                      shall constitute your sole and exclusive remedy with
                      respect to related Responses. Additionally, you
                      acknowledge that you will have no right (express or
                      implied) to use any Response or other work product,
                      content, or media, nor will you have any ownership
                      interest in or to the same. All sections of this Agreement
                      which, by their nature, shall survive termination, shall
                      survive including payment, indemnity and the disclaimers
                      of warranty and limitations of liability.
                    </p>

                    <h4>How to Claim Your Refund</h4>
                    <p>
                      To ensure that your refund request is processed
                      effectively and is approved, please make sure that you
                      meet the following requirements.
                    </p>
                    <p>
                      i. Toll free #
                      <a href="tel:1(407) 401-8320">1(407) 401-8320</a>
                    </p>
                    <p>
                      ii. Email.
                      <a href="mailto:solutions@platinumdesignservices.com"
                        >(solutions@platinumdesignservices.com)</a
                      >
                    </p>
                  </div>
                  <div
                    v-else-if="
                      invoice_project_brand.toLowerCase().trim() == 'pnc au'
                    "
                  >
                    <h4>Refund Policy</h4>
                    <p>
                      In any occasion, any funds deposited will not be liable
                      for a refund if the initial design and concepts (after
                      delivery) are approved. All requests for refund will be as
                      per the following arrangement:
                    </p>

                    <p>
                      The client makes a solicitation where the underlying ideas
                      for a logo are provided. However once the client approves
                      or asks for changes in the initial designs, the refund
                      offer will be void and a request for refund will not be
                      approved.
                    </p>

                    <p>
                      Once the project enters the revision phase, the refund
                      offer will be void and a request for refund will not be
                      approved.
                    </p>

                    <p>
                      A refund request should have a legitimate reason which
                      must be qualified against the outline brief and client
                      input for revisions. Unless an idea has not been composed
                      as per the brief, a refund will not be approved.
                    </p>

                    <h4>Refund on Logo Packages</h4>
                    <p>
                      If a demand for refund is made before the delivery of
                      initial design concepts, then you would qualify for a full
                      refund (excluding 10% administration and preparing
                      charge).
                    </p>
                    <p>
                      If the refund request is made within 5 business days after
                      the initial design, you will only be eligible for a 66%
                      refund (excluding 10% administration and preparing
                      expense).
                    </p>
                    <p>
                      If the refund request is made after 5 business days and
                      within 12 business days after the initial design delivery,
                      you will only be eligible for a 33% refund (excluding 10%
                      service & processing free).
                    </p>
                    <p>
                      No refund request will be approved after 15 business days
                      of the initial design delivery. However, we believe in
                      100% customer satisfaction so you are requested to reach
                      out to us so we can address your concerns.
                    </p>
                    <p>
                      No refund will be approved after the final files have been
                      delivered.
                    </p>

                    <h4>Refund on Website Packages</h4>
                    <p>
                      If a demand for refund is made before the delivery of
                      Initial Website Mockup then you would qualify for a full
                      refund (excluding 10% administration and preparing
                      charge).
                    </p>
                    <p>
                      If the refund request is made within 5 business days after
                      the Initial Website Mockup, you will only be eligible for
                      a 66% refund (excluding 10% administration and preparing
                      expense).
                    </p>
                    <p>
                      No request for refund will be approved once the initial
                      design mockup of your website has been revised. No refund
                      request will be approved after 10 business days of the
                      Initial Website Mockup. However, we believe in 100%
                      customer satisfaction so you are requested to reach out to
                      us so we can address your concerns.
                    </p>
                    <p>
                      In case of websites, refunds will not be entertained once
                      the client has approved the design and the website is sent
                      for development.
                    </p>
                    <p>
                      In instances, where websites have been developed and
                      uploaded on test links or actual domains, no refunds will
                      be entertained. PNC LOGOS Au will only be liable to
                      troubleshoot problems (if and when) the customer has
                      subscribed to web support services.
                    </p>

                    <h4>Refund on Custom Packages</h4>
                    <p>
                      For custom bundles, our refund policy (as stated above)
                      will apply individually to each service of the bundle.
                    </p>
                    <p>
                      No refund request will be approved after 10 business days
                      of the Initial design. However, we believe in 100%
                      customer satisfaction so you are requested to reach out to
                      us so we can address your concerns.
                    </p>

                    <h4>Refund on Marketing Packages</h4>
                    <p>
                      All of our Social Media Marketing Packages, SEO Packages
                      and other marketing related projects are non-refundable
                      under any circumstances.
                    </p>

                    <h4>Refund on Domain & Hosting</h4>
                    <p>
                      Services including domain, hosting, SSL and other related
                      services will not be cancelled or refunded under any
                      circumstances. PNC Logos Au holds the rights to domains &
                      hosting that have been purchased via PNC Logos Au.
                    </p>
                    <p>
                      No request for refund will be approved after inaction by
                      the customer after 7 business days. If you wish to restart
                      the order, you will be charged a fee contingent upon your
                      venture.
                    </p>
                    <p>
                      No request for refund will be approved if the customer is
                      unresponsive at any point of time for 10 business days.
                    </p>
                    <p>
                      All refund request should be made to the support
                      department. PNC Logos Au reserves the right to approve or
                      reject any and all refund requests based on a case to case
                      basis.
                    </p>
                    <p>
                      Money Back Guarantee depends on that the request is set in
                      accordance with some basic honesty. Where a client has
                      placed design orders with more than one agency for the
                      same job, with the intention of claiming a refund, PNC
                      Logos Au does not consider this to be in good faith. In
                      such instances, we reserve the right to decline a refund
                      request.
                    </p>
                    <p>
                      All design jobs require client input before finishing the
                      design which is why the customer must be active throughout
                      the process and gives feedback in order to get the
                      required results.
                    </p>
                    <p>
                      100% unique design guarantee qualifies you for a new logo
                      if the logo designed by PNC Logos Au is found to be
                      considerably similar to another design that already
                      exists. Any likeness to a current outline will be
                      considered a fortuitous event and PNC Logos Au will not
                      acknowledge any responsibility or claim of any
                      compensation in such a case. It is the client’s
                      responsibility to get their artwork copyrighted.
                    </p>
                    <p>
                      All refund requests should be properly documented & must
                      be communicated through the channels mentioned in Section
                      6 with the reason for discontent. You agree to a 10%
                      processing fee deduction from the order amount when the
                      refund is processed. Refunds are issued within 8 to 10
                      business days from the day that the cancellation was
                      requested. You agree that your acceptance of the refund
                      shall constitute your sole and exclusive remedy with
                      respect to related Responses. Additionally, you
                      acknowledge that you will have no right (express or
                      implied) to use any Response or other work product,
                      content, or media, nor will you have any ownership
                      interest in or to the same. All sections of this Agreement
                      which, by their nature, shall survive termination, shall
                      survive including payment, indemnity and the disclaimers
                      of warranty and limitations of liability.
                    </p>

                    <h4>How to Claim Your Refund</h4>
                    <p>
                      To ensure that your refund request is processed
                      effectively and is approved, please make sure that you
                      meet the following requirements.
                    </p>
                    <p>
                      i. Toll free #
                      <a href="tel:+61 370 037 050">+61 370 037 050</a>
                    </p>
                    <p>
                      ii. Email.
                      <a href="mailto:(sales@pnclogos.com.au"
                        >(sales@pnclogos.com.au)</a
                      >
                    </p>
                  </div>
                  <div v-else>
                    <h4>Refund Policy</h4>
                    <p>
                      In any occasion, any funds deposited will not be liable
                      for a refund if the initial design and concepts (after
                      delivery) are approved. All requests for refund will be as
                      per the following arrangement:
                    </p>

                    <p>
                      The client makes a solicitation where the underlying ideas
                      for a logo are provided. However once the client approves
                      or asks for changes in the initial designs, the refund
                      offer will be void and a request for refund will not be
                      approved.
                    </p>

                    <p>
                      Once the project enters the revision phase, the refund
                      offer will be void and a request for refund will not be
                      approved.
                    </p>

                    <p>
                      A refund request should have a legitimate reason which
                      must be qualified against the outline brief and client
                      input for revisions. Unless an idea has not been composed
                      as per the brief, a refund will not be approved.
                    </p>

                    <h4>Refund on Logo Packages</h4>
                    <p>
                      If a demand for refund is made before the delivery of
                      initial design concepts, then you would qualify for a full
                      refund (excluding 10% administration and preparing
                      charge).
                    </p>
                    <p>
                      If the refund request is made within 5 business days after
                      the initial design, you will only be eligible for a 66%
                      refund (excluding 10% administration and preparing
                      expense).
                    </p>
                    <p>
                      If the refund request is made after 5 business days and
                      within 12 business days after the initial design delivery,
                      you will only be eligible for a 33% refund (excluding 10%
                      service & processing free).
                    </p>
                    <p>
                      No refund request will be approved after 15 business days
                      of the initial design delivery. However, we believe in
                      100% customer satisfaction so you are requested to reach
                      out to us so we can address your concerns.
                    </p>
                    <p>
                      No refund will be approved after the final files have been
                      delivered.
                    </p>

                    <h4>Refund on Website Packages</h4>
                    <p>
                      If a demand for refund is made before the delivery of
                      Initial Website Mockup then you would qualify for a full
                      refund (excluding 10% administration and preparing
                      charge).
                    </p>
                    <p>
                      If the refund request is made within 5 business days after
                      the Initial Website Mockup, you will only be eligible for
                      a 66% refund (excluding 10% administration and preparing
                      expense).
                    </p>
                    <p>
                      No request for refund will be approved once the initial
                      design mockup of your website has been revised. No refund
                      request will be approved after 10 business days of the
                      Initial Website Mockup. However, we believe in 100%
                      customer satisfaction so you are requested to reach out to
                      us so we can address your concerns.
                    </p>
                    <p>
                      In case of websites, refunds will not be entertained once
                      the client has approved the design and the website is sent
                      for development.
                    </p>
                    <p>
                      In instances, where websites have been developed and
                      uploaded on test links or actual domains, no refunds will
                      be entertained. PNC LOGOS will only be liable to
                      troubleshoot problems (if and when) the customer has
                      subscribed to web support services.
                    </p>

                    <h4>Refund on Custom Packages</h4>
                    <p>
                      For custom bundles, our refund policy (as stated above)
                      will apply individually to each service of the bundle.
                    </p>
                    <p>
                      No refund request will be approved after 10 business days
                      of the Initial design. However, we believe in 100%
                      customer satisfaction so you are requested to reach out to
                      us so we can address your concerns.
                    </p>

                    <h4>Refund on Marketing Packages</h4>
                    <p>
                      All of our Social Media Marketing Packages, SEO Packages
                      and other marketing related projects are non-refundable
                      under any circumstances.
                    </p>

                    <h4>Refund on Domain & Hosting</h4>
                    <p>
                      Services including domain, hosting, SSL and other related
                      services will not be cancelled or refunded under any
                      circumstances. PNC Logos holds the rights to domains &
                      hosting that have been purchased via PNC Logos.
                    </p>
                    <p>
                      No request for refund will be approved after inaction by
                      the customer after 7 business days. If you wish to restart
                      the order, you will be charged a fee contingent upon your
                      venture.
                    </p>
                    <p>
                      No request for refund will be approved if the customer is
                      unresponsive at any point of time for 10 business days.
                    </p>
                    <p>
                      All refund request should be made to the support
                      department. PNC Logos reserves the right to approve or
                      reject any and all refund requests based on a case to case
                      basis.
                    </p>
                    <p>
                      Money Back Guarantee depends on that the request is set in
                      accordance with some basic honesty. Where a client has
                      placed design orders with more than one agency for the
                      same job, with the intention of claiming a refund, PNC
                      Logos does not consider this to be in good faith. In such
                      instances, we reserve the right to decline a refund
                      request.
                    </p>
                    <p>
                      All design jobs require client input before finishing the
                      design which is why the customer must be active throughout
                      the process and gives feedback in order to get the
                      required results.
                    </p>
                    <p>
                      100% unique design guarantee qualifies you for a new logo
                      if the logo designed by PNC Logos is found to be
                      considerably similar to another design that already
                      exists. Any likeness to a current outline will be
                      considered a fortuitous event and PNC Logos will not
                      acknowledge any responsibility or claim of any
                      compensation in such a case. It is the client’s
                      responsibility to get their artwork copyrighted.
                    </p>
                    <p>
                      All refund requests should be properly documented & must
                      be communicated through the channels mentioned in Section
                      6 with the reason for discontent. You agree to a 10%
                      processing fee deduction from the order amount when the
                      refund is processed. Refunds are issued within 8 to 10
                      business days from the day that the cancellation was
                      requested. You agree that your acceptance of the refund
                      shall constitute your sole and exclusive remedy with
                      respect to related Responses. Additionally, you
                      acknowledge that you will have no right (express or
                      implied) to use any Response or other work product,
                      content, or media, nor will you have any ownership
                      interest in or to the same. All sections of this Agreement
                      which, by their nature, shall survive termination, shall
                      survive including payment, indemnity and the disclaimers
                      of warranty and limitations of liability.
                    </p>
                    <h4>How to Claim Your Refund</h4>
                    <p>
                      To ensure that your refund request is processed
                      effectively and is approved, please make sure that you
                      meet the following requirements.
                    </p>
                    <p>
                      i. Toll free #
                      <a href="tel:1-800-213-7640">1-800-213-7640</a>
                    </p>
                    <p>
                      ii. Email.
                      <a href="mailto:solutions@pnclogos.com"
                        >(solutions@pnclogos.com)</a
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import Select2 from "v-select2-component";
import $ from "jquery";

export default {
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
      disableSubmitBtn: false,
      displaySubChildren: true,
      brand_name: "pnc au",
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
      expiry_month_array: [
        {
          id: "01",
          text: "January"
        },
        {
          id: "02",
          text: "February"
        },
        {
          id: "03",
          text: "March"
        },
        {
          id: "04",
          text: "April"
        },
        {
          id: "05",
          text: "May"
        },
        {
          id: "06",
          text: "June"
        },
        {
          id: "07",
          text: "July"
        },
        {
          id: "08",
          text: "August"
        },
        {
          id: "09",
          text: "September"
        },
        {
          id: "10",
          text: "October"
        },
        {
          id: "11",
          text: "November"
        },
        {
          id: "12",
          text: "December"
        }
      ],
      invoice_project_brand: "pnc logos",
      saved_form_loader: false,
      new_form_loader: false,
      invoice_data: {},
      mainloaderDiv: true,
      project: null,
      years: [],
      formData: {
        address_city: null,
        address_country: null,
        address_line1: null,
        address_line2: null,
        address_state: null,
        address_zip: null,
        card_holder_name: null,
        card_number: null,
        expiration_month: null,
        expiration_year: null,
        cvc: null,
        invoice_id: null,
        remember_my_card: false,
        currency_code: null,
        method_type: null,
        agree_terms_condition: false,
        previous_billing_address_id: null
      },
      // Saved Cards
      saved_cards: null,
      save_card_list: [],
      savedCard: {
        formData: {
          card_id: null,
          invoice_id: null,
          currency_code: null
        }
      },
      // Previouse Selected Addressess
      previous_selected_address: null,

      paypal_trasnection_id: null,
      payPalFormData: {
        invoice_id: null,
        currency_code: null,
        total_amount: null,
        transection_id: null
      }
    };
  },
  mounted() {
    document.title = this.$router.app._route.meta.pageTitle;
    this.printYears();
  },
  methods: {
    printYears() {
      var year = new Date().getFullYear();
      var current = year;
      var last_year = year + 10;
      for (var i = current; i <= last_year; i++) {
        // this.years.push(i);
        this.years.push({
          id: i,
          text: i
        });
      }
    },
    showTermsCondition() {
      this.$modal.show("terms-and-condition-modal");
    },
    hideTermsCondition() {
      this.$modal.hide("terms-and-condition-modal");
    },
    scrollToForm() {
      $("html, body").animate(
        {
          scrollTop: $("#pay-now-project-invoice").offset().top
        },
        2000
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.project-invoice-show {
  .main-title-header {
    padding: 0 0 30px;
    h4 {
      margin: 0;
      padding: 0;
      letter-spacing: 0px;
      color: #313f53;
      font-weight: 500;
      font-size: 24px;
      line-height: 33px;
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
  .top-btns {
    button {
      margin-left: 10px;
      &:first-child {
        margin-left: 0;
      }
    }
  }
  section {
    &:after {
      content: "";
      display: block;
      clear: both;
    }
    p {
      margin: 0;
      letter-spacing: 0.28px;
      color: #2a1c0b;
      font-weight: 200;
      line-height: 26px;
      span {
        letter-spacing: 0.28px;
        color: #323f54;
        font-weight: bold;
        a {
          letter-spacing: 0.28px;
          color: #323f54;
          font-weight: bold;
        }
      }
    }
    &.firm-details {
      padding: 25px 0;
    }
    &.item-area-invoice {
      padding: 25px 0px;
      .table {
        thead {
          th {
            border-bottom: none;
            border-top: none;
            vertical-align: middle;
          }
        }
        tbody {
          tr {
            background: #f9f9f9 0% 0% no-repeat padding-box;
            border-radius: 26px !important;
            td {
              border-bottom: 8px solid #fff;
              border-top: none;
              vertical-align: middle;
              letter-spacing: 0.28px;
              color: #2a1c0b;
              font-weight: 200;
            }
          }
        }
      }
      .total-area-calculation {
        float: right;
        background: #f9f9f9 0% 0% no-repeat padding-box;
        border-radius: 3px;
        padding: 20px 19px;
        width: 330px;
        &:after {
          content: "";
          display: block;
          clear: both;
        }
        .cal-box {
          display: table;
          width: 100%;
          p {
            display: table-cell;
            letter-spacing: 0.28px;
            color: #2a1c0b;
            line-height: 26px;
            vertical-align: middle;
          }
          h3 {
            font-size: 14px;
            display: table-cell;
            letter-spacing: 0.28px;
            color: #323f54;
            line-height: 36px;
            font-weight: bold;
            vertical-align: middle;
          }
        }
      }
    }
    &.payments-area-invoice {
      padding: 25px 0;
      .table {
        thead {
          th {
            border-bottom: none;
            border-top: none;
            vertical-align: middle;
          }
        }
        tbody {
          tr {
            background: #f9f9f9 0% 0% no-repeat padding-box;
            border-radius: 26px !important;
            td {
              border-bottom: 8px solid #fff;
              border-top: none;
              vertical-align: middle;
              letter-spacing: 0.28px;
              color: #2a1c0b;
              font-weight: 200;
            }
          }
        }
      }
    }
    &.payment-tabs-area {
      .nav-tabs {
        li.nav-item {
          padding-right: 41px;
          a.nav-link {
            border-bottom: none;
            border: none;
            padding-left: 0px;
            padding-bottom: 3px;
            padding-right: 0;
            letter-spacing: 0.28px;
            color: #2a1c0b;
            font-weight: 200;
            &:hover {
              border: none;
              border-bottom: none;
              background: transparent;
              &:after {
                content: "";
                display: block;
                height: 2px;
                background: #35c465;
                position: relative;
                top: 4px;
              }
            }
            &.active {
              border: none;
              border-bottom: none;
              background: transparent;
              &:after {
                content: "";
                display: block;
                height: 2px;
                background: #35c465;
                position: relative;
                top: 4px;
              }
            }
          }
        }
      }
      .tab-content {
        padding: 15px 0 0;
        .tab-pane {
          padding: 0;
        }
      }
    }
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
    .form-area {
      .form-group {
        padding-left: 0px;
        padding-right: 0px;
      }
      .checkobx-styling {
        padding-left: 22px;
      }
      .form-actions {
        padding: 20px 0 0;
      }
    }
    .terms-condition {
      padding: 15px 0 0;
      h3 {
        font-weight: bold;
      }
      .t-and-c-description-area {
        border: 1px solid #8080807a;
        padding: 15px;
        max-height: 225px;
        overflow: hidden;
        overflow-y: scroll;
      }
    }
  }
  .ModalLoader {
    .general-form {
      padding: 10px 20px 16px;
      h4 {
        border-bottom: 1px solid rgba(120, 130, 140, 0.13);
        text-transform: uppercase;
        padding: 0 0 10px;
        position: relative;
        letter-spacing: 0.28px;
        font-size: 14px;
        font-weight: 600;
        a {
          position: absolute;
          right: 0;
          top: -2px;
          font-size: 16px;
          border: 1px solid;
          padding: 0 6px;
        }
      }
      p {
        line-height: 26px;
      }
      .terms-condition {
        padding: 15px 0 0;
        .t-and-c-description-area {
          border: 1px solid hsla(0, 0%, 50.2%, 0.48);
          padding: 15px;
          max-height: 225px;
          overflow: hidden;
          overflow-y: scroll;
        }
      }
    }
  }
  .saved-card-form {
    .form-actions {
      padding-top: 0 !important;
    }
  }
}
</style>
