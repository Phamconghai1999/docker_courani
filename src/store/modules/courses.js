import axios from "axios";
import Vue from "vue";
import store from "../../store";

const coursesModule = {
  state: {
    courses: [],
    openCourseEditor: false,
    courseEditor: {},
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
    courseEditor: (state) => state.courseEditor,
    openCourseEditor: (state) => state.openCourseEditor,
  },
  mutations: {
    DEBUG: (state, data) => {
      console.log(state, data);
    },
    SET_COURSE: (state, data) => {
      data.courses.map((course) => {
        state.courses.unshift(course);
      });
      // console.log(store.getters["accessToken"]);
    },
    CLEAR_COURSE: (state) => {
      state.courses = [];
    },
    SHOW_NEW_COURSE: (state, data) => {
      state.courses.unshift(data);
    },
    SHOW_COURSE_EDITOR: (state, id) => {
      state.openCourseEditor = true;
      // find course in state.course
      state.courses.map((course) => {
        if (course._id === id) {
          state.courseEditor = course;
        }
      });
      // console.log(id, state.courseEditor);
    },
    HIDE_COURSE_EDITOR: (state) => {
      state.openCourseEditor = false;
      state.courseEditor = {};
    },
    UPDATE_COURSES: (state, updatedCourse) => {
      var courseIndex = state.courses.findIndex(
        (course) => course._id == updatedCourse._id
      );
      Vue.set(state.courses, courseIndex, updatedCourse);
    },
  },
  actions: {
    // call actions
    async showCourseEditor({ commit }, id) {
      // console.log(id);
      commit("SHOW_COURSE_EDITOR", id);
    },
    async hideCourseEditor({ commit }) {
      commit("HIDE_COURSE_EDITOR");
    },
    // call API
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
    async createCourseApi({ commit }, newCourse) {
      try {
        // console.log("token: ", store.getters["accessToken"], newCourse);
        const response = await axios({
          method: "post",
          url: "https://coursani.herokuapp.com/api/course/create",
          data: {
            title: newCourse.Title,
            description: newCourse.Description,
            url: newCourse.Url,
            state: newCourse.State, // state trung voi state cua module
          },
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + store.getters["accessToken"],
          },
        });
        // handle response .data
        if (response.data.success) {
          commit("SHOW_NEW_COURSE", response.data.course);
        }
      } catch (error) {
        console.log(error.message);
      }
    },
    async updateCourseApi({ commit }, courseEdit) {
      // from CourseEditModal
      try {
        const response = await axios({
          method: "put",
          url: "https://coursani.herokuapp.com/api/course/" + courseEdit._id,
          data: {
            title: courseEdit.Title,
            description: courseEdit.Description,
            url: courseEdit.Url,
            state: courseEdit.State, // state trung voi state cua module
          },
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + store.getters["accessToken"],
          },
        });
        if (response.data.success) {
          // if success response:
          // commit("DEBUG", response.data.course);
          // update state.courses and reRender
          commit("UPDATE_COURSES", response.data.course);
        }
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};

export default coursesModule;
