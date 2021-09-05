import Vue from "vue";
import Vuex from "vuex";

//import module
import courses from "./modules/courses";

Vue.use(Vuex);
const storeData = {
  modules: {
    courses,
  },
};
const store = new Vuex.Store(storeData);
export default store;
