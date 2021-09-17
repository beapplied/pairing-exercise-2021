import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    applications: []
  },
  mutations: {
    storeApplications(state, data) {
      Vue.set(state, "applications", data);
    },
  },
  actions: {
    async fetchApplicantList(context) {
      const res = await fetch(`http://localhost:8080/applications`);
      const data = await res.json();
      context.commit("storeApplications", data);
    },
  },
  modules: {}
});
