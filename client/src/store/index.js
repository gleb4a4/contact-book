import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [
      {
        id: 1,
        FirstName: "Santa",
        LastName: "Mario",
        Age: "",
        Phone: "",
        City: ""
      },
      {
        id: 2,
        FirstName: "Olehandro",
        LastName: "Gomez",
        Age: "",
        Phone: "",
        City: ""
      }

    ]
  },
  mutations: {},
  actions: {},
  getters: {
    Users(state) {
      return state.users;
    }
  },
  modules: {}
});
