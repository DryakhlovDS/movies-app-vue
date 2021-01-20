const notificationStore = {
  state: {
    messagesPool: [],
  },
  getters: {
    lastMessage({ messagesPool }) {
      return messagesPool[messagesPool.length - 1];
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
