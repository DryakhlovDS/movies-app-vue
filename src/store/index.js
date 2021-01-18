import Vue from "vue";
import Vuex from "vuex";
import movies from "./modules/movies";
import modal from "./modules/modal";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    movies,
    modal,
  },
});

store.dispatch("initMovieStore");

export default store;
