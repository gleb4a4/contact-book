import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ModalVisible: false,
    ModalOnInf: false,
    users: [
      {
        FirstName: "Santa",
        LastName: "Mario"
      },
      {
        FirstName: "Olehandro",
        LastName: "Gomez"
      }
    ]
  },
  mutations: {
    Change_Modal: state => {
      state.ModalVisible = !state.ModalVisible;
    },
    Change_ModalInf: state => {
      state.ModalOnInf = !state.ModalOnInf;
    }
  },
  actions: {
    Toggle_Modal: ({ commit }) => {
      commit("Change_Modal");
    },
    Toggle_ModalInf: ({ commit }) => {
      commit("Change_ModalInf");
    }
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
    /**
     * @return {boolean}
     */
    ModalOn(state) {
      return state.ModalOnInf;
    }
  }
});
