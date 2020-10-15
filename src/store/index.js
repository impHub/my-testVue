import Vue from "vue";
import Vuex from "vuex";
import { setRoutes } from "../router/async";
// import { from } from "core-js/fn/array";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    route: []
  },
  mutations: {
    SET_ROUTES(state, routes) {
      console.log(routes);
      setRoutes(routes);
    }
  },
  actions: {},
  modules: {}
});
