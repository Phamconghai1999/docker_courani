// import axios from "axios";

const coursesModule = {
  state: {
    courses: [
      {
        _id: "611b8649d08ba736344f8f5c",
        title: "Hoc PHP fullstack",
        description: "Khoa hoc PHP2",
        url: "https://gg.com",
        state: "TO DO",
        user: {
          _id: "611b8591d08ba736344f8f57",
          username: "Pham Quang Thien",
        },
        createdAt: "2021-08-17T09:50:01.758Z",
        updatedAt: "2021-08-17T09:50:01.758Z",
        __v: 0,
      },
      {
        _id: "61338ef0d26ad90004aa8484",
        title: "Hoc VueJS ",
        description: "Khoa hoc VueJS",
        url: "https://vi.vuejs.org/",
        state: "DOING",
        user: {
          _id: "611b8591d08ba736344f8f57",
          username: "Pham Quang Thien",
        },
        createdAt: "2021-09-04T15:21:20.148Z",
        updatedAt: "2021-09-04T15:21:20.148Z",
        __v: 0,
      },
      {
        _id: "61338f61d26ad90004aa848a",
        title: "Hoc VueX ",
        description: "Khoa hoc VueX",
        url: "https://vi.vuejs.org/",
        state: "DONE",
        user: {
          _id: "611b8591d08ba736344f8f57",
          username: "Pham Quang Thien",
        },
        createdAt: "2021-09-04T15:23:13.096Z",
        updatedAt: "2021-09-04T15:23:13.096Z",
        __v: 0,
      },
      {
        _id: "61338f61d26ad90004aa845a",
        title: "Hoc VueRouter ",
        description: "Khoa hoc VueRouter",
        url: "https://vi.vuejs.org/",
        state: "DOING",
        user: {
          _id: "611b8591d08ba736344f8f57",
          username: "Pham Quang Thien",
        },
        createdAt: "2021-09-04T15:23:13.096Z",
        updatedAt: "2021-09-04T15:23:13.096Z",
        __v: 0,
      },
    ],
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
  mutations: {},
  actions: {},
};

export default coursesModule;
