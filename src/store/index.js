import Vue from "vue";
import Vuex from "vuex";

//import module
import courses from "./modules/courses";
import auth from "./modules/auth";

Vue.use(Vuex);
const storeData = {
  modules: {
    courses,
    auth,
  },
};
const store = new Vuex.Store(storeData);
export default store;
