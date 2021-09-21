<template lang="">
  <div class="">
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
      <i class="fas fa-laptop-code mr-2 mb-1"></i>
      <a class="navbar-brand" href="#">Courani</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#"
              >Home <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
        </ul>
        <div class="user-name">
          <p>{{ username }}</p>
          <button
            v-if="isAuthenticated"
            class="btn btn-secondary btn-sm my-2 my-sm-0 m-2"
            @click="logout"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "navbar",
  methods: {
    ...mapActions(["logoutApi"]),
    logout() {
      this.logoutApi();
      var navbarNav = document.getElementById("navbarNav"); // collapse navbar
      navbarNav.classList.remove("show");
    },
  },
  computed: {
    ...mapGetters(["isAuthenticated", "username"]),
  },
};
</script>
<style lang="css">
@media only screen and (min-width: 560px) {
  .user-name {
    display: flex;
    text-align: center;
  }

  .user-name p {
    margin: auto 15px;
    padding: 0px;
    font-weight: bold;
  }
  .user-name p:hover {
    cursor: pointer;
  }
}
@media only screen and (max-width: 559px) {
  .user-name {
    text-align: center;
  }

  .user-name p {
    margin: auto 15px;
    padding: 0px;
    font-weight: bold;
  }
  .user-name p:hover {
    cursor: pointer;
  }
}
</style>
