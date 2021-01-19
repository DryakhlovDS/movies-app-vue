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
    queryMovies: false,
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
    allIDs({ top250Ids }) {
      return top250Ids;
    },
    isQueryMovies({ queryMovies }) {
      return queryMovies;
    },
  },
  mutations: {
    ADD_MOVIES_LIST(state, movies) {
      state.list = movies;
    },
    SET_CURRENT_PAGE(state, page) {
      state.currentPage = page;
    },
    DELETE_FROM_TOP250(state, index) {
      state.top250Ids.splice(index, 1);
    },
    TOGGLE_QUERY_MOVIES(state, val) {
      state.queryMovies = val;
    },
  },
  actions: {
    initMovieStore: {
      handler({ dispatch }) {
        dispatch("fetchMovies");
      },
      root: true,
    },
    async fetchMovies({ commit, getters, dispatch }) {
      try {
        dispatch("toggleLoader", true, { root: true });
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
        dispatch(
          "showNotify",
          {
            msg: err.message,
            title: "Error",
            variant: "danger",
          },
          { root: true }
        );
      } finally {
        dispatch("toggleLoader", false, { root: true });
        dispatch("toggleQueryMovies", false);
      }
    },
    async fetchSearch({ commit, dispatch }, query) {
      try {
        dispatch("toggleLoader", true, { root: true });
        query = query.target.elements["search"].value;
        if (!query) {
          dispatch("fetchMovies");
          return;
        }
        const response = await axios.get(`/?s=${query}`);
        if (response.Error) {
          throw Error(response.Error);
        }
        const movies = serializeMovies(response.Search);
        commit("ADD_MOVIES_LIST", movies);
      } catch (error) {
        console.log(error);
        dispatch(
          "showNotify",
          {
            msg: error.message,
            title: "Error",
            variant: "danger",
          },
          { root: true }
        );
      } finally {
        dispatch("toggleLoader", false, { root: true });
        dispatch("toggleQueryMovies", true);
      }
    },
    setCurrentPage({ commit, dispatch }, page) {
      commit("SET_CURRENT_PAGE", page);
      dispatch("fetchMovies");
    },
    deleteMovie({ commit, state }, id) {
      const index = state.top250Ids.indexOf(id);
      if (index !== -1) {
        commit("DELETE_FROM_TOP250", index);
      }
    },
    toggleQueryMovies({ commit }, bool) {
      commit("TOGGLE_QUERY_MOVIES", bool);
    },
  },
};

export default moviesStore;
