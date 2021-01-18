const modalStore = {
  namespaced: true,
  state: {
    id: "",
    name: "",
  },
  getters: {
    titleMovie({ name }) {
      return name;
    },
    movieId({ id }) {
      return id;
    },
  },
  mutations: {
    SET_MOVIE_INFO(state, { id, title }) {
      state.id = id;
      state.name = title;
    },
  },
  actions: {
    setInfoMovie({ commit }, movie) {
      commit("SET_MOVIE_INFO", movie);
    },
  },
};

export default modalStore;
