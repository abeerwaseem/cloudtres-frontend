<template>
  <div class="login" v-cloak>
    <div class="wrapper fadeInDown">
      <div id="formContent">
        <!-- Tabs Titles -->
        <!-- Icon -->
        <div class="fadeIn first">
          <h1>Cloudtres</h1>
        </div>

        <!-- Login Form -->
        <form class="login-form" v-on:submit.prevent="onSubmit($event)">
          <div class="form-group">
            <label for="email"></label>
            <input
              type="text"
              v-model="formData.email"
              class="fadeIn second"
              placeholder="Email"
            />
          </div>
          <div class="form-group">
            <label for="password"></label>
            <input
              type="password"
              v-model="formData.password"
              class="fadeIn third"
              placeholder="password"
            />
          </div>
          <div class="form-check">
            <div class="row">
              <div class="col-sm-6">
                <div class="rem-wrap">
                  <label for="remember"></label>
                  <input
                    v-model="formData.remember"
                    type="checkbox"
                    class="form-check-input"
                  />
                  <label class="form-check-label" for="exampleCheck1"
                    >Remember Me</label
                  >
                </div>
              </div>
              <div class="col-sm-6">
                <div
                  class="forget-wrap text-lg-right text-md-right text-sm-right"
                >
                  <router-link
                    class="underlineHover"
                    :to="{
                      path: '/forget-password'
                    }"
                    tag="a"
                  >
                    Forget Password
                  </router-link>
                  |
                  <router-link
                    class="underlineHover"
                    :to="{
                      path: '/register'
                    }"
                    tag="a"
                  >
                    Register
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <!-- <input type="submit" class="fadeIn fourth" value="Log In" /> -->
          <div class="col-sm-12">
            <div class="row">
              <div class="form-actions">
                <button
                  :disabled="disableSubmitBtn"
                  type="submit"
                  id="save-form"
                  class="fadeIn fourth"
                >
                  Login
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
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import $ from "jquery";
import axios from "axios";

