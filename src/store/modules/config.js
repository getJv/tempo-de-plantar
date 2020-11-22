const state = {
    showHeader: true,
    headerTitle: '',
};
const getters = {
    showHeader: (state) => state.showHeader,
    headerTitle: (state) => state.headerTitle,
};
const actions = {
    toggleHeader({ getters, commit }) { 
        commit('setShowHeader', !getters.showHeader);
    },
    showHeader({commit },show) { 
        commit('setShowHeader', show);
    },
    updateHeaderTitle({ commit },newTitle) { 
        commit('setHeaderTitle', newTitle);
    }
};
const mutations = {
    setShowHeader(state, newValue) { 
        state.showHeader = newValue;
    },
    setHeaderTitle(state, newValue) { 
        state.headerTitle = newValue;
    },
   
};

export default {
  state,
  getters,
  actions,
  mutations
};