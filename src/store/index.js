import Vue from "vue";
import Vuex from "vuex";
import movies from "./modules/movies";
import modal from "./modules/modal";
import loader from "./modules/loader";
import notification from "./modules/notification";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    movies,
    modal,
    loader,
    notification,
  },
});

store.dispatch("initMovieStore");

export default store;
