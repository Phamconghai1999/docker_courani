<template lang="">
  <div class="">
    <nav class="navbar navbar-expand navbar-light bg-light">
      <i class="fas fa-laptop-code mr-2 mb-1"></i>
      <a class="navbar-brand" href="#">Navbar</a>
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
        </div>
        <button
          v-if="isAuthenticated"
          class="btn btn-secondary btn-sm my-2 my-sm-0"
          @click="logoutApi"
        >
          Logout
        </button>
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
  },
  computed: {
    ...mapGetters(["isAuthenticated", "username"]),
  },
};
</script>
<style lang="css">
.user-name {
  text-align: center;
}

.user-name p {
  margin: auto 15px;
  padding: 0px;
}
.user-name p:hover {
  cursor: pointer;
}
</style>
