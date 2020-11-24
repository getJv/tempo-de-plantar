const state = {
    loadingTrees: true,
    trees:[],
};
const getters = {
    loadingTrees: (state) => state.loadingTrees,
    trees:(state) => state.trees,
};
const actions = {
    createTree({ commit },newObj) { 
        

            //commit('setCreatingTree', true);
            let obj = [
                {
                    voluntieer: {
                        name: 'Jhonatan - Só um Sisteminha',
                        image: '',
                    },
                    species: {
                        name: newObj.especie,
                    },
                    data: newObj.dataPlantio,
                    planted_number: newObj.quantidadeMudas,
                    planted_area: newObj.raioPlantio,
                    location: {
                        lat: newObj.latitude,
                        lng: newObj.longitude,
                    },
                    local_type: newObj.localDePlantio,
                    isSavanna: newObj.especieNativaCerrado
                },
            ];
            commit('addTree', obj);
            //commit('setCreatingTree', false);
            
       
    },
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
    addTree( state , newTree) { 
        state.trees.push(newTree) ;
    },
};

export default {
  state,
  getters,
  actions,
  mutations
};