const loaderStore = {
  state: {
    loading: false,
  },
  getters: {
    isLoading({ loading }) {
      return loading;
    },
  },
  mutations: {
    TOGGLE_LOADING(state, val) {
      state.loading = val;
    },
  },
  actions: {
    toggleLoader({ commit }, bool) {
      commit("TOGGLE_LOADING", bool);
    },
  },
};

export default loaderStore;
