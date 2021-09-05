<template lang="">
  <div>
    <div class="login-form">
      <div class="main-div">
        <div class="panel">
          <h2>Login</h2>
          <p>Please enter your username and password</p>
        </div>
        <form @submit="onSubmit">
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
          <div class="forgot">
            <a a href="#">Forgot password?</a>
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
        </form>
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
    ...mapActions(["loginApi"]),
    onSubmit(event) {
      event.preventDefault();
      this.loginApi({ username: this.username, password: this.password });
    },
  },
};
</script>
<style lang="css">
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
  max-width: 38%;
  padding: 50px 70px 70px 71px;
}

.login-form .form-group {
  margin-bottom: 10px;
}
.login-form {
  text-align: center;
}
.forgot a {
  color: #777777;
  font-size: 14px;
  text-decoration: underline;
}
.login-form .btn.btn-primary {
  background: #8ff04e none repeat scroll 0 0;
  border-color: #f0ad4e;
  color: #ffffff;
  font-size: 14px;
  width: 100%;
  height: 50px;
  line-height: 50px;
  padding: 0;
}
.forgot {
  text-align: left;
  margin-bottom: 30px;
}
.login-form .btn.btn-primary.reset {
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
</style>
