import axios from "axios";
import store from "../../store";

const coursesModule = {
  state: {
    courses: [],
  },
  getters: {
    courses: (state) => state.courses,
    coursesValue: (state) => {
      var coursesValue = {
        all: state.courses.length,
        todo: state.courses.filter((course) => course.state == "TO DO").length,
        doing: state.courses.filter((course) => course.state == "DOING").length,
        done: state.courses.filter((course) => course.state == "DONE").length,
      };
      // let all = state.courses.length;
      return coursesValue;
    },
  },
  mutations: {
    SET_COURSE: (state, data) => {
      data.courses.map((course) => {
        state.courses.unshift(course);
      });
      // console.log(store.getters["accessToken"]);
    },
  },
  actions: {
    async getCoursesApi({ commit }) {
      try {
        const response = await axios.get(
          "https://coursani.herokuapp.com/api/course/",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + store.getters["accessToken"],
            },
          }
        );
        commit("SET_COURSE", response.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};

export default coursesModule;
