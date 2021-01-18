import IDs from "../mock/imdb_top250";
import axios from "@/plugins/axios/axios";

function serializeMovies(movies) {
  return movies.reduce((acc, movie) => {
    acc[movie.imdbID] = movie;
    return acc;
  }, {});
}

const moviesStore = {
  namespaced: true,
  state: {
    top250Ids: IDs,
    moviesPerPage: 12,
    currentPage: 1,
    list: {},
  },
  getters: {
    slicedIDs({ top250Ids }) {
      return (from, to) => top250Ids.slice(from, to);
    },
    currentPage({ currentPage }) {
      return currentPage;
    },
    moviesPerPage({ moviesPerPage }) {
      return moviesPerPage;
    },
    moviesList({ list }) {
      return Object.values(list);
    },
    totalMovies({ top250Ids }) {
      return top250Ids.length;
    },
  },
  mutations: {
    ADD_MOVIES_LIST(state, movies) {
      state.list = movies;
    },
    SET_CURRENT_PAGE(state, page) {
      state.currentPage = page;
    },
    DELETE_FROM_TOP250(state, id) {
      const index = state.top250Ids.indexOf(id);
      state.top250Ids.splice(index, 1);
      console.log(index);
    },
  },
  actions: {
    initMovieStore: {
      handler({ dispatch }) {
        dispatch("fetchMovies");
      },
      root: true,
    },
    async fetchMovies({ commit, getters }) {
      try {
        const { slicedIDs, currentPage, moviesPerPage } = getters;
        const from = (currentPage - 1) * moviesPerPage;
        const to = currentPage * moviesPerPage;
        const moviesArray = slicedIDs(from, to);
        const request = moviesArray.map((id) =>
          axios.get("/", {
            params: {
              i: id,
            },
          })
        );
        const response = await Promise.all(request);
        const movies = serializeMovies(response);
        commit("ADD_MOVIES_LIST", movies);
      } catch (err) {
        console.log(err);
      }
    },
    setCurrentPage({ commit, dispatch }, page) {
      commit("SET_CURRENT_PAGE", page);
      dispatch("fetchMovies");
    },
    deleteMovie({ commit }, id) {
      commit("DELETE_FROM_TOP250", id);
    },
  },
};

export default moviesStore;
