import Vue from "vue";
import Vuex from "vuex";
import tabs from "./modules/tabs.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    tabs
  }
})
