const state = {
    loadingTrees: true,
    trees:[],
};
const getters = {
    loadingTrees: (state) => state.loadingTrees,
    trees:(state) => state.trees,
};
const actions = {
    fetchTrees({ commit,dispatch }) { 
        setTimeout(() => {

            commit('setLoadingTree', false);
            let result = [
                {
                    voluntieer: {
                        name: 'Jhonatan - Só um Sisteminha',
                        image: '',
                    },
                    species: {
                        name: 'Pequi',
                    },
                    data: '2020-05-03',
                    planted_number: 10,
                    planted_area: 1,
                    location: {
                        lat: -15.7869464,
                        lng: -47.8629339,
                    },
                    local_type: 'Aréa urbana',
                    biome: 'Cerrado'
                },
                {
                    voluntieer: {
                        name: 'Marcelo Mapinha geografico',
                        image: '',
                    },
                    species: {
                        name: 'Pequi',
                    },
                    data: '2020-05-03',
                    planted_number: 10,
                    planted_area: 1,
                    location: {
                        lat: -15.788784,
                        lng: -47.8621507,
                    },
                    local_type: 'Aréa urbana',
                    biome: 'Cerrado'
                },
            ];
            commit('setTrees', result);
            dispatch('showHeader', true);
            
         },2000)
    }
};
const mutations = {
    setLoadingTree(state, newValue) { 
        
        state.loadingTrees = newValue;
        
    },
    setTrees( state , newValue) { 
        state.trees = newValue;
    },
};

export default {
  state,
  getters,
  actions,
  mutations
};