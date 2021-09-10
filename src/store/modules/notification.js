const notificationModule = {
  state: {
    isNotificated: false,
    notiType: "Courani:",
    notiMessage: "",
  },
  getters: {
    notiType: (state) => state.notiType,
    notiMessage: (state) => state.notiMessage,
    isNotificated: (state) => state.isNotificated,
  },
  mutations: {
    NOTIFY: (state, data) => {
      state.isNotificated = true;
      state.notiMessage = data.message;
      state.notiType = data.title;
      setTimeout(() => {
        state.isNotificated = false;
      }, 3000);
    },
    CLEAR_NOTIFICATION(state) {
      state.isNotificated = false;
    },
  },
  actions: {
    showNotification({ commit }, data) {
      commit("NOTIFY", data);
    },
  },
};

export default notificationModule;
