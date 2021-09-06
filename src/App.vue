<template>
  <div id="app">
    <Navbar />
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
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Navbar,
    Body,
    LogReg,
    Footer,
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
