<template>
  <div class="payment-form-wrapper"> 
      <div class="container">
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
            <div class="form-wrappers"
              v-if="
                typeof package_details.data !== 'undefined' &&
                  Object.keys(package_details.data).length
              "
            >
              <section class="brand-info">
                <h3 class="global-style-heading">Package Details</h3>
                <div class="horizontal-row"><hr></div>
                <div class="row">
                  <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <div class="pack-box-left">
                      <h1> {{ package_details.data.brand_name.name }} </h1>
                      <p>Package Name:</p>
                      <p class="bld-para">{{ package_details.data.package_name }}</p>
                    </div>
                  </div>
                  <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <div class="pack-info-center">
                      <h4>Package Information</h4>
                      <div v-html="package_details.data.package_description"></div>
                    </div>
                  </div>
                  <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <div class="pack-amount-right">
                      <h4>Package Amount</h4>
                      <h4>{{ package_details.data.currency.currency_symbol }}{{ package_details.data.package_amount }}</h4>
                    </div>
                  </div>
                </div>
              </section>
              <div class="seperator">
                <hr />
              </div>
              <section class="payment-tabs-area">
                <div class="form-area" id="home">
                  
                  <h3 class="sub-heading">Billing Information</h3>
                  <form
                      class="main-stripe-form"
                      v-on:submit.prevent="onSubmit($event)"
                  >
                    <div class="row">
                      <div class="col-sm-12">
                          <transition name="fade">
                              <div class="new-address">
                                  <div class="row">
                                    <div class="col-md-4">
                                      <div class="form-group">
                                        <label for="name"
                                            >Name<span class="heightlight"
                                            >*</span
                                            ></label
                                        >
                                        <input
                                            v-model="formData.name"
                                            type="text"
                                            class="form-control"
                                        />
                                      </div>
                                    </div>
                                    <div class="col-md-4">
                                      <div class="form-group">
                                        <label for="name"
                                            >Email<span class="heightlight"
                                            >*</span
                                            ></label
                                        >
                                        <input
                                            v-model="formData.email"
                                            type="email"
                                            class="form-control"
                                        />
                                      </div>
                                    </div>
                                    <div class="col-md-4">
                                      <div class="form-group">
                                        <label for="phone"
                                            >Phone<span class="heightlight"
                                            >*</span
                                            ></label
                                        >
                                        <input
                                            v-model="formData.phone"
                                            type="tel"
                                            class="form-control"
                                        />
                                      </div>
                                    </div>
                                  </div>
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
                                          >State<span class="heightlight"
                                          >*</span
                                          ></label
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
                                          >Country<span class="heightlight"
                                          >*</span
                                          ></label
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
                                          >Zip Code<span class="heightlight"
                                          >*</span
                                          ></label
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
                              <label
                                  for="expiration_month"
                                  class="control-label"
                              ></label>
                              <Select2
                                  v-model="formData.expiration_month"
                                  :options="expiry_month_array"
                                  :settings="{ placeholder: 'Expiry Month' }"
                              />
                              </div>
                          </div>
                          <div class="col-sm-4">
                              <div class="form-group">
                              <label
                                  for="expiration_year"
                                  class="control-label"
                              ></label>
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
                              <div class="col-sm-12">
                                  <div class="checkobx-styling">
                                  <div class="form-group cutom-terms">
                                      <label
                                      class="form-check-label"
                                      for="agree_terms_condition"
                                      ></label>
                                      <div class="checkbox">
                                      <input
                                          v-model="formData.agree_terms_condition"
                                          class="form-check-input"
                                          type="checkbox"
                                      />
                                      I have read and agree to the
                                      <a
                                          @click.prevent="showTermsCondition"
                                          href=""
                                          >terms and conditions</a
                                      >
                                      </div>
                                  </div>
                                  </div>
                              </div>
                          </div>
                          </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="form-actions">
                        <button
                            :disabled="disableSubmitBtn"
                            type="submit"
                            id="save-form"
                            class="default-global-btn"
                        >
                            Pay Now
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
                    </div>
                  </form>
                </div>
              </section>
            </div>

          </div>
          </transition>
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
                    <div class="t-and-c-description-area"
                      v-if="
                        typeof package_details.data !== 'undefined' &&
                          Object.keys(package_details.data).length
                      "
                    >
                      <div
                        v-if="
                          package_details.data.brand_name.name
                            .toLowerCase()
                            .trim() == 'pnc logos'
                        "
                      >
                        <h4>Refund Policy</h4>
                        <p>
                          In any occasion, any funds deposited will not be
                          liable for a refund if the initial design and concepts
                          (after delivery) are approved. All requests for refund
                          will be as per the following arrangement:
                        </p>

                        <p>
                          The client makes a solicitation where the underlying
                          ideas for a logo are provided. However once the client
                          approves or asks for changes in the initial designs,
                          the refund offer will be void and a request for refund
                          will not be approved.
                        </p>

                        <p>
                          Once the project enters the revision phase, the refund
                          offer will be void and a request for refund will not
                          be approved.
                        </p>

                        <p>
                          A refund request should have a legitimate reason which
                          must be qualified against the outline brief and client
                          input for revisions. Unless an idea has not been
                          composed as per the brief, a refund will not be
                          approved.
                        </p>

                        <h4>Refund on Logo Packages</h4>
                        <p>
                          If a demand for refund is made before the delivery of
                          initial design concepts, then you would qualify for a
                          full refund (excluding 10% administration and
                          preparing charge).
                        </p>
                        <p>
                          If the refund request is made within 5 business days
                          after the initial design, you will only be eligible
                          for a 66% refund (excluding 10% administration and
                          preparing expense).
                        </p>
                        <p>
                          If the refund request is made after 5 business days
                          and within 12 business days after the initial design
                          delivery, you will only be eligible for a 33% refund
                          (excluding 10% service & processing free).
                        </p>
                        <p>
                          No refund request will be approved after 15 business
                          days of the initial design delivery. However, we
                          believe in 100% customer satisfaction so you are
                          requested to reach out to us so we can address your
                          concerns.
                        </p>
                        <p>
                          No refund will be approved after the final files have
                          been delivered.
                        </p>

                        <h4>Refund on Website Packages</h4>
                        <p>
                          If a demand for refund is made before the delivery of
                          Initial Website Mockup then you would qualify for a
                          full refund (excluding 10% administration and
                          preparing charge).
                        </p>
                        <p>
                          If the refund request is made within 5 business days
                          after the Initial Website Mockup, you will only be
                          eligible for a 66% refund (excluding 10%
                          administration and preparing expense).
                        </p>
                        <p>
                          No request for refund will be approved once the
                          initial design mockup of your website has been
                          revised. No refund request will be approved after 10
                          business days of the Initial Website Mockup. However,
                          we believe in 100% customer satisfaction so you are
                          requested to reach out to us so we can address your
                          concerns.
                        </p>
                        <p>
                          In case of websites, refunds will not be entertained
                          once the client has approved the design and the
                          website is sent for development.
                        </p>
                        <p>
                          In instances, where websites have been developed and
                          uploaded on test links or actual domains, no refunds
                          will be entertained. PNC LOGOS will only be liable to
                          troubleshoot problems (if and when) the customer has
                          subscribed to web support services.
                        </p>

                        <h4>Refund on Custom Packages</h4>
                        <p>
                          For custom bundles, our refund policy (as stated
                          above) will apply individually to each service of the
                          bundle.
                        </p>
                        <p>
                          No refund request will be approved after 10 business
                          days of the Initial design. However, we believe in
                          100% customer satisfaction so you are requested to
                          reach out to us so we can address your concerns.
                        </p>

                        <h4>Refund on Marketing Packages</h4>
                        <p>
                          All of our Social Media Marketing Packages, SEO
                          Packages and other marketing related projects are
                          non-refundable under any circumstances.
                        </p>

                        <h4>Refund on Domain & Hosting</h4>
                        <p>
                          Services including domain, hosting, SSL and other
                          related services will not be cancelled or refunded
                          under any circumstances. PNC Logos holds the rights to
                          domains & hosting that have been purchased via PNC
                          Logos.
                        </p>
                        <p>
                          No request for refund will be approved after inaction
                          by the customer after 7 business days. If you wish to
                          restart the order, you will be charged a fee
                          contingent upon your venture.
                        </p>
                        <p>
                          No request for refund will be approved if the customer
                          is unresponsive at any point of time for 10 business
                          days.
                        </p>
                        <p>
                          All refund request should be made to the support
                          department. PNC Logos reserves the right to approve or
                          reject any and all refund requests based on a case to
                          case basis.
                        </p>
                        <p>
                          Money Back Guarantee depends on that the request is
                          set in accordance with some basic honesty. Where a
                          client has placed design orders with more than one
                          agency for the same job, with the intention of
                          claiming a refund, PNC Logos does not consider this to
                          be in good faith. In such instances, we reserve the
                          right to decline a refund request.
                        </p>
                        <p>
                          All design jobs require client input before finishing
                          the design which is why the customer must be active
                          throughout the process and gives feedback in order to
                          get the required results.
                        </p>
                        <p>
                          100% unique design guarantee qualifies you for a new
                          logo if the logo designed by PNC Logos is found to be
                          considerably similar to another design that already
                          exists. Any likeness to a current outline will be
                          considered a fortuitous event and PNC Logos will not
                          acknowledge any responsibility or claim of any
                          compensation in such a case. It is the client’s
                          responsibility to get their artwork copyrighted.
                        </p>
                        <p>
                          All refund requests should be properly documented &
                          must be communicated through the channels mentioned in
                          Section 6 with the reason for discontent. You agree to
                          a 10% processing fee deduction from the order amount
                          when the refund is processed. Refunds are issued
                          within 8 to 10 business days from the day that the
                          cancellation was requested. You agree that your
                          acceptance of the refund shall constitute your sole
                          and exclusive remedy with respect to related
                          Responses. Additionally, you acknowledge that you will
                          have no right (express or implied) to use any Response
                          or other work product, content, or media, nor will you
                          have any ownership interest in or to the same. All
                          sections of this Agreement which, by their nature,
                          shall survive termination, shall survive including
                          payment, indemnity and the disclaimers of warranty and
                          limitations of liability.
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
                          package_details.data.brand_name.name
                            .toLowerCase()
                            .trim() == 'platinum design services'
                        "
                      >
                        <h4>Refund Policy</h4>
                        <p>
                          In any occasion, any funds deposited will not be
                          liable for a refund if the initial design and concepts
                          (after delivery) are approved. All requests for refund
                          will be as per the following arrangement:
                        </p>

                        <p>
                          The client makes a solicitation where the underlying
                          ideas for a logo are provided. However once the client
                          approves or asks for changes in the initial designs,
                          the refund offer will be void and a request for refund
                          will not be approved.
                        </p>

                        <p>
                          Once the project enters the revision phase, the refund
                          offer will be void and a request for refund will not
                          be approved.
                        </p>

                        <p>
                          A refund request should have a legitimate reason which
                          must be qualified against the outline brief and client
                          input for revisions. Unless an idea has not been
                          composed as per the brief, a refund will not be
                          approved.
                        </p>

                        <h4>Refund on Logo Packages</h4>
                        <p>
                          If a demand for refund is made before the delivery of
                          initial design concepts, then you would qualify for a
                          full refund (excluding 10% administration and
                          preparing charge).
                        </p>
                        <p>
                          If the refund request is made within 5 business days
                          after the initial design, you will only be eligible
                          for a 66% refund (excluding 10% administration and
                          preparing expense).
                        </p>
                        <p>
                          If the refund request is made after 5 business days
                          and within 12 business days after the initial design
                          delivery, you will only be eligible for a 33% refund
                          (excluding 10% service & processing free).
                        </p>
                        <p>
                          No refund request will be approved after 15 business
                          days of the initial design delivery. However, we
                          believe in 100% customer satisfaction so you are
                          requested to reach out to us so we can address your
                          concerns.
                        </p>
                        <p>
                          No refund will be approved after the final files have
                          been delivered.
                        </p>

                        <h4>Refund on Website Packages</h4>
                        <p>
                          If a demand for refund is made before the delivery of
                          Initial Website Mockup then you would qualify for a
                          full refund (excluding 10% administration and
                          preparing charge).
                        </p>
                        <p>
                          If the refund request is made within 5 business days
                          after the Initial Website Mockup, you will only be
                          eligible for a 66% refund (excluding 10%
                          administration and preparing expense).
                        </p>
                        <p>
                          No request for refund will be approved once the
                          initial design mockup of your website has been
                          revised. No refund request will be approved after 10
                          business days of the Initial Website Mockup. However,
                          we believe in 100% customer satisfaction so you are
                          requested to reach out to us so we can address your
                          concerns.
                        </p>
                        <p>
                          In case of websites, refunds will not be entertained
                          once the client has approved the design and the
                          website is sent for development.
                        </p>
                        <p>
                          In instances, where websites have been developed and
                          uploaded on test links or actual domains, no refunds
                          will be entertained. Platinum Design Services will
                          only be liable to troubleshoot problems (if and when)
                          the customer has subscribed to web support services.
                        </p>

                        <h4>Refund on Custom Packages</h4>
                        <p>
                          For custom bundles, our refund policy (as stated
                          above) will apply individually to each service of the
                          bundle.
                        </p>
                        <p>
                          No refund request will be approved after 10 business
                          days of the Initial design. However, we believe in
                          100% customer satisfaction so you are requested to
                          reach out to us so we can address your concerns.
                        </p>

                        <h4>Refund on Marketing Packages</h4>
                        <p>
                          All of our Social Media Marketing Packages, SEO
                          Packages and other marketing related projects are
                          non-refundable under any circumstances.
                        </p>

                        <h4>Refund on Domain & Hosting</h4>
                        <p>
                          Services including domain, hosting, SSL and other
                          related services will not be cancelled or refunded
                          under any circumstances. Platinum Design Services
                          holds the rights to domains & hosting that have been
                          purchased via Platinum Design Services.
                        </p>
                        <p>
                          No request for refund will be approved after inaction
                          by the customer after 7 business days. If you wish to
                          restart the order, you will be charged a fee
                          contingent upon your venture.
                        </p>
                        <p>
                          No request for refund will be approved if the customer
                          is unresponsive at any point of time for 10 business
                          days.
                        </p>
                        <p>
                          All refund request should be made to the support
                          department. Platinum Design Services reserves the
                          right to approve or reject any and all refund requests
                          based on a case to case basis.
                        </p>
                        <p>
                          Money Back Guarantee depends on that the request is
                          set in accordance with some basic honesty. Where a
                          client has placed design orders with more than one
                          agency for the same job, with the intention of
                          claiming a refund, Platinum Design Services does not
                          consider this to be in good faith. In such instances,
                          we reserve the right to decline a refund request.
                        </p>
                        <p>
                          All design jobs require client input before finishing
                          the design which is why the customer must be active
                          throughout the process and gives feedback in order to
                          get the required results.
                        </p>
                        <p>
                          100% unique design guarantee qualifies you for a new
                          logo if the logo designed by Platinum Design Services
                          is found to be considerably similar to another design
                          that already exists. Any likeness to a current outline
                          will be considered a fortuitous event and Platinum
                          Design Services will not acknowledge any
                          responsibility or claim of any compensation in such a
                          case. It is the client’s responsibility to get their
                          artwork copyrighted.
                        </p>
                        <p>
                          All refund requests should be properly documented &
                          must be communicated through the channels mentioned in
                          Section 6 with the reason for discontent. You agree to
                          a 10% processing fee deduction from the order amount
                          when the refund is processed. Refunds are issued
                          within 8 to 10 business days from the day that the
                          cancellation was requested. You agree that your
                          acceptance of the refund shall constitute your sole
                          and exclusive remedy with respect to related
                          Responses. Additionally, you acknowledge that you will
                          have no right (express or implied) to use any Response
                          or other work product, content, or media, nor will you
                          have any ownership interest in or to the same. All
                          sections of this Agreement which, by their nature,
                          shall survive termination, shall survive including
                          payment, indemnity and the disclaimers of warranty and
                          limitations of liability.
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
                          package_details.data.brand_name.name
                            .toLowerCase()
                            .trim() == 'pnc au'
                        "
                      >
                        <h4>Refund Policy</h4>
                        <p>
                          In any occasion, any funds deposited will not be
                          liable for a refund if the initial design and concepts
                          (after delivery) are approved. All requests for refund
                          will be as per the following arrangement:
                        </p>

                        <p>
                          The client makes a solicitation where the underlying
                          ideas for a logo are provided. However once the client
                          approves or asks for changes in the initial designs,
                          the refund offer will be void and a request for refund
                          will not be approved.
                        </p>

                        <p>
                          Once the project enters the revision phase, the refund
                          offer will be void and a request for refund will not
                          be approved.
                        </p>

                        <p>
                          A refund request should have a legitimate reason which
                          must be qualified against the outline brief and client
                          input for revisions. Unless an idea has not been
                          composed as per the brief, a refund will not be
                          approved.
                        </p>

                        <h4>Refund on Logo Packages</h4>
                        <p>
                          If a demand for refund is made before the delivery of
                          initial design concepts, then you would qualify for a
                          full refund (excluding 10% administration and
                          preparing charge).
                        </p>
                        <p>
                          If the refund request is made within 5 business days
                          after the initial design, you will only be eligible
                          for a 66% refund (excluding 10% administration and
                          preparing expense).
                        </p>
                        <p>
                          If the refund request is made after 5 business days
                          and within 12 business days after the initial design
                          delivery, you will only be eligible for a 33% refund
                          (excluding 10% service & processing free).
                        </p>
                        <p>
                          No refund request will be approved after 15 business
                          days of the initial design delivery. However, we
                          believe in 100% customer satisfaction so you are
                          requested to reach out to us so we can address your
                          concerns.
                        </p>
                        <p>
                          No refund will be approved after the final files have
                          been delivered.
                        </p>

                        <h4>Refund on Website Packages</h4>
                        <p>
                          If a demand for refund is made before the delivery of
                          Initial Website Mockup then you would qualify for a
                          full refund (excluding 10% administration and
                          preparing charge).
                        </p>
                        <p>
                          If the refund request is made within 5 business days
                          after the Initial Website Mockup, you will only be
                          eligible for a 66% refund (excluding 10%
                          administration and preparing expense).
                        </p>
                        <p>
                          No request for refund will be approved once the
                          initial design mockup of your website has been
                          revised. No refund request will be approved after 10
                          business days of the Initial Website Mockup. However,
                          we believe in 100% customer satisfaction so you are
                          requested to reach out to us so we can address your
                          concerns.
                        </p>
                        <p>
                          In case of websites, refunds will not be entertained
                          once the client has approved the design and the
                          website is sent for development.
                        </p>
                        <p>
                          In instances, where websites have been developed and
                          uploaded on test links or actual domains, no refunds
                          will be entertained. PNC LOGOS Au will only be liable
                          to troubleshoot problems (if and when) the customer
                          has subscribed to web support services.
                        </p>

                        <h4>Refund on Custom Packages</h4>
                        <p>
                          For custom bundles, our refund policy (as stated
                          above) will apply individually to each service of the
                          bundle.
                        </p>
                        <p>
                          No refund request will be approved after 10 business
                          days of the Initial design. However, we believe in
                          100% customer satisfaction so you are requested to
                          reach out to us so we can address your concerns.
                        </p>

                        <h4>Refund on Marketing Packages</h4>
                        <p>
                          All of our Social Media Marketing Packages, SEO
                          Packages and other marketing related projects are
                          non-refundable under any circumstances.
                        </p>

                        <h4>Refund on Domain & Hosting</h4>
                        <p>
                          Services including domain, hosting, SSL and other
                          related services will not be cancelled or refunded
                          under any circumstances. PNC Logos Au holds the rights
                          to domains & hosting that have been purchased via PNC
                          Logos Au.
                        </p>
                        <p>
                          No request for refund will be approved after inaction
                          by the customer after 7 business days. If you wish to
                          restart the order, you will be charged a fee
                          contingent upon your venture.
                        </p>
                        <p>
                          No request for refund will be approved if the customer
                          is unresponsive at any point of time for 10 business
                          days.
                        </p>
                        <p>
                          All refund request should be made to the support
                          department. PNC Logos Au reserves the right to approve
                          or reject any and all refund requests based on a case
                          to case basis.
                        </p>
                        <p>
                          Money Back Guarantee depends on that the request is
                          set in accordance with some basic honesty. Where a
                          client has placed design orders with more than one
                          agency for the same job, with the intention of
                          claiming a refund, PNC Logos Au does not consider this
                          to be in good faith. In such instances, we reserve the
                          right to decline a refund request.
                        </p>
                        <p>
                          All design jobs require client input before finishing
                          the design which is why the customer must be active
                          throughout the process and gives feedback in order to
                          get the required results.
                        </p>
                        <p>
                          100% unique design guarantee qualifies you for a new
                          logo if the logo designed by PNC Logos Au is found to
                          be considerably similar to another design that already
                          exists. Any likeness to a current outline will be
                          considered a fortuitous event and PNC Logos Au will
                          not acknowledge any responsibility or claim of any
                          compensation in such a case. It is the client’s
                          responsibility to get their artwork copyrighted.
                        </p>
                        <p>
                          All refund requests should be properly documented &
                          must be communicated through the channels mentioned in
                          Section 6 with the reason for discontent. You agree to
                          a 10% processing fee deduction from the order amount
                          when the refund is processed. Refunds are issued
                          within 8 to 10 business days from the day that the
                          cancellation was requested. You agree that your
                          acceptance of the refund shall constitute your sole
                          and exclusive remedy with respect to related
                          Responses. Additionally, you acknowledge that you will
                          have no right (express or implied) to use any Response
                          or other work product, content, or media, nor will you
                          have any ownership interest in or to the same. All
                          sections of this Agreement which, by their nature,
                          shall survive termination, shall survive including
                          payment, indemnity and the disclaimers of warranty and
                          limitations of liability.
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
                          In any occasion, any funds deposited will not be
                          liable for a refund if the initial design and concepts
                          (after delivery) are approved. All requests for refund
                          will be as per the following arrangement:
                        </p>

                        <p>
                          The client makes a solicitation where the underlying
                          ideas for a logo are provided. However once the client
                          approves or asks for changes in the initial designs,
                          the refund offer will be void and a request for refund
                          will not be approved.
                        </p>

                        <p>
                          Once the project enters the revision phase, the refund
                          offer will be void and a request for refund will not
                          be approved.
                        </p>

                        <p>
                          A refund request should have a legitimate reason which
                          must be qualified against the outline brief and client
                          input for revisions. Unless an idea has not been
                          composed as per the brief, a refund will not be
                          approved.
                        </p>

                        <h4>Refund on Logo Packages</h4>
                        <p>
                          If a demand for refund is made before the delivery of
                          initial design concepts, then you would qualify for a
                          full refund (excluding 10% administration and
                          preparing charge).
                        </p>
                        <p>
                          If the refund request is made within 5 business days
                          after the initial design, you will only be eligible
                          for a 66% refund (excluding 10% administration and
                          preparing expense).
                        </p>
                        <p>
                          If the refund request is made after 5 business days
                          and within 12 business days after the initial design
                          delivery, you will only be eligible for a 33% refund
                          (excluding 10% service & processing free).
                        </p>
                        <p>
                          No refund request will be approved after 15 business
                          days of the initial design delivery. However, we
                          believe in 100% customer satisfaction so you are
                          requested to reach out to us so we can address your
                          concerns.
                        </p>
                        <p>
                          No refund will be approved after the final files have
                          been delivered.
                        </p>

                        <h4>Refund on Website Packages</h4>
                        <p>
                          If a demand for refund is made before the delivery of
                          Initial Website Mockup then you would qualify for a
                          full refund (excluding 10% administration and
                          preparing charge).
                        </p>
                        <p>
                          If the refund request is made within 5 business days
                          after the Initial Website Mockup, you will only be
                          eligible for a 66% refund (excluding 10%
                          administration and preparing expense).
                        </p>
                        <p>
                          No request for refund will be approved once the
                          initial design mockup of your website has been
                          revised. No refund request will be approved after 10
                          business days of the Initial Website Mockup. However,
                          we believe in 100% customer satisfaction so you are
                          requested to reach out to us so we can address your
                          concerns.
                        </p>
                        <p>
                          In case of websites, refunds will not be entertained
                          once the client has approved the design and the
                          website is sent for development.
                        </p>
                        <p>
                          In instances, where websites have been developed and
                          uploaded on test links or actual domains, no refunds
                          will be entertained. PNC LOGOS will only be liable to
                          troubleshoot problems (if and when) the customer has
                          subscribed to web support services.
                        </p>

                        <h4>Refund on Custom Packages</h4>
                        <p>
                          For custom bundles, our refund policy (as stated
                          above) will apply individually to each service of the
                          bundle.
                        </p>
                        <p>
                          No refund request will be approved after 10 business
                          days of the Initial design. However, we believe in
                          100% customer satisfaction so you are requested to
                          reach out to us so we can address your concerns.
                        </p>

                        <h4>Refund on Marketing Packages</h4>
                        <p>
                          All of our Social Media Marketing Packages, SEO
                          Packages and other marketing related projects are
                          non-refundable under any circumstances.
                        </p>

                        <h4>Refund on Domain & Hosting</h4>
                        <p>
                          Services including domain, hosting, SSL and other
                          related services will not be cancelled or refunded
                          under any circumstances. PNC Logos holds the rights to
                          domains & hosting that have been purchased via PNC
                          Logos.
                        </p>
                        <p>
                          No request for refund will be approved after inaction
                          by the customer after 7 business days. If you wish to
                          restart the order, you will be charged a fee
                          contingent upon your venture.
                        </p>
                        <p>
                          No request for refund will be approved if the customer
                          is unresponsive at any point of time for 10 business
                          days.
                        </p>
                        <p>
                          All refund request should be made to the support
                          department. PNC Logos reserves the right to approve or
                          reject any and all refund requests based on a case to
                          case basis.
                        </p>
                        <p>
                          Money Back Guarantee depends on that the request is
                          set in accordance with some basic honesty. Where a
                          client has placed design orders with more than one
                          agency for the same job, with the intention of
                          claiming a refund, PNC Logos does not consider this to
                          be in good faith. In such instances, we reserve the
                          right to decline a refund request.
                        </p>
                        <p>
                          All design jobs require client input before finishing
                          the design which is why the customer must be active
                          throughout the process and gives feedback in order to
                          get the required results.
                        </p>
                        <p>
                          100% unique design guarantee qualifies you for a new
                          logo if the logo designed by PNC Logos is found to be
                          considerably similar to another design that already
                          exists. Any likeness to a current outline will be
                          considered a fortuitous event and PNC Logos will not
                          acknowledge any responsibility or claim of any
                          compensation in such a case. It is the client’s
                          responsibility to get their artwork copyrighted.
                        </p>
                        <p>
                          All refund requests should be properly documented &
                          must be communicated through the channels mentioned in
                          Section 6 with the reason for discontent. You agree to
                          a 10% processing fee deduction from the order amount
                          when the refund is processed. Refunds are issued
                          within 8 to 10 business days from the day that the
                          cancellation was requested. You agree that your
                          acceptance of the refund shall constitute your sole
                          and exclusive remedy with respect to related
                          Responses. Additionally, you acknowledge that you will
                          have no right (express or implied) to use any Response
                          or other work product, content, or media, nor will you
                          have any ownership interest in or to the same. All
                          sections of this Agreement which, by their nature,
                          shall survive termination, shall survive including
                          payment, indemnity and the disclaimers of warranty and
                          limitations of liability.
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
// @ is an alias to /src
// import $ from "jquery";
import axios from "axios";
import $ from "jquery";
import Select2 from "v-select2-component";
// import PayPal from "vue-paypal-checkout";