export default {
  name: "Login",
  components: {},
  data() {
    return {
      formData: {
        email: null,
        password: null,
        remember: false
      },
      disableSubmitBtn: false,
      event: null
    };
  },
  mounted() {
    document.title =
      "Cloudtres - " + this.$router.app._route.meta.pageTitle;
  },
  computed: {
    getActiveUserData() {
      return this.$store.state.auth;
    }
  },
  methods: {
    async onSubmit(event) {
      const $this = this;
      $this.disableSubmitBtn = true;
      await axios.get(window.homeurl + "/sanctum/csrf-cookie").then(resp => {});
      await axios
        .post(window.api_homeurl + "/login", this.formData)
        .then(res => {
          this.$store.dispatch("displayMessageErrors", {
            response: res,
            formEvent: event.target
          });
          $this.disableSubmitBtn = false;
        })
        .catch(error => {
          this.$store.dispatch("displayMessageErrors", {
            response: error.response,
            formEvent: event.target
          });
          $this.disableSubmitBtn = false;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.note-message {
  padding-bottom: 10px;
  padding-top: 0;
  width: 59%;
  position: relative;
  text-align: center;
   p {
      padding: 0 16px;
      margin-bottom: 5px;
      color: #fff;
      font-size: 20px;
      text-align: center;
      padding-bottom: 15px;
  }
  a {
    background: #fff;
    margin: 0 8px;
    margin-bottom: 11px;
    padding: 4px 14px;
    border-radius: 6px;
    font-size: 15px;
  }
}
.form-check-input {
  margin-left: 0;
}
.forget-wrap a {
  padding: 0px 0 0;
}
.form-actions {
  width: 100%;
  button {
    background-color: #56baed;
    border: none;
    color: white;
    padding: 15px 80px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    text-transform: uppercase;
    font-size: 13px;
    box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
    border-radius: 5px 5px 5px 5px;
    margin: 5px 20px 40px 20px;
    transition: all 0.3s ease-in-out;
  }
}
.login {
  background-color: #56baed;
  height: 100vh;
  form {
    padding-top: 10px;
    .form-check {
      text-align: left;
      padding: 15px 37px 12px;
      input {
        position: relative;
        top: 2px;
      }
      label {
        margin: 0;
        &.form-check-label {
          padding: 0px 10px 0;
        }
      }
    }
  }
  a {
    color: #92badd;
    display: inline-block;
    text-decoration: none;
    font-weight: 400;
  }

  h2 {
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    display: inline-block;
    margin: 40px 8px 10px 8px;
    color: #cccccc;
  }

  /* STRUCTURE */

  .wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    min-height: 100%;
    padding: 20px;
  }

  #formContent {
    -webkit-border-radius: 10px 10px 10px 10px;
    border-radius: 10px 10px 10px 10px;
    background: #fff;
    padding: 30px;
    width: 90%;
    max-width: 450px;
    position: relative;
    padding: 0px;
    -webkit-box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
    box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
    text-align: center;
    padding-top: 20px;
  }

  #formFooter {
    background-color: #f6f6f6;
    border-top: 1px solid #dce8f1;
    padding: 25px;
    text-align: center;
    -webkit-border-radius: 0 0 10px 10px;
    border-radius: 0 0 10px 10px;
  }

  /* TABS */

  h2.inactive {
    color: #cccccc;
  }

  h2.active {
    color: #0d0d0d;
    border-bottom: 2px solid #5fbae9;
  }

  /* FORM TYPOGRAPHY*/

  input[type="button"],
  input[type="submit"],
  input[type="reset"] {
    background-color: #56baed;
    border: none;
    color: white;
    padding: 15px 80px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    text-transform: uppercase;
    font-size: 13px;
    -webkit-box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
    box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
    -webkit-border-radius: 5px 5px 5px 5px;
    border-radius: 5px 5px 5px 5px;
    margin: 5px 20px 40px 20px;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  input[type="button"]:hover,
  input[type="submit"]:hover,
  input[type="reset"]:hover {
    background-color: #39ace7;
  }

  input[type="button"]:active,
  input[type="submit"]:active,
  input[type="reset"]:active {
    -moz-transform: scale(0.95);
    -webkit-transform: scale(0.95);
    -o-transform: scale(0.95);
    -ms-transform: scale(0.95);
    transform: scale(0.95);
  }

  input[type="text"],
  input[type="password"] {
    background-color: #f6f6f6;
    border: none;
    color: #0d0d0d;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 5px;
    width: 85%;
    border: 2px solid #f6f6f6;
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -ms-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    -webkit-border-radius: 5px 5px 5px 5px;
    border-radius: 5px 5px 5px 5px;
  }

  input[type="text"]:focus,
  input[type="password"]:focus {
    background-color: #fff;
    border-bottom: 2px solid #5fbae9;
  }

  input[type="text"]:placeholder {
    color: #cccccc;
  }

  /* ANIMATIONS */

  /* Simple CSS3 Fade-in-down Animation */
  .fadeInDown {
    -webkit-animation-name: fadeInDown;
    animation-name: fadeInDown;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  @-webkit-keyframes fadeInDown {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
    }
    100% {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  @keyframes fadeInDown {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
    }
    100% {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  /* Simple CSS3 Fade-in Animation */
  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-moz-keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .fadeIn {
    opacity: 0;
    -webkit-animation: fadeIn ease-in 1;
    -moz-animation: fadeIn ease-in 1;
    animation: fadeIn ease-in 1;

    -webkit-animation-fill-mode: forwards;
    -moz-animation-fill-mode: forwards;
    animation-fill-mode: forwards;

    -webkit-animation-duration: 1s;
    -moz-animation-duration: 1s;
    animation-duration: 1s;
  }

  .fadeIn.first {
    -webkit-animation-delay: 0.4s;
    -moz-animation-delay: 0.4s;
    animation-delay: 0.4s;
  }

  .fadeIn.second {
    -webkit-animation-delay: 0.6s;
    -moz-animation-delay: 0.6s;
    animation-delay: 0.6s;
  }

  .fadeIn.third {
    -webkit-animation-delay: 0.8s;
    -moz-animation-delay: 0.8s;
    animation-delay: 0.8s;
  }

  .fadeIn.fourth {
    -webkit-animation-delay: 1s;
    -moz-animation-delay: 1s;
    animation-delay: 1s;
  }

  /* Simple CSS3 Fade-in Animation */
  .underlineHover:after {
    display: block;
    left: 0;
    bottom: -10px;
    width: 0;
    height: 2px;
    background-color: #56baed;
    content: "";
    transition: width 0.2s;
  }

  .underlineHover:hover {
    color: #0d0d0d;
  }

  .underlineHover:hover:after {
    width: 100%;
  }

  h1 {
    color: #60a0ff;
  }

  /* OTHERS */

  *:focus {
    outline: none;
  }

  #icon {
    width: 65%;
  }
}
</style>
