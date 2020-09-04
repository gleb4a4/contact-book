import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ModalVisible: false,
    users: [
      {
        id: 1,
        FirstName: "Santa",
        LastName: "Mario"
      },
      {
        id: 2,
        FirstName: "Olehandro",
        LastName: "Gomez"
      }
    ]
  },
  mutations: {
    Change_Modal: state => {
      state.ModalVisible = !state.ModalVisible;
    }
  },
  actions: {
    Toggle_Modal: ({ commit }) => {
      commit("Change_Modal");
    },

  },
  getters: {
    /**
     * @return {boolean}
     */
    Modal_State(state) {
      return state.ModalVisible;
    },
    Users(state) {
      return state.users;
    },


  }
});
