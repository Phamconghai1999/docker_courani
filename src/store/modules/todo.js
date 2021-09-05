import axios from "axios";

const todoModule = {
  state: {
    todos: [],
  },
  getters: {
    todos: (state) => state.todos,
    allTodo: (state) => {
      return state.todos.length;
    },
    doneTodo: (state) => {
      return state.todos.filter((todo) => todo.completed).length;
    },
  },
  mutations: {
    CHECK_TODO: (state, todoID) => {
      console.log("check todoID", todoID);
      state.todos.forEach((todo) => {
        if (todo.id === todoID) {
          todo.completed = !todo.completed;
        }
      });
    },
    DELETE_TODO: (state, todoID) => {
      let index = state.todos.findIndex((todo) => todo.id == todoID);
      state.todos.splice(index, 1);
    },
    ADD_TODO: (state, newTodo) => {
      state.todos.unshift(newTodo);
      //   console.log(newTodo);
    },
    SET_TODO: (state, data) => {
      data.map((todo) => {
        state.todos.unshift(todo);
      });
      //   console.log(data);
    },
    CLEAR_TODO: (state) => {
      state.todos = [];
    },
  },
  actions: {
    deleteTodo(context, todoID) {
      context.commit("DELETE_TODO", todoID);
    },
    addTodo({ commit }, newTodo) {
      commit("ADD_TODO", newTodo);
    },
    async getTodo({ commit }) {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos?_limit=5"
        );
        commit("SET_TODO", response.data);
      } catch (error) {
        console.log(error);
      }
    },
    clearTodo({ commit }) {
      commit("CLEAR_TODO");
    },
  },
};

export default todoModule;