export default {
  name: "payment-form-non-secure",
  components: {
    Select2,
    // PayPal
  },
  data() {
    return {
      disableSubmitBtn: false,
      event: null,
      loader: true,
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
      years: [],
      formData: {
        name : null,
        email : null,
        phone : null,
        // brand_id : null,
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
        currency_code: null,
        agree_terms_condition: false,
        package_id: null,
        // project_summary : null,
      },
      package_details : {},

    };
  },
  mounted() {
      this.printYears();
      this.getPackageDetails();
  },
  computed: {
    getActiveUserData() {
      return this.$store.state.auth;
    }
  },
  methods: {
    printYears() {
      var year = new Date().getFullYear();
      var current = year;
      var last_year = year + 10;
      for (var i = current; i <= last_year; i++) {
        this.years.push({ id: i, text: i });
      }
    },
    async getPackageDetails() {
      await axios.get(window.homeurl + "/sanctum/csrf-cookie").then(resp => {});
      await axios.get(window.homeurl + "/api/get-package-details/"+this.$route.params.package_id).then(resp => {

        this.package_details  = resp.data;
        if(Object.keys(this.package_details.data).length > 0) {
          this.formData.package_id = this.package_details.data.id;
        }
        this.loader = false;
      });
    },
    async onSubmit(event) {
      const $this = this;
      $this.disableSubmitBtn = true;
      await axios.get(window.homeurl + "/sanctum/csrf-cookie").then(resp => {});
      await axios
        .post(window.homeurl + "/api/payment-online-new-customer", this.formData)
        .then(res => {
          this.$store.dispatch("displayMessageErrors", {
            response: res,
            formEvent: event.target
          });
          this.formData.name = null;
          this.formData.email = null;
          this.formData.phone = null;
          this.formData.address_city = null;
          this.formData.address_country = null;
          this.formData.address_line1 = null;
          this.formData.address_line2 = null;
          this.formData.address_state = null;
          this.formData.address_zip = null;
          this.formData.card_holder_name = null;
          this.formData.card_number = null;
          this.formData.expiration_month = null;
          this.formData.expiration_year = null;
          this.formData.cvc = null;
          this.formData.agree_terms_condition = false;
          $this.disableSubmitBtn = false;
        })
        .catch(error => {
          this.$store.dispatch("displayMessageErrors", {
            response: error.response,
            formEvent: event.target
          });
          this.disableSubmitBtn = false;
        });
    },
    showTermsCondition() {
      this.$modal.show("terms-and-condition-modal");
    },
    hideTermsCondition() {
      this.$modal.hide("terms-and-condition-modal");
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
  }
};
</script>

<style lang="scss" scoped>
body .white-row.loader-route {
  top: 0;
}
.global-style-heading {
    margin: 0;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 0px;
    color: #313F53;
}
section.brand-info {
    padding-bottom: 40px;
    .pack-box-left {
      height: 100%;
      border-right: 1px solid #f9f9f9;
      h1 {
        font-size: 35px;
        font-weight: bold;
        padding-bottom: 15px;
        margin: 0;
      }
      p {
        margin: 0;
        font-size: 16px;
        &.bld-para {
          font-weight: bold;
          font-size: 25px;
        }
      }
    }
    .pack-info-center {
      max-height: 270px;
      overflow: hidden;
      overflow-y: scroll;
      h4 {
        margin: 0;
        font-size: 20px;
        font-weight: bold;
        letter-spacing: 0px;
        color: #313F53;
        padding-bottom: 35px;
      }
      div {
        ul {
          margin: 0;
          padding: 0;
          list-style: none;
          li {
              font-size: 15px;
              padding-bottom: 8px;
          }
        }
      }
    }
    .pack-amount-right {
        background: #f9f9f9;
        height: 100%;
        text-align: right;
        padding: 46px 35px;
        h4 {
          margin: 0;
          font-size: 20px;
          font-weight: bold;
          letter-spacing: 0px;
          color: #313F53;
          padding-bottom: 10px;
      }
    }
}
section.payment-tabs-area {
    padding: 25px 0 0;
    h3 {
      margin: 0;
      font-size: 20px;
      font-weight: bold;
      letter-spacing: 0px;
      padding-bottom: 20px;
    }
    .form-area .form-group {
      padding: 0 0 18px;
    }
    .checkobx-styling .form-group.cutom-terms .checkbox {
        padding-left: 14px;
    }
    .checkobx-styling .form-group.cutom-terms input.form-check-input {
        width: auto;
      left: 23px;
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
  
</style>
