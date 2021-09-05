import Vue from "vue";
import Router from "vue-router";
import Body from "../components/Body.vue";
import LogReg from "../components/LogReg.vue";

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Body,
    },
    {
      path: "/login",
      home: "loginPage",
      component: LogReg,
    },
  ],
});
