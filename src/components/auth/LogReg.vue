<template lang="">
  <div class="log-reg">
    <div class="login-form">
      <div class="main-div">
        <div class="panel">
          <h4 class="panel-title">Let's go !</h4>
        </div>
        <div>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="Username"
              v-model="username"
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              v-model="password"
            />
          </div>
          <div class="reg">
            <p>Create an account</p>
            <button class="btn btn-sm btn-primary btn-reg" @click="register()">
              Register
            </button>
          </div>
          <button class="btn btn-login" @click="login()">
            Login
          </button>
          <div class="loader" id="loader"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "log-reg",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["loginApi", "registerApi"]),
    login() {
      var loader = document.getElementById("loader");
      loader.style.display = "block";
      setTimeout(() => {
        loader.style.display = "none";
      }, 3000);
      var navbarNav = document.getElementById("navbarNav"); // collapse navbar
      navbarNav.classList.remove("show");
      this.loginApi({ username: this.username, password: this.password });
    },
    register() {
      this.registerApi({ username: this.username, password: this.password });
      var loader = document.getElementById("loader");
      var navbarNav = document.getElementById("navbarNav"); // collapse navbar
      navbarNav.classList.remove("show");
      loader.style.display = "block";
      setTimeout(() => {
        loader.style.display = "none";
      }, 3000);
    },
  },
};
</script>
<style lang="css">
@media only screen and (min-width: 740px) {
  .login-form .form-control {
    background: #f7f7f7 none repeat scroll 0 0;
    border: 1px solid #d4d4d4;
    border-radius: 4px;
    font-size: 14px;
    height: 50px;
    line-height: 50px;
  }
  .main-div {
    background: #ffffff none repeat scroll 0 0;
    border-radius: 2px;
    margin: 10px auto 30px;
    max-width: 30%;
    padding: 50px 70px 70px 71px;
  }

  .login-form .form-group {
    margin-bottom: 10px;
  }
  .login-form {
    text-align: center;
  }

  .login-form .btn-login {
    background: #8ff04e none repeat scroll 0 0;
    border-color: #f0ad4e;
    color: #ffffff;
    font-size: 14px;
    width: 100%;
    height: 50px;
    line-height: 50px;
    padding: 0;
  }

  .login-form .btn-login.reset {
    background: #ff9900 none repeat scroll 0 0;
  }
  .reg {
    display: flex;
    text-align: left;
    align-items: center;
    justify-content: space-between;
    margin: 5px;
  }
  .reg p {
    color: #777777;
    font-size: 14px;
    padding: 3px;
    margin: 0;
  }
  .btn-reg {
    font-size: 14px;
    height: 28px;
    padding: 3px;
    margin: 2px;
  }
  .back {
    text-align: left;
    margin-top: 10px;
  }
  .back a {
    color: #444444;
    font-size: 13px;
    text-decoration: none;
  }

  /* Loader */
  .loader {
    display: none;
    font-size: 10px;
    margin: 12px auto;
    text-indent: -9999em;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #ffffff;
    background: -moz-linear-gradient(
      left,
      #ffffff 10%,
      rgba(97, 255, 252, 0) 42%
    );
    background: -webkit-linear-gradient(
      left,
      #ffffff 10%,
      rgba(97, 255, 252, 0) 42%
    );
    background: -o-linear-gradient(
      left,
      #ffffff 10%,
      rgba(97, 255, 252, 0) 42%
    );
    background: -ms-linear-gradient(
      left,
      #ffffff 10%,
      rgba(97, 255, 252, 0) 42%
    );
    background: linear-gradient(
      to right,
      #ffffff 10%,
      rgba(97, 255, 252, 0) 42%
    );
    position: relative;
    -webkit-animation: load3 1.4s infinite linear;
    animation: load3 1.4s infinite linear;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
  }
  .loader:before {
    width: 50%;
    height: 50%;
    background: #8ff04e;
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
  }
  .loader:after {
    background: #fffffe;
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: "";
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  @-webkit-keyframes load3 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load3 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
}

/* If the screen size is 600px or less, set the font-size of <div> to 30px */
@media only screen and (max-width: 739px) {
  .login-form .form-control {
    background: #f7f7f7 none repeat scroll 0 0;
    border: 1px solid #d4d4d4;
    border-radius: 4px;
    font-size: 14px;
    height: 30px;
    line-height: 50px;
  }
  .main-div {
    background: #ffffff none repeat scroll 0 0;
    border-radius: 2px;
    margin: 15px auto 30px;
    max-width: 38%;
    padding: 3px;
  }
  .panel .panel-title {
    margin-top: 10px;
  }

  .login-form .form-group {
    margin-bottom: 10px;
  }
  .login-form {
    text-align: center;
  }
  .reg {
    text-align: left;
  }
  .reg p {
    color: #777777;
    font-size: 10px;
    margin: 0;
    padding: 2px;
    display: none;
  }
  .reg .btn-reg {
    font-size: 9px;
    height: 20px;
    padding: 2px;
    margin: 2px;
  }
  .login-form .btn-login {
    background: #8ff04e none repeat scroll 0 0;
    border-color: #f0ad4e;
    color: #ffffff;
    font-size: 14px;
    width: 70%;
    height: 30px;
    padding: 0;
  }
  .login-form .btn-login.reset {
    background: #ff9900 none repeat scroll 0 0;
  }
  .back {
    text-align: left;
    margin-top: 10px;
  }
  .back a {
    color: #444444;
    font-size: 13px;
    text-decoration: none;
  }

  /* Loader */
  .loader {
    display: none;
    font-size: 10px;
    margin: 12px auto;
    text-indent: -9999em;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #ffffff;
    background: -moz-linear-gradient(
      left,
      #ffffff 10%,
      rgba(97, 255, 252, 0) 42%
    );
    background: -webkit-linear-gradient(
      left,
      #ffffff 10%,
      rgba(97, 255, 252, 0) 42%
    );
    background: -o-linear-gradient(
      left,
      #ffffff 10%,
      rgba(97, 255, 252, 0) 42%
    );
    background: -ms-linear-gradient(
      left,
      #ffffff 10%,
      rgba(97, 255, 252, 0) 42%
    );
    background: linear-gradient(
      to right,
      #ffffff 10%,
      rgba(97, 255, 252, 0) 42%
    );
    position: relative;
    -webkit-animation: load3 1.4s infinite linear;
    animation: load3 1.4s infinite linear;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
  }
  .loader:before {
    width: 50%;
    height: 50%;
    background: #8ff04e;
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
  }
  .loader:after {
    background: #fffffe;
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: "";
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  @-webkit-keyframes load3 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load3 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
}
</style>
