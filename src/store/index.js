import Vue from "vue";
import Vuex from "vuex";

//import module
import courses from "./modules/courses";
import auth from "./modules/auth";
import notification from "./modules/notification";

Vue.use(Vuex);
const storeData = {
  modules: {
    courses,
    auth,
    notification,
  },
};
const store = new Vuex.Store(storeData);
export default store;
