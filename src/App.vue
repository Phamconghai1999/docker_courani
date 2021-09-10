<template>
  <div id="app">
    <Navbar />
    <Notification />
    <div v-if="isAuthenticated">
      <Body />
    </div>
    <div v-else>
      <LogReg />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Body from "./components/Body.vue";
import Footer from "./components/Footer.vue";
import LogReg from "./components/auth/LogReg.vue";
import Notification from "./components/Notification.vue";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Navbar,
    Body,
    LogReg,
    Footer,
    Notification,
  },
  computed: {
    ...mapGetters(["isAuthenticated"]),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
