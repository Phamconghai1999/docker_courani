import Vue from "vue";
import Vuex from "vuex";

//import module
import todo from "./modules/todo";

Vue.use(Vuex);
const storeData = {
  modules: {
    todo,
  },
};
const store = new Vuex.Store(storeData);
export default store;
