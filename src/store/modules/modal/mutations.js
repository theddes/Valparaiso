import Vue from "vue";

const mutations = {
  open(state) {
    Vue.set(state, "open", true);
  },
  close(state) {
    Vue.set(state, "open", false);
  }
};

export default mutations;
