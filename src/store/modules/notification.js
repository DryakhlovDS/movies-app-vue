const notificationStore = {
  state: {
    messagesPool: [],
  },
  getters: {
    lastMessage({ messagesPool }) {
      return messagesPool.pop();
    },
  },
  mutations: {
    ADD_MESSAGE_POOL(state, msg) {
      state.messagesPool.push(msg);
    },
  },
  actions: {
    showNotify({ commit }, msg) {
      commit("ADD_MESSAGE_POOL", msg);
    },
  },
};

export default notificationStore;
