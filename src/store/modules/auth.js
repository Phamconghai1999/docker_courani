import axios from "axios";

const authModule = {
  state: {
    isAuthenticated: false,
    errorMessage: "",
    accessToken: null,
    username: null,
  },
  getters: {
    isAuthenticated: (state) => state.isAuthenticated,
    accessToken: (state) => state.accessToken,
    username: (state) => state.username,
  },
  mutations: {
    AUTHENTICATE(state, data) {
      state.isAuthenticated = true;
      state.accessToken = data.accessToken;
      state.username = data.username;
      //   console.log(data);
    },
    CLEAR_SESSION(state) {
      state.isAuthenticated = false;
      state.accessToken = null;
      state.username = null;
    },
  },
  actions: {
    async loginApi({ commit }, formData) {
      try {
        const response = await axios.post(
          "https://coursani.herokuapp.com/api/auth/login",
          {
            username: formData.username,
            password: formData.password,
          }
        );
        var resData = response.data;

        // console.log(resData);
        if (resData.success) {
          // alert(resData.message);
          let noti = {
            title: "Login Successful",
            message: "Have a good day",
          };
          this.dispatch("showNotification", noti, { root: true }); // call actions from another module
          commit("AUTHENTICATE", resData);
        } else {
          alert(resData.message);
        }
      } catch (error) {
        console.log(error.message);
      }
    },
    async registerApi(context, formData) {
      try {
        const response = await axios.post(
          "https://coursani.herokuapp.com/api/auth/register",
          {
            username: formData.username,
            password: formData.password,
          }
        );
        var resData = response.data;

        console.log(resData);
        if (resData.success) {
          // alert(resData.message);
          let noti = {
            title: "Register Successful",
            message: "Login and enjoy !",
          };
          this.dispatch("showNotification", noti, { root: true }); // call actions from another module
          // commit("AUTHENTICATE", resData);
        } else {
          let noti = {
            title: "Register Report !",
            message: resData.message,
          };
          this.dispatch("showNotification", noti, { root: true });
        }
      } catch (error) {
        console.log(error.message);
      }
    },
    async logoutApi({ commit }) {
      try {
        commit("CLEAR_SESSION");
        let noti = {
          title: "Signed out",
          message: "See you again",
        };
        this.dispatch("showNotification", noti, { root: true });
      } catch (error) {
        console.log(error);
      }
    },
  },
};

export default authModule;
